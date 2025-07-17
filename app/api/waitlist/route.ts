import { NextResponse } from 'next/server';

const securityHeaders = {
    'Content-Security-Policy': "default-src 'self'",
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin'
};

function validateEmail(email: string): boolean {
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    return emailRegex.test(email) && email.length <= 254;
}

export async function POST(request: Request) {
    try {
        const { email, missionTitle, missionId } = await request.json();
        if (!email || !validateEmail(email)) {
            return NextResponse.json(
                { error: 'Invalid email' },
                { status: 400, headers: securityHeaders }
            );
        }

        const apiKey = process.env.MAILCHIMP_API_KEY;
        const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX; 
        const listId = process.env.MAILCHIMP_AUDIENCE_ID;
        if (!apiKey || !serverPrefix || !listId) {
            throw new Error('Missing Mailchimp environment variables');
        }

        const url = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${listId}/members`;
        const basicAuth = Buffer.from(`anystring:${apiKey}`).toString('base64');

        const merge_fields: Record<string, string> = {};
        if (missionTitle) merge_fields.MISSION = missionTitle;
        if (missionId) merge_fields.MISSIONID = missionId;

        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${basicAuth}`,
            },
            body: JSON.stringify({
                email_address: email,
                status: 'subscribed',
                merge_fields,
            }),
        });

        if (res.status === 400) {
            const error = await res.json();
            if (error.title === 'Member Exists') {
                return NextResponse.json(
                    { message: 'You are already on the waitlist!' },
                    { status: 200, headers: securityHeaders }
                );
            }
            return NextResponse.json(
                { error: error.detail || 'Error subscribing to the waitlist' },
                { status: 400, headers: securityHeaders }
            );
        }
        if (!res.ok) {
            const error = await res.json().catch(() => ({}));
            return NextResponse.json(
                { error: error.detail || 'Error subscribing to the waitlist' },
                { status: 500, headers: securityHeaders }
            );
        }
        return NextResponse.json(
            { message: 'We will notify you when the mission is ready!' },
            { status: 200, headers: securityHeaders }
        );
    } catch (error) {
        console.error('Waitlist error:', error);
        return NextResponse.json(
            { error: 'Error processing the request' },
            { status: 500, headers: securityHeaders }
        );
    }
} 
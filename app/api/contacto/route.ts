import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import nodemailer from 'nodemailer';

const rateLimit = new Map<string, { count: number; timestamp: number }>();

function checkRateLimit(ip: string): boolean {
    const now = Date.now();
    const limit = rateLimit.get(ip);

    if (!limit) {
        rateLimit.set(ip, { count: 1, timestamp: now });
        return true;
    }

    if (now - limit.timestamp > 3600000) {
        rateLimit.set(ip, { count: 1, timestamp: now });
        return true;
    }

    if (limit.count >= 5) {
        return false;
    }

    limit.count++;
    return true;
}

function sanitizeInput(input: string): string {
    return input.replace(/[<>]/g, '').trim().slice(0, 1000);
}

function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.length <= 254;
}

function validateName(name: string): boolean {
    return name.length >= 2 && name.length <= 50;
}

function validateMessage(message: string): boolean {
    return message.length >= 10 && message.length <= 1000;
}

function isValidIP(ip: string): boolean {
    if (process.env.NODE_ENV === "development") {
        return ip === "127.0.0.1" || ip === "::1" || ip === "localhost";
    }

    const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
    const ipv6Regex = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
    return ipv4Regex.test(ip) || ipv6Regex.test(ip);
}

const securityHeaders = {
    'Content-Security-Policy': "default-src 'self'",
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin'
};

export async function POST(request: Request) {
    try {
        const headersList = await headers();
        const forwardedFor = headersList.get('x-forwarded-for');
        const ip = forwardedFor ? forwardedFor.split(',')[0] : 'unknown';

        if (!isValidIP(ip)) {
            return NextResponse.json(
                { error: 'IP no válida' },
                { status: 400, headers: securityHeaders }
            );
        }

        if (!checkRateLimit(ip)) {
            return NextResponse.json(
                { error: 'Demasiadas solicitudes. Por favor, espera un momento.' },
                { status: 429, headers: securityHeaders }
            );
        }

        const { nombre, email, mensaje, edad } = await request.json();

        if (!nombre || !email || !mensaje || !edad) {
            return NextResponse.json(
                { error: 'Todos los campos son requeridos' },
                { status: 400, headers: securityHeaders }
            );
        }

        if (!validateName(nombre)) {
            return NextResponse.json(
                { error: 'El nombre debe tener entre 2 y 50 caracteres' },
                { status: 400, headers: securityHeaders }
            );
        }

        if (!validateEmail(email)) {
            return NextResponse.json(
                { error: 'Email inválido' },
                { status: 400, headers: securityHeaders }
            );
        }

        if (!validateMessage(mensaje)) {
            return NextResponse.json(
                { error: 'El mensaje debe tener entre 10 y 1000 caracteres' },
                { status: 400, headers: securityHeaders }
            );
        }

        const sanitizedName = sanitizeInput(nombre);
        const sanitizedEmail = sanitizeInput(email);
        const sanitizedMessage = sanitizeInput(mensaje);
        const sanitizedEdad = sanitizeInput(edad);

        const requiredEnvVars = [
            'SMTP_HOST',
            'SMTP_PORT',
            'SMTP_USER',
            'SMTP_PASSWORD',
            'CONTACT_EMAIL'
        ];

        for (const envVar of requiredEnvVars) {
            if (!process.env[envVar]) {
                throw new Error(`Missing required environment variable: ${envVar}`);
            }
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.SMTP_USER,
            to: process.env.CONTACT_EMAIL,
            subject: `Consulta de clase individual de ${sanitizedName}`,
            text: `
Nombre: ${sanitizedName}
Email: ${sanitizedEmail}
Edad del estudiante: ${sanitizedEdad}
IP: ${ip}
Mensaje: ${sanitizedMessage}
            `,
            html: `
<h3>Consulta para clases personalizadas</h3>
<p><strong>Nombre:</strong> ${sanitizedName}</p>
<p><strong>Email:</strong> ${sanitizedEmail}</p>
<p><strong>Edad del estudiante:</strong> ${sanitizedEdad}</p>
<p><strong>IP:</strong> ${ip}</p>
<p><strong>Mensaje:</strong> ${sanitizedMessage}</p>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Mensaje enviado correctamente' },
            { status: 200, headers: securityHeaders }
        );

    } catch (error) {
        console.error('Error interno:', error);
        return NextResponse.json(
            { error: 'Error al procesar la solicitud' },
            { status: 500, headers: securityHeaders }
        );
    }
}

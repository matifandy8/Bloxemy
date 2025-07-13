import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const nonce = crypto.randomUUID();

  const csp = [
    `default-src 'self'`,
    `script-src 'self' 'nonce-${nonce}' https://cdn.jsdelivr.net`,
    `style-src 'self' 'nonce-${nonce}' https://fonts.googleapis.com https://cdn.jsdelivr.net`,
    `font-src 'self' https://fonts.gstatic.com https://cdn.jsdelivr.net`,
    `img-src 'self' data:`,
    `object-src 'none'`,
    `worker-src 'self' blob:`,
    `connect-src 'self'`,
    `base-uri 'none'`,
    `form-action 'self'`,
  ].join('; ');

  const response = NextResponse.next();

  if (process.env.NODE_ENV === 'production') {
    response.cookies.set('nonce', nonce, { httpOnly: false }); 
    response.headers.set('Content-Security-Policy', csp);
  }

  return response;
}

export const config = {
  matcher: ['/((?!_next/|api/|favicon.ico).*)'],
};

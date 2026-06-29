import { NextResponse } from 'next/server';

const DESTINATION = 'https://www.brian-g.com/';

export function middleware() {
  return NextResponse.redirect(DESTINATION, 308);
}

export const config = {
  matcher: [
    '/',
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};

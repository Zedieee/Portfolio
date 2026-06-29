import { NextResponse } from 'next/server';

export function middleware() {
  return NextResponse.redirect('https://www.brian-g.com/', 301);
}

export const config = {
  matcher: '/:path*',
};

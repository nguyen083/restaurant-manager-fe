import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const protectedRoutes = [ '/profile']

const authPage = ['/login', '/register']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const sessionToken = request.cookies.get('sessionToken')
  
  if (protectedRoutes.some(path => pathname.startsWith(path)) && !sessionToken) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  if (authPage.some(path => pathname.startsWith(path)) && sessionToken) {
    return NextResponse.redirect(new URL('/home', request.url))
  }
  return NextResponse.next()
}

// Apply middleware chỉ cho các đường dẫn cần bảo vệ
export const config = {
  matcher: [
    ... protectedRoutes,
    ... authPage,
  ],
}

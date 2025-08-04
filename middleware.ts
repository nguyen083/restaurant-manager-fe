import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// const protectedRoutes = ['/home'];

// const authPage = ['/login', '/register'];

export function middleware(request: NextRequest) {
  // const sessionToken = request.cookies.get("sessionToken");
  
  // if (protectedRoutes.includes(request.nextUrl.pathname) && !sessionToken) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }
  // if (authPage.includes(request.nextUrl.pathname) && sessionToken) {
  //   return NextResponse.redirect(new URL("/home", request.url));
  // }
  return NextResponse.next()
}

// Apply middleware chỉ cho các đường dẫn cần bảo vệ
export const config = {
  matcher: [
  ],
}

import { NextResponse } from 'next/server'

import { cookies } from 'next/headers'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  const cookieStore = await cookies()
  const user = cookieStore.get('user')
  const path = request.nextUrl.pathname

  console.debug('middleware user', user)
  console.debug('middleware path', path)

  if (user) {
    if (path === '/login') {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }
  
    if (path === '/') {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }
  } else {
    if (path === '/dashboard') {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [ '/', '/login', '/dashboard' ],
}

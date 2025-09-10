import { auth } from '@/app/api/auth/auth'
import { NextResponse } from 'next/server'

export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth

  // Chronione ścieżki
  const protectedPaths = ['/dashboard']
  const isProtectedPath = protectedPaths.some((path) =>
    nextUrl.pathname.startsWith(path)
  )

  // Przekierowanie na login jeśli użytkownik nie jest zalogowany i próbuje wejść na chronioną ścieżkę
  if (isProtectedPath && !isLoggedIn) {
    return NextResponse.redirect(new URL('/login', nextUrl))
  }

  // Przekierowanie na dashboard jeśli użytkownik jest zalogowany i próbuje wejść na stronę logowania
  if (
    isLoggedIn &&
    (nextUrl.pathname === '/login' || nextUrl.pathname === '/register')
  ) {
    return NextResponse.redirect(new URL('/dashboard', nextUrl))
  }

  return NextResponse.next()
})

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}

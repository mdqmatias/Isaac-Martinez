import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Permite acceso a recursos estáticos, la página de password y robots.txt
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/Logo') ||
    pathname.startsWith('/Isologo') ||
    pathname.includes('.') || // Para capturar extensiones de archivos como .png, .svg, .ico, .txt
    pathname === '/password'
  ) {
    return NextResponse.next()
  }

  // Verifica si existe la cookie de acceso
  const hasAccess = request.cookies.has('demo_access')

  if (!hasAccess) {
    const url = request.nextUrl.clone()
    url.pathname = '/password'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt).*)',
  ],
}

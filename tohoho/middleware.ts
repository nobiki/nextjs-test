import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// export function middleware(request: NextRequest) {
//   console.log(request.url)
//   return NextResponse.redirect(new URL('/', request.url))
// }

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/mid-test1')) {
      return NextResponse.redirect(new URL('/', request.url))
    }
  if (request.nextUrl.pathname.startsWith('/mid-test2')) {
      return NextResponse.rewrite(new URL('/', request.url))
    }
}

// export const config = {
//   matcher: '/middleware-test/:path*',
// }

export const config = {
  matcher: ['/mid-test1/:path*', '/(mid-test2|mid-test3)/:path*'],
}

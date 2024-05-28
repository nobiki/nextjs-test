import { type NextRequest } from 'next/server'

export function GET(request: NextRequest) {
  const param1 = request.nextUrl.searchParams.get('param1')
  console.log({param1})
  return Response.json({ result: 'OK' })
}

import { cookies } from 'next/headers'

export async function GET(request: Request) {
  var my_cookie = cookies().get('my_cookie')
  var my_cookie_value = my_cookie ? my_cookie.value : 'DUMMY_DATA'
  return new Response('OK', {status: 200, headers: {'Set-Cookie': `my_cookie=${my_cookie_value}`}})
}

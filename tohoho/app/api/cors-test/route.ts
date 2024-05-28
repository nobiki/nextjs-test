export async function GET(request: Request) {
  return Response.json({ result: 'OK' }, {
      status: 200,
      headers: {
            'Access-Control-Allow-Origin': 'https://www.example.com/',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          },
    })
}

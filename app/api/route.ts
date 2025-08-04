export async function POST(request: Request) {
  const res = await request.json()
  const sessionToken = res?.sessionToken
  const expiresDate = new Date(res?.expiresAt).toUTCString()
  if (!sessionToken || !expiresDate) {
    return Response.json({ error: 'No session token' }, {
      status: 401,
    })
  }
  const cookieOptions = [
    `sessionToken=${sessionToken}`,
    'Path=/',
    `expires=${expiresDate}`,
    process.env.NODE_ENV === 'production' ? 'Secure' : '',
    'SameSite=Lax',
  ].filter(Boolean).join('; ')

  return Response.json({ res }, {
    status: 200,
    headers: {
      'Set-Cookie': cookieOptions,
    },
  })
}
/** 
 * Recebe um JSON do tipo {
 *    email: string,
 *    password: string
 * }
 * */ 

export async function POST(req) {
  const json = await req.json()
  console.log('auth POST', json)

  const data = {
    id: 1,
    name: 'Usuário',
    email: json.email,
    datetime: new Date().toISOString()
  }

  console.log('req.cookies', req.cookies)

  return Response.json(data)
}

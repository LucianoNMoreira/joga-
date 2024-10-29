export const ESPORTES = [
  {
    id: 1, name: 'Futebol', slug: 'futebol'
  },
  {
    id: 2, name: 'Vôlei', slug: 'volei',
  }
]

export async function GET() {
  return Response.json(ESPORTES)
}

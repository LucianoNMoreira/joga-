import { ESPORTES } from "../route"

export async function GET(request, { params }) {
    const { id } = await params
    const esporte = ESPORTES.find((e) => e.id == id)
    
    if (!esporte) {
        return Response.error()
    }

    return Response.json(esporte)
}
  
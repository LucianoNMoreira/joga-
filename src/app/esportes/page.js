import Link from "next/link"

const ESPORTES = [
  {
    name: 'Futebol', slug: 'futebol'
  },
  {
    name: 'Vôlei', slug: 'volei',
  }
]

export default function Dashboard() {
  return (
    <>
      <h1>Esportes</h1>

      <hr />

      <ul>
        {
          ESPORTES.map((esporte, index) => {
            return (
              <li key={index}>
                <Link href={`/esportes/${esporte.slug}`}>{esporte.name}</Link>
              </li>
            )
          })
        }

      </ul>
    </>
  )
}

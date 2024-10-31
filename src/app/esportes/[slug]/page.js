export async function generateMetadata({ params, searchParams }, parent) {
  const { slug } = await params
  
  // Resgatar o conteúdo

  return {
    title: slug,
    description: `Página sobre ${slug}`
  }
}

export default async function Page({ params }) {
  const { slug } = await params

  return (
    <>
      Esporte: { slug }
    </>
  )
}

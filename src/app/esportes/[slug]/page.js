export default function Page({ params }) {
  const slug = params.slug

  return (
    <>
      Esporte: { slug }
    </>
  )
}

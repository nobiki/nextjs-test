export default function Page({ params }: { params: { category: string, slug: string } }) {
  return <h1>Blog: {params.category} / {params.slug}</h1>
}

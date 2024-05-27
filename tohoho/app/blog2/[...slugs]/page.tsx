export default function Page({ params }: { params: { slugs: string[] } }) {
  return <h1>Blog: {params.slugs.join(', ')}</h1>
}

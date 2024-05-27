export default function Page({ params }: { params: { slugs: string[] } }) {
  if (params.slugs) {
    return <h1>Blog: {params.slugs.join(', ')}</h1>
  } else {
    return <h1>Blog: (None)</h1>
  }
}

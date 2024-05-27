export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <h1>(group1)</h1>
      <div>{children}</div>
    </>
  )
}

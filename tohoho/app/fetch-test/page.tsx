export default async function Page() {
  const response = await fetch('https://www.tohoho-web.com/cgi/client-ip-address.cgi')
  const body = await response.text()
  return (
    <>
      <h1>Fetch Test</h1>
      <div>{body}</div>
    </>
  )
}

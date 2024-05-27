import { Roboto } from 'next/font/google'
const Roboto900 = Roboto({ weight:'900', preload:false })

export default function Page() {
  return (
    <>
      <h1>Google Roboto Font Test</h1>
      <h1 className={Roboto900.className}>Google Roboto Font Test</h1>
    </>
  )
}

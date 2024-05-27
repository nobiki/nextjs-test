import Link from 'next/link'

/* <a> で張った場合は遷移時に画面の再読込が行われるのに対して、<Link> で張った場合は再読み込み無しに描画される */
export default function Page() {
  return (
    <>
      <h1>Link Test</h1>
      <ul>
      <li><a href="page-test">Page Test</a></li>
      <li><Link href="page-test">Page Test</Link></li>
      </ul>
    </>
  )
}

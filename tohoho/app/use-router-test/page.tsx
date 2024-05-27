'use client'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()
  return (
    <div>
      <h1>useRouter Test</h1>
      <button onClick={() => router.push('/')}>Top</button>
    </div>
  )
}

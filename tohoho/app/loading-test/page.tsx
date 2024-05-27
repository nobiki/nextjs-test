import { Suspense } from 'react'
import Loading from './loading'
import WaitComponent from './wait'

/* 時間のかかるコンポーネントを Suspense で囲み、fallback に Loading を指定 */
export default function Page() {
  return (
    <div>
      <h1>Loading Test</h1>
      <Suspense fallback={<Loading />}>
        <WaitComponent />
      </Suspense>
    </div>
  )
}

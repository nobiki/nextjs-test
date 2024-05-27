export default function Page() {
  async function serverside_action_test(form) {
    'use server' /* 'use server' を指定したサーバサイドアクションを、クライアント側のフォームから呼び出す */
    const message = form.get('message')
    console.log({message})
  }
  return (
    <>
      <h1>Server Action Test</h1>
      <form action={serverside_action_test}>
        <input type="text" name="message" defaultValue="何か入力" /> {/* デフォルト値を入力する場合はvalue=""ではなくdefaultValueを使用する */}
        <button type="submit">OK</button> {/* クライアントのフォームに入力したメッセージがサーバに送られ、サーバのコンソールに出力される */}
      </form>
    </>
  )
}

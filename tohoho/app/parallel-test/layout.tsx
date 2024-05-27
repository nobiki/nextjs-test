export default function Layout(props) {
  return (
    <div>
      <div>{props.children}</div>
      <div>{props.node1}</div>
      <div>{props.node2}</div>
    </div>
  )
}

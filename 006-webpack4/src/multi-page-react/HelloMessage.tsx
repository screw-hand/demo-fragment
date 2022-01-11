interface Iprops {
  name: string
}

const HelloMessage = (props: Iprops) => {
  return (
    <div>
      Hello {props.name}
    </div>
  )
}
export default HelloMessage
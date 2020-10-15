import { useState } from "react"

type CountViewerProps = {
  label: string
  count: number
}

const CountViewer = (props: CountViewerProps) => {
  console.log(`rendered viewer: ${props.label}`)

  return (
    <div>
      <label>{props.label}</label>
      {props.count}
    </div>
  )
}

type CountUpButtonProps = {
  label: string
  onClick: () => void
}

const CountUpButton = (props: CountUpButtonProps) => {
  console.log(`rendered button: ${props.label}`)

  return (
    <div>
      <button onClick={props.onClick}>{props.label}</button>
    </div>
  )
}

const UseState2c = () => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const countUp1 = () => setCount1(count1 + 1)
  const countUp2 = () => setCount2(count2 + 1)

  return (
    <div>
      <CountViewer label="Count(1)" count={count1} />
      <CountViewer label="Count(2)" count={count2} />
      <CountUpButton onClick={countUp1} label="Count Up(1)" />
      <CountUpButton onClick={countUp2} label="Count Up(2)" />
    </div>
  )
}

export default UseState2c

import { memo, useCallback, useState } from "react"

type CountViewerProps = {
  label: string
  count: number
}

const CountViewer = memo((props: CountViewerProps) => {
  console.log(`rendered: ${props.label}`)

  return (
    <div>
      <label>{props.label}</label>
      {props.count}
    </div>
  )
})

type CountUpButtonProps = {
  label: string
  onClick: () => void
}

const CountUpButton = memo((props: CountUpButtonProps) => {
  console.log(`rendered button: ${props.label}`)

  return (
    <div>
      <button onClick={props.onClick}>{props.label}</button>
    </div>
  )
})

const UseState2cm = () => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const countUp1 = useCallback(() => setCount1(count1 + 1), [count1])
  const countUp2 = useCallback(() => setCount2(count2 + 1), [count2])

  return (
    <div>
      <CountViewer label="Count(1)" count={count1} />
      <CountViewer label="Count(2)" count={count2} />
      <CountUpButton onClick={countUp1} label="Count Up(1)" />
      <CountUpButton onClick={countUp2} label="Count Up(2)" />
    </div>
  )
}

export default memo(UseState2cm)

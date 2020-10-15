import { useState } from "react"

const UseState2 = () => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  return (
    <div>
      <div>
        <label>Count(1)</label>
        {count1}
      </div>
      <div>
        <label>Count(2)</label>
        {count2}
      </div>
      <div>
        <button onClick={() => setCount1(count1 + 1)}>Count Up(1)</button>
      </div>
      <div>
        <button onClick={() => setCount2(count2 + 1)}>Count Up(2)</button>
      </div>
    </div>
  )
}

export default UseState2

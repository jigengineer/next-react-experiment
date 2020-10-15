import { useState } from "react"

const UseState1 = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>Count Up</button>
      </div>
    </div>
  )
}

export default UseState1

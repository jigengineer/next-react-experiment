import { memo, useEffect, useState } from "react"

const UseEffect1 = () => {
  const [count, setCount] = useState(0)
  const [lastUpdated, setLastUpdated] = useState<Date>()

  useEffect(() => {
    setLastUpdated(new Date())
  }, [count])

  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>Count Up</button>
      </div>
      <div>Last Updated: {lastUpdated?.getTime()}</div>
    </div>
  )
}

export default memo(UseEffect1)

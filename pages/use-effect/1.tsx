import { memo, useEffect, useState } from "react"

const ElapsedTime = memo(() => {
  const [elapsedTime, setElapsedTime] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("time updated")
      setElapsedTime((previousTime) => previousTime + 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return <div>{elapsedTime} sec.</div>
})

const UseEffect1 = () => {
  const [isShow, setIsShow] = useState(false)

  return (
    <div>
      {isShow ? <ElapsedTime /> : "---"}
      <div>
        <button onClick={() => setIsShow(!isShow)}>Show / Hide</button>
      </div>
    </div>
  )
}

export default memo(UseEffect1)

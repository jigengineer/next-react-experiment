import { memo, useEffect, useRef, useState } from "react"

const Animation = memo(() => {
  const animationRef = useRef<number>()
  const [delta, setDelta] = useState<number>()
  const [count, setCount] = useState<number>()

  const animate = (dt: number) => {
    setDelta(dt)
    setCount((c) => (c || 0) + 1)
    animationRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate)

    return () => {
      animationRef.current && cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <div>
      count: {count} / dt: {delta}
    </div>
  )
})

const UseRef2 = () => {
  const [isShow, setIsShow] = useState(false)

  return (
    <div>
      {isShow ? <Animation /> : "---"}
      <div>
        <button onClick={() => setIsShow(!isShow)}>Show / Hide</button>
      </div>
    </div>
  )
}

export default memo(UseRef2)

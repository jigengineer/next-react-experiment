import { memo, useRef, useState } from "react"

const UseRef1 = () => {
  const contentRef = useRef<HTMLDivElement>(null)
  const [rect, setRect] = useState<DOMRect>()

  const getContentInfo = () => {
    setRect(contentRef.current?.getBoundingClientRect())
  }

  return (
    <div>
      <div ref={contentRef}>Content</div>
      <div>
        <button onClick={getContentInfo}>Get Content Info</button>
      </div>
      <div>
        top: {rect?.top || "---"} / left: {rect?.left || "---"} / width: {rect?.width || "---"} / height:
        {rect?.height || "---"}
      </div>
    </div>
  )
}

export default memo(UseRef1)

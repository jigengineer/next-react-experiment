import { memo, useState } from "react"

const getSource = () => [0, 1, 2, 3, 4, 5]

const twice = (n: number) => n * 2

const ArrayMap = () => {
  const [numbers, setNumbers] = useState<number[]>(getSource())
  const remove = (n: number) => {
    numbers.splice(
      numbers.findIndex((num) => num === n),
      1
    )
    const nextNumbers = numbers.concat([])
    setNumbers(nextNumbers)
  }

  return (
    <div>
      <div>
        <label>ex. 1 (bad)</label>
        {numbers.map((n, index) => (
          <div key={index}>
            index: {index} / n: {n} <button onClick={() => remove(n)}>×</button>
          </div>
        ))}
      </div>
      <hr />
      <div>
        <label>ex. 2 (not bad)</label>
        {numbers.map((n) => (
          <div key={n}>{n * 2}</div>
        ))}
      </div>
      <hr />
      <div>
        <label>ex. 3 (good)</label>
        {numbers.map(twice).map((n) => (
          <div key={n}>{n}</div>
        ))}
      </div>
      <div>
        <button onClick={() => setNumbers(getSource())}>Reset</button>
      </div>
    </div>
  )
}

export default memo(ArrayMap)

import Link from "next/link"

type ItemProps = {
  href: string
  label: string
}

const Item = (props: ItemProps) => {
  return (
    <li>
      <Link href={props.href}>
        <a>{props.label}</a>
      </Link>
    </li>
  )
}

const Index = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <Item href="/use-state/1" label="useState(1)" />
        <Item href="/use-state/2" label="useState(2)" />
        <Item href="/use-state/2c" label="useState(2) Component" />
        <Item href="/use-state/2cm" label="useState(2) Component memo" />
        <Item href="/use-memo/1" label="useMemo(1)" />
        <Item href="/use-memo/1o" label="useMemo(1) Optimized" />
        <Item href="/use-effect/1" label="useEffect(1)" />
        <Item href="/use-effect/2" label="useEffect(2)" />
        <Item href="/use-ref/1" label="useRef(1)" />
        <Item href="/use-ref/2" label="useRef(2)" />
      </ul>
    </div>
  )
}

export default Index

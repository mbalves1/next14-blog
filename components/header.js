import Link from "next/link";
import Counter from "./counter";

export default function Header() {
  return (
    <>
      <header className="">
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/about/projects">Projects</Link>
          </li>
        </ul>

        <div>
          <Counter></Counter>
        </div>
      </header>
    </>
  )
}
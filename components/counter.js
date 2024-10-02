'use client'

import { useState } from "react";

export default function Counter() {
  const [ count, setCount ] = useState(0);
  setTimeout(() => {
    setCount(count + 1);
  }, 1000)

  return (
    <>
      <h1>Counter</h1>
      <div>
        The count is { count }
      </div>
    </>
  )
}
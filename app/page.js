'use client'

import Card from "@/components/Card"
import { useRef, useState } from "react"

function CardBorder({children}) {
  return (
    <div className="border rounded-md border-gray-100 p-4 my-1">
      {children}
    </div>
  )
}

export default function Home() {

  const [isVisible, setIsVisible] = useState(true)
  const [myName, setName] = useState("")
  const inputRef = useRef()

  const handleClick = () => {    
    return setIsVisible(!isVisible);
  }

  const handleName = () => {
    setName(inputRef.current.value);
  }
  
  return (
    <>
      <div className="p-20">
        <div>
        Hello World!
        </div>

        {
          !isVisible ?
          <div>
            <Card title="This is being passed from the parent!" />
            <Card title={"This is JS"} />
            <Card />
          </div> :
          <div></div>
        }
                
        {
          isVisible ?
          <CardBorder>
            This is JS Visible
          </CardBorder> :
          <div></div>
        }

        <div>{ isVisible }</div>

        <div className="border-red-300 p-3 text-white">{ myName }</div>

        <div>
          <input 
            ref={inputRef}
            className="border p-2 rounded-md text-black" 
            placeholder="Type your name"
          />
        </div>

        <button className="border p-2 rounded-md my-2 mr-2" onClick={handleName}>Set Name</button>

        <button className="border p-2 rounded-md my-2" onClick={handleClick}>
          { isVisible ? 'Visible' : 'Not Visible' }
        </button>

      </div>
    </>
  );
}

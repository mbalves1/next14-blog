'use client'

import { StrictMode, useState } from "react"

function Card({title = "Nothing to say!"}) {
  return (
    <div className="border rounded-md border-gray-600 p-4 my-1">
      {title}
    </div>
  )
}


function CardBorder({children}) {
  return (
    <div className="border rounded-md border-gray-100 p-4 my-1">
      {children}
    </div>
  )
}

export default function Home() {

  const [isVisible, setIsVisible] = useState(true)
  const handleClick = () => {    
    return setIsVisible(!isVisible);
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

        <button className="border p-2 rounded-md m-2" onClick={handleClick}>
          { isVisible ? 'Visible' : 'Not Visible' }
        </button>
      </div>
    </>
  );
}

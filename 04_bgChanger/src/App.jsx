import { useState } from "react"

function App() {
  
  const [color, setColor] = useState("olive");

  const handleClick = (e) => { // event delegation 
    const target = e.target;
      if (target.matches('button')) {
        setColor(target.style.backgroundColor);
      }
  }

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed flex left-4 inset-y-0 items-center justify-center">
          <div className="bg-white flex flex-col gap-3 px-3 py-2 shadow-lg rounded-3xl" onClick={handleClick}>
            <button className="px-4 shadow-lg outline-none py-1 rounded-xl text-white" style={{backgroundColor: 'red'}}>Red</button>
            <button className="px-4 shadow-lg outline-none py-1 rounded-xl text-white" style={{backgroundColor: 'green'}}>Green</button>
            <button className="px-4 shadow-lg outline-none py-1 rounded-xl text-white" style={{backgroundColor: 'blue'}}>Blue</button>
            <button className="px-4 shadow-lg outline-none py-1 rounded-xl text-gray-700" style={{backgroundColor: 'yellow'}}>Yellow</button>
            <button className="px-4 shadow-lg outline-none py-1 rounded-xl text-white" style={{backgroundColor: 'olive'}}>Olive</button>
            <button className="px-4 shadow-lg outline-none py-1 rounded-xl text-white" style={{backgroundColor: 'violet'}}>Violet</button>
            <button className="px-4 shadow-lg outline-none py-1 rounded-xl text-white" style={{backgroundColor: 'black'}}>Black</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

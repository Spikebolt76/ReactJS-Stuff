import { useState } from "react"

function App() {

  const [color, setColor] = useState("olive")
  return (
    <>
     {color}
    </>
  )
}

export default App

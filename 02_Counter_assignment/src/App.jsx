import "./App.css";
import { useState } from "react";

function App() {

  const [count, setCounter] = useState(0);
  
  const increaseCounter = () => {
    setCounter(prev => {
      if (prev < 20) {
        const next = prev + 1;
        console.log("Value of count :", next);
        return next;
      }
      console.log("Can't be inceased above 20!");
      return prev; 
    });
  }
  const decreaseCounter = () => {
    setCounter(prev => {
      if (prev > 0) {
        const next = prev - 1;
        console.log("Value of count :", next);
        return next;
      }
      console.log("Can't be decreased below 0!");
      return prev; 
    });
  }


  return (
    <>
      <div className="container">
        <h1>Counter - useState Hook Demo</h1>
        <br />
        <br />
        <h2>Counter Value = {count}</h2>
        <button onClick={increaseCounter}>Increase</button>
        <br />
        <br />
        <button onClick={decreaseCounter}>Decrease</button>
      </div>
      <br />
      <div className="demo-container">
        <div className="counter-box">{count}</div>
      </div>
      <br />
      <div className="counter-box">{count}</div>
    </>
  );
}

export default App;

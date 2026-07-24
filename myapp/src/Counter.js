 import {useState,useEffect} from "react"
//import { useState } from "react";
function Counter() {
 const [count,setCount]=useState(0)

 useEffect(()=>{console.log(count)
  return ()=>{
    console.log("Unmounting")
  }
 },[count])


 const [bg,setBg]=useState("white")
  function increment(){
  setCount(count+1)
  setBg("Red")
  }

  function decrement(){
  setCount(count-1)
  setBg("Blue")
  }

  function reset(){
    setCount(0)
    setBg("Green")
  }

  return (
    <div style={{ backgroundColor: bg, height: "100vh", padding: "20px" }}>
      <h1>Count: {count}</h1>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      {count>10 && <p>Count is greater than 10</p>}
    </div>
  );







//   const [text, setText] = useState("");

//   return (
//     <div>
//       <h2>Character Counter</h2>

//       <input
//         type="text"
//         placeholder="Enter text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />

//       <p>Character Count: {text.length}</p>

//       {text.length < 3 && (
//         <p style={{ color: "red" }}>
//           Enter more characters
//         </p>
//       )}
//     </div>
//   );
 }
 

export default Counter;
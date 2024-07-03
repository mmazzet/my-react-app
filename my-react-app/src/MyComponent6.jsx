import React, { useState, useEffect } from "react";

function MyComponent6(){

  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green")

  function addCount(){
    setCount(c => c + 1);
  }

  // useEffect(() =>{                       // Runs every re-render
  //   document.title = `Count: ${count}`
  // });

  // useEffect(() =>{                          // Runs only on mount
  //   document.title = `My Counter Program`
  // }, []);

    useEffect(() =>{                       // Runs every re-render
    document.title = `Count: ${count} ${color}`
  }, [count, color]);

  function subtractCount(){
    setCount(c => c - 1);
  }

  function changeColor(){
    setColor(c => c === "green" ? "red" : "green");
  }

  return(<>
    <p style={{color: color}}>Count: {count}</p>
    <button onClick={addCount}>Add</button>
    <button onClick={subtractCount}>Subtract</button><br/>
    <button onClick={changeColor}>Change Color</button>
  </>);
}

export default MyComponent6;
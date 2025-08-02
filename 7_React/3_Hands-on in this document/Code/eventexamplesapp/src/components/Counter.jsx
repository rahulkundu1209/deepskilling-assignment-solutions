import React from 'react'
import { useState } from 'react';

const Counter = () => {
  const [val, setVal] = useState(0);
  const increaseVal = () =>{
    setVal((val)=>{
      return val+1;
    });
    alert("Hello Dear!")
  }
  const decreaseVal = () =>{
    setVal((val)=>{
      return val-1;
    });
  }

  const welcomeFunction = (e, message) => {
    e.preventDefault();
    alert(message);
  }

  const OnPress = (e) =>{
    e.preventDefault();
    alert("I was clicked");
  }

  return (
    <div>
      <div>
        <h3>{val}</h3>
        <button 
          style={{marginRight: "10px"}}
          onClick={increaseVal}>Increment</button>
        <button onClick={decreaseVal}>Decrement</button>
      </div>
      <div>
        <button onClick={(e) => welcomeFunction(e, "Welcome")}>Say Welcome</button>
      </div>
      <div>
        <button onClick={OnPress}>Click on me</button>
      </div>
    </div>
  )
}

export default Counter
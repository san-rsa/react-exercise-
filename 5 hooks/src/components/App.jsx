import { useState } from "react";
import React from "react";

//Challenge:
//1. Given that you can get the current time using:



//2. Given that you can get code to be called every second
//using the setInterval method.
//Can you get the time in your <h1> to update every second?

//e.g. uncomment the code below to see Hey printed every second.
// function sayHi() {
//   console.log("Hey");
// }
// setInterval(sayHi, 1000);

function App() {

  var time = new Date().toLocaleTimeString();
  console.log(time);
  //Show the latest time in the <h1> when the Get Time button
  //is pressed.
  const [show, now] = useState(time);
  
const up = setInterval(int, 1000)

  function int() {
    var newt = new Date().toLocaleTimeString();
    now(newt)
  }

  return (
    
    <div className="container">
      <h1>{show}</h1>
      <button onClick={int}>update</button>
      <p> {show}</p>
    </div>
  );
}

export default App;

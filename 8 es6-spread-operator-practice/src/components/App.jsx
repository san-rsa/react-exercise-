import React, { useState } from "react";


function App() {
  

  const [input, saveInput] = useState("");

  const [list, saveList] = useState([]);



  
 function text(event) {
  const st = event.target.value
  saveInput(st)
 }

 function save() {
  // const st = event.target.value;
  saveList(p =>{
     return [...p, input];
  }, saveInput("")
  ); saveInput("")
   
}



  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={text} value={input} type="text" />
        <button onClick={save}>
          <span >Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map(item => <li>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;

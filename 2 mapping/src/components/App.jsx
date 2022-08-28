import React from "react";
import Card from "./card";
import emojipedia from "../emojipedia";


function lists(list) {
  return <Card 
  key={list.id}
  emoji={list.emoji}
  title={list.name}
  detail={list.meaning}
  />
}


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
       
      {emojipedia.map(lists)};
      </dl>
    </div>
  );
}

export default App;

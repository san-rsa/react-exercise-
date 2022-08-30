import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {


  const [notes , setNotes] = useState([]);


  function add(note) {
        setNotes(p => { return [...p, note]})
  }


  function setDell(id) {
    setNotes(p => {
      return p.filter((item, index) => {
        return index !== id; 
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea 
      add={add} />
      {notes.map((single, index) => { 
        return <Note key={index} id={index} title={single.title} content={single.content} delete={setDell} />})}
      <Footer />
    </div>
  );
}

export default App;

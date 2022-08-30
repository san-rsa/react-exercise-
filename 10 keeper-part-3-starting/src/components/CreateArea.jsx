import React, { useState } from "react";

function CreateArea(props) {


  const [note, setNote] = useState({
    title: "",
    content: ""
  });

 function fNote(event) {
  const {value, name} = event.target;
  setNote(pre => {
  
     return {
      ...note,
      [name]: value
     }
  })
 }

function addNote(event) {
  
    props.add(note)

  setNote({
    title: "",
    content: ""
  })
  event.preventDefault()
}



  return (
    <div>
      <form>
        <input name="title"  onChange={fNote} value={note.title} placeholder="Title" />
        <textarea name="content" onChange={fNote}  value={note.content} placeholder="Take a note..." rows="3" />
        <button onClick={addNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

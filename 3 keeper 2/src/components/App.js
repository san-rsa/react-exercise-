import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes"

var item = (a) => <Note title={a.title} content={a.content}  />



function App() {
  return (
    <div>
      <Header />
      {notes.map(item)}
      <Footer />
    </div>
  );
}

export default App;

import "../styles.css";
import { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";

import CreateNote from "./InputNote";

export default function App() {
  let [notes, setNote] = useState([]);
  function addNote(inputText) {
    setNote((preValue) => {
      return [...preValue, inputText];
    });
  }
  function deleteNote(id) {
    setNote((preValue) => {
      return preValue.filter((element, index) => {
        return index !== id;
      });
    });
    
  }
  return ( 
    <div className="App">
      <Header />
      <CreateNote handleClick={addNote} />

      {notes.map((element, index) => (
        <Note
          key={index}
          id={index}
          title={element.title}
          content={element.content}
          handleClick={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

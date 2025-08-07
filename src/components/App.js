import "../styles.css";
import { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
// import notes from "../notes";
import CreateNote from "./InputNote";
// ************************part-1*******************************
//1. Create a new React app.
//2. Create a App.jsx component.
//3. Create a Header.jsx component that renders a <header> element
//   to show the Keeper App name in an <h1>.
//4. Create a Footer.jsx component that renders a <footer> element
//   to show a copyright message in a <p> with a dynamically updated year.
//5. Create a Note.jsx component to show a <div> element with a
//   <h1> for a title and a <p> for the content.
//6. Make sure that the final website is styled like the example shown here:
//   https://w00gz.csb.app/

//HINT: You will need to study the classes in the styles.css file to apply styling.

// ************************part-2*******************************
// !. Render all notes inside note.js as seperate Note components

// ************************part-3*******************************
// !. create addNote functionality
// 2. create deleteNote functionality

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

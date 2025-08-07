import "../styles.css";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import * as React from "react";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

export default function CreateNote(props) {
  let [inputText, setInputText] = useState({
    title: "",
    content: "",
  });
  function handleOnChange(event) {
    let { value, name } = event.target;
    setInputText((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }
  let [focus,setFocus] = useState(false )
  function handleOnFocus (){
    setFocus(true)
  }
  
  return (
    <form className="inputNote">
    
  {  focus && <input
        type="text"
        value={inputText.title}
        name="title"
        placeholder="Title"
        onChange={handleOnChange}
        
        />
      }
   <textarea
        type="text"
        value={inputText.content}
        name="content"
        placeholder="Take a note..."
        rows={focus ? 3 : 1}
        onChange={handleOnChange}
        onFocus= {handleOnFocus}
      />

     <Zoom in={focus}>
        <Fab
          onClick={(event) => {
            props.handleClick(inputText);
            setInputText({
              title: "",
              content: "",
            });
             event.preventDefault;
             setFocus(false);

          }}
        >
          <AddIcon />
        </Fab>
      </Zoom>

    </form>
  );
}

// Create a Note.jsx component to show a <div> element with a
//   <h1> for a title and a <p> for the content.

import "../styles.css";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={() => {
          props.handleClick(props.id);
        }}
      >
        <DeleteIcon />
      </button>
    </div>
  );
}

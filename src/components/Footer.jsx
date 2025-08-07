// Create a Footer.jsx component that renders a <footer> element
//   to show a copyright message in a <p> with a dynamically updated year.

import "../styles.css";

let date = new Date();
let year = date.getFullYear();
export default function Footer(){
  return <footer>
   <p>Copyright {year}</p>
  </footer>
}
import "../styles.css";

let date = new Date();
let year = date.getFullYear();
export default function Footer(){
  return <footer>
   <p>Copyright {year}</p>
  </footer>
}
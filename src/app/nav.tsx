import Image from "next/image";
import styles from "./page.module.css";


export default function NavBar() {
  return (
  <nav className={styles.nav}>
      <ul>
        <li><a href="#">&#10084; Favorites</a></li>
        <li><a href="#">&#9993; Contact Us</a></li>
    </ul>
  </nav>
)}


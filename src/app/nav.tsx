import styles from "./page.module.css";
import Link from 'next/link';

export default function NavBar() {
  return (
  <nav className={styles.nav}>
      <ul>
        <li><a href="/contact">&#9993; Contact Us</a></li>
    </ul>
    <div className={styles.shoppingCart}>
          <Link href="/shop">
              <img src="cart.png" alt="Carrito de compras" />
          </Link>
    </div>
  </nav>
)}


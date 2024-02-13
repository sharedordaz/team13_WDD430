// page.tsx
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";
import styles from "../page.module.css";
import Footer from "../footer";

export default function ShoppingCart() {
  const cookieStore = cookies()
  const cookieCart: RequestCookie | undefined = cookieStore.get("cart")
  const cartItems: any[] = []

  if (cookieCart) {
    const products = JSON.parse(cookieCart.value)
    products.forEach((item: any) => {
      cartItems.push(cartItem(item))
    })

    return <div className={styles.shopCart}>{cartItems}</div>
  } else {
    return (
      <div>
        <h1  className={styles.center}>You have selected nothing!</h1>
        <Footer />
      </div>
    )
  }
}

function cartItem(item: any) {
  return (
    <div className={styles.shop}>
      <h3>{item.Name}</h3>
      <p>Price: ${item.Price}</p>
    </div>
  )
}

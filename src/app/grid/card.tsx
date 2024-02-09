import styles from "@/app/page.module.css";
import Link from "next/link";
import Image from "next/image";
import { ArtItem } from "./types";

export default function createCard(item: ArtItem, artist: string) {
  return (
    <div className={styles.card}>
      <h4>{item.name}</h4>
      <Image
        src="/placeholder-image.jpg"
        width={500}
        height={500}
        alt={item.description}
      />
      <p>{item.description}</p>
      <a href="#">{artist}</a>
      <p>Price: ${item.price} </p>
      <Link href="/favorites">&#10084;</Link>
        <Image
          src="/cart.png"
          width={20}
          height={20}
          alt="Carrito de compras"
        />
    </div>
  );
}

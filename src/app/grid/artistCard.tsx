// artistCard.tsx
import styles from "../page.module.css";
import Image from "next/image";
import { Artist } from "./types";

export default function artistCard(item: Artist, currentStyle = "none") {
  const imageUrl = `/images/${item.picture}`;
  const id = `${item.id}`;
  return (
    <div
      id={id}
      className={styles.artistCard}
      style={{ display: currentStyle }}
    >
      <span>X</span>
      <h1>{item.name}</h1>
      <div>
        <Image src={imageUrl} width={500} height={500} alt={item.name} />
      </div>
      <p>{item.personalStories}</p>
    </div>
  );
}

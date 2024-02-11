import styles from "@/app/page.module.css";
import Image from "next/image";
import { Artist } from "./types";


export default function artistCard(item: Artist, currentStyle = 'none') {
  const imageUrl = `/images/${item.picture}`;
  const id = `${item.id}`;
  return (
    <div id={id}  className={styles.artistCard} style={{display: currentStyle}}> 
      <h4>{item.name}</h4>
      <h1>X</h1>
      <div>
        <Image
         src={imageUrl}
         width={500}
         height={500}
         alt={item.name}
         />
         <p>{item.personalStories}</p>
      </div>
      
    </div>
  );
}

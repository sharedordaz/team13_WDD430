import styles from "@/app/page.module.css";
import Image from 'next/image';
import { Artist, ArtItem } from './types';
//TODO: Add an artist argument to createCard()
export default function createCard(item: ArtItem, artist: string){
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
        <a href= "#">{artist}</a>
        <p>Price: ${item.price} </p>
    </div>


    )
}

export function artistCard(item: Artist){

    }

import React from 'react';
import styles from "@/app/page.module.css";
import Image from "next/image";

export default function createFavorites(item: any) {
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
      <a href="#">{item.artist}</a>
      <p>Price: ${item.price} </p>
    </div>
  );
}
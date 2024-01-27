import Image from "next/image";
import styles from "./page.module.css";
import Banner from '@/app/banner'; 

/*
TODO:
-Shopping Cart (Douglas Fabricio)
-Main Grid (Shared Ordaz)
-Header (Camila Apai)
-Footer (Douglas Fabricio)

Ideas:
https://www.coolmaison.com/
https://www.globant.com/about

*/

export default function Home() {
  return (
    <>
            <div className={styles.main}>
                <Banner />
            </div>
    </>
  );
}

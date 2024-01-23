import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "@/app/nav";
import Banner from '@/app/banner'
import Logo from '@/app/logo'

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
    <main className={styles.main}>
            <Logo />
            <NavBar />
            <h1>Handcraft Haven</h1>
            <Banner />
    </main>
  );
}

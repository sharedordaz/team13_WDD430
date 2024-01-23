import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "@/app/nav";
import Banner from '@/app/banner'
import Logo from '@/app/logo'

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

import Image from "next/image";
import styles from "./page.module.css";
import Banner from '@/app/banner';
import MainGrid from '@/app/grid/main-grid'
import Footer from "./footer"; 
import Head from 'next/head';

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
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Handcraft Haven',
  description: 'Project for WDD430 on build on node and nextJS',
};

export default function Home() {
    
  return (
    <>
      <link rel="icon" href="path/to/favicon.ico" />

            <div className= {styles.top_void}></div>
            <div className={styles.banner}>
                <Banner />
            </div>
            <main className={styles.main}>
                <MainGrid />
            </main>
            <Footer />

    </>
  );
}

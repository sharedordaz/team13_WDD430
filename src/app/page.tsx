import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/app/banner";
import MainGrid from "@/app/grid/main-grid";
import Footer from "./footer";
import Head from "next/head";
import GridControl from "@/app/grid/grid-control";

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
import { Metadata } from "next";
import Tester from "./test";

export const metadata: Metadata = {
  title: "Handcraft Haven",
  description: "Project for WDD430 on build on node and nextJS",
};

export default function Home() {
  return (
    <>
      <link rel="icon" href="/favicon.ico" />

      <div className={styles.top_void}></div>
      <div className={styles.banner}>
        <Banner />
      </div>
      <GridControl />
      {/*<Tester/>*/}
      <main className={styles.main}>
        <MainGrid />
      </main>
      <Footer />
      <script type="text/javascript" src= "static/script.js"> </script>
    </>
  );
}

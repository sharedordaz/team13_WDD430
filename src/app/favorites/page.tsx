
import Footer from "@/app/footer"; 
import styles from "@/app/page.module.css";
import Favorites from "./favoritesButton";

export default function Home() {
    return (
      <>
              <div className= {styles.top_void}></div>
              <main >
              <Favorites/>
              </main>
              <Footer />
      </>
    );
  }
  
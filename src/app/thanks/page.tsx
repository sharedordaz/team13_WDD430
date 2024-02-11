import Footer from "@/app/footer"; 
import styles from "@/app/page.module.css";
import BuyMore from "./thanks";


export default function Home() {
    return (
      <>
              
              <div className= {styles.top_void}></div>
              <main>
              <BuyMore/>
              </main>
              <Footer />
  
      </>
    );
  }
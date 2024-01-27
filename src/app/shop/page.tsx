
import Footer from "@/app/footer"; 
import styles from "@/app/page.module.css";
import PaymentForm from "./ShoppingCartForm";
export default function Home() {
    return (
      <>
              
              <div className= {styles.top_void}></div>
              <main >
              <PaymentForm/>
              </main>
              <Footer />
  
      </>
    );
  }
  
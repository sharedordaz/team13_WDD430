
import Footer from "@/app/footer"; 
import styles from "@/app/page.module.css";
import ContactForm from "./contacform";
export default function Home() {
    return (
      <>
              
              <div className= {styles.top_void}></div>
              <main >
                <ContactForm/>
              </main>
              <Footer />
  
      </>
    );
  }
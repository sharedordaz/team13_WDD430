
import Footer from "../footer"; 
import styles from "../page.module.css";
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

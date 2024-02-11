import React from 'react';
import styles from "@/app/page.module.css";
import Link from 'next/link'


export default function BuyMore() {
    return (
    <div>
        <div className={styles.contactIconsContainer}>
        <a href="https://mail.google.com/mail/u/0/?ogbl#inbox?compose=CllgCJZcRDzZkmCzCtpDqhBNlglXcPWgwhxQNLWqZNdMbjvDBWRbxDQFXprVKCgqnWmhJSfdRvq"><img src="/email.png" alt="Email" /></a>
        <a href="https://wa.me/123456789"><img src="/whatsapp.png" alt="WhatsApp" /></a>
        <a href="https://twitter.com/"><img src="twitter.jpg" alt="X" /></a>
        <a href="https://www.instagram.com/"><img src="/instagram.png" alt="Instagram" /></a>
        <a href="https://www.google.com/maps/place/Plaza+Bella/@17.0815171,-96.7544419,14z/data=!4m6!3m5!1s0x85c719275c7a2a6f:0x152fb996d4f2579e!8m2!3d17.0755813!4d-96.7579736!16s%2Fg%2F11b_2p4h27?entry=ttu"><img src="/google-maps.png" alt="Google Maps" /></a>
        <a href="https://www.facebook.com/"><img src="/facebook.png" alt="Facebook" /></a>
      </div>
      
        <div className={styles.message}>
          <h1>Thank you for sending your message!</h1>
          <h2>⚠️To continue shopping click on the image</h2>
          {/* Utiliza el componente Image de Next.js si es necesario */}
          <Link href="/">
        
        <img src="/seguir.png" alt="Carrito de compras" />
    </Link>        </div>
    
    
    </div>
    );
  }
  
"use client"
import styles from "./page.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
      <div className={styles.companyLogo}>
          {/* Logotipo de la empresa */}
          <img src="/logo.png" alt="Logo de la empresa" />
        </div>
        <p>&#169; 2024 Handcrafted Haven. All rights reserved.</p>
        <div className={styles.socialMedia}>
          {/* Logos de redes sociales */}
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="facebook.png" alt="Facebook" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="twitter.jpg" alt="Twitter" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="instagram.png" alt="Instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
}
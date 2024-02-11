import React from 'react';
import styles from "@/app/page.module.css";

export default function ContactForm() {
  return (
    <form className={styles.formContainer}>
      <div>
        <h1 className={styles.formTitle}>Contact Details</h1>
        
        {/* Name */}
        <div className={styles.formGroup}>
          <label
            className={styles.formLabel}
            htmlFor="contactName"
          >
            Name
          </label>
          <input
            className={styles.formInput} 
            id="contactName"
            type="text"
            name="contactName"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email */}
        <div className={styles.formGroup}>
          <label
            className={styles.formLabel} 
            htmlFor="contactEmail"
          >
            Email
          </label>
          <input
            className={styles.formInput}
            id="contactEmail"
            type="email"
            name="contactEmail"
            placeholder="Enter your email address"
            required
          />
        </div>

        {/* Message */}
        <div className={styles.formGroup}>
          <label
            className={styles.formLabel}
            htmlFor="contactMessage"
          >
            Message
          </label>
          <textarea
            className={styles.formInput}
            id="contactMessage"
            name="contactMessage"
            placeholder="Enter your message"
            required
          />
        </div>
      </div>
      <div className={styles.Button}>
  <a href="/home" className={styles.submitButtonLink}>
    <button
      type="submit"
      className={styles.submitButton} 
    >
      Submit
    </button>
  </a>
</div>

      {/* Contact Information */}
      <div className={styles.formGroup1}>
        <h2>Contact Information</h2>
        <div className={styles.contactIconsContainer}>
        <a href="https://mail.google.com/mail/u/0/?ogbl#inbox?compose=CllgCJZcRDzZkmCzCtpDqhBNlglXcPWgwhxQNLWqZNdMbjvDBWRbxDQFXprVKCgqnWmhJSfdRvq"><img src="/email.png" alt="Email" /></a>
        <a href="https://wa.me/123456789"><img src="/whatsapp.png" alt="WhatsApp" /></a>
        <a href="https://twitter.com/"><img src="twitter.jpg" alt="X" /></a>
        <a href="https://www.instagram.com/"><img src="/instagram.png" alt="Instagram" /></a>
        <a href="https://www.google.com/maps/place/Plaza+Bella/@17.0815171,-96.7544419,14z/data=!4m6!3m5!1s0x85c719275c7a2a6f:0x152fb996d4f2579e!8m2!3d17.0755813!4d-96.7579736!16s%2Fg%2F11b_2p4h27?entry=ttu"><img src="/google-maps.png" alt="Google Maps" /></a>
        <a href="https://www.facebook.com/"><img src="/facebook.png" alt="Facebook" /></a>
      </div>
      </div>

    
    </form>
  );
}
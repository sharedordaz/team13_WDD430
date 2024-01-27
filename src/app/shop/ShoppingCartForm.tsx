
import { useFormState, useFormStatus } from 'react-dom'; // Import your form library
import React from 'react';
import styles from "@/app/page.module.css";

export default function PaymentForm() {
  return (
    <form className={styles.formContainer}>
      <div>
        <h1 className={styles.formTitle}>Payment Details</h1>
        
        {/* Name */}
        <div className={styles.formGroup}>
          <label
            className={styles.formLabel}
            htmlFor="name"
          >
            Name
          </label>
          <input
            className={styles.formInput} 
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Total Price */}
        <div className={styles.formGroup}>
          <label
            className={styles.formLabel} 
            htmlFor="totalPrice"
          >
            Total Price
          </label>
          <input
            className={styles.formInput}
            id="totalPrice"
            type="text"
            name="totalPrice"
            placeholder="Enter total price"
            required
          />
        </div>

        {/* Address */}
        <div className={styles.formGroup}>
          <label
            className={styles.formLabel}
            htmlFor="address"
          >
            Address
          </label>
          <input
            className={styles.formInput}
            id="address"
            type="text"
            name="address"
            placeholder="Enter your address"
            required
          />
        </div>

        {/* Card Number */}
        <div className={styles.formGroup}>
          <label
            className={styles.formLabel} 
            htmlFor="cardNumber"
          >
            Card Number
          </label>
          <div className="relative">
            <input
              className={styles.formInput} 
              id="cardNumber"
              type="text"
              name="cardNumber"
              placeholder="Enter your card number"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div className={styles.formGroup}>
          <label
            className={styles.formLabel} 
            htmlFor="email"
          >
            Email
          </label>
          <input
            className={styles.formInput}
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email address"
            required
          />
        </div>

        {/* Expiry Date */}
        <div className={styles.formGroup}>
          <label
            className={styles.formLabel}
            htmlFor="expiryDate"
          >
            Expiry Date
          </label>
          <div className={styles.formGroup}>
            <input
              className={styles.formInput} 
              id="expiryDate"
              type="text"
              name="expiryDate"
              placeholder="MM/YY"
              required
            />
          </div>
        </div>
      </div>
      <div className={styles.Button}>
      <button
            type="submit"
            className={styles.submitButton} 
          >
            Submit
          </button>
          </div>
    </form>
  );
}
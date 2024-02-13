"use client";
import React from 'react';
import styles from '../page.module.css';

export default function GridControl(){
    let sortStyle = 'alph';

  const handleSortChange = (newSortStyle: any) => {
    sortStyle = newSortStyle;
    console.log(newSortStyle);
  }
  function printSomething(){
        console.log('Something');
        return 0;
      }
    return ( 
        <div className={styles.gridControlDiv}>
         <a href="/?sort=alph">
         <button > 
             A-Z↑
         </button>
         </a>
         <a href="/?sort=alphrev">
         <button > 
             A-Z↓
         </button>
         </a>

         <a href="/?sort=price">
         <button > 
             Price↑
         </button>
         </a>
         <a href="/?sort=pricerev">
         <button > 
             Price↓
         </button>
         </a>
         <div className = {styles.gridControlBar}>|</div>
         <a href="/?sort=artalph">
         <button > 
                A-Z↑
         </button>
         </a>
         <a href="/?sort=artalphrev">
         <button > 
            A-Z↓
         </button>
         </a>
         {/*<p>({sortStyle})</p>*/}

        </div>

    )
}

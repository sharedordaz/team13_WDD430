import styles from '@/app/page.module.css'

export default function GridControl(){
    return ( 
        <div className={styles.gridControlDiv}>
         <button>
             A-Z↑
         </button>
         <button>
             A-Z↓
         </button>
         <button>
             Price↑
         </button>
         <button>
             Price↓
         </button>
         <p>|</p>
          <button>
                A-Z↑
         </button>
         <button>
            A-Z↓
         </button>

        </div>

    )
}

import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { cookies } from 'next/headers';

import styles from "@/app/page.module.css";

export default function shoppingCart(){
        const cookieStore = cookies();
        const cookieCart: RequestCookie | undefined = cookieStore.get('cart');
        //console.log(cookieCart);
        const cartItems: any[] = [];
        if (cookieCart){
            const products = JSON.parse(cookieCart.value);
            products.forEach( (item:any) => {
                cartItems.push(cartItem(item))
                })
            return (
                <div className={styles.shopCart}>
                {cartItems}
                </div>
            );
            //console.log(products);
            }
        else{
            return(
                <div className = {styles.shopCart}>
                <h1>You havent selected nothing!</h1>
                </div>
            )

            }

    }

function cartItem(item:any){
        return(
            <div> 
            <h3>{item.Name}</h3>
            <p>Price: ${item.Price}</p>
            </div>
        )

    }

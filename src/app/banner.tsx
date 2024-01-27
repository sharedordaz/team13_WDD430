import Image from "next/image";
import styles from "./page.module.css";

export default function NavBar() {
  return (
<Image
              src="/banner.jpg"
              alt="Banner"
              className={styles.vercelLogo}
              layout="responsive"
              width={1360}
              height={600}
              priority
            />
)}

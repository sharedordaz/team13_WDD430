import Image from "next/image";
import styles from "./page.module.css";

export default function NavBar() {
  return (
<Image
              src="/banner.jpg"
              alt="Banner"
              className={styles.vercelLogo}
              width={1360}
              height={500}
              priority
            />
)}

import Image from "next/image";
import styles from "./page.module.css";

export default function Logo() {
  return (
    <div className={styles.logoContainer}>
      <Image
        src="/logo.png"
        alt="Handcraft Haven"
        className={styles.vercelLogo}
        width={100}
        height={100}
        priority
      />
    </div>
  );
}
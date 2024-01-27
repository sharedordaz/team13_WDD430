import Logo from './logo';
import NavBar from './nav';
import styles from './page.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <NavBar />
    </header>
  );
};

import styles from './header.module.css';
import Logo from '../images/celular.png'; 

export function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logo" />
      <h1>Rede-Social</h1>
    </header>
  );
}
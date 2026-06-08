import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLeft}>
        <span className={styles.creative}>Creative</span>
        <span className={styles.studio}>studio</span>
      </div>
      
      <div className={styles.navCenter}>
        <h1 className={styles.logo}>WEN LAUNCH</h1>
      </div>
      
      <div className={styles.navRight}>
        <div className={styles.navLinks}>
          <a href="#about" className={styles.navLink}>About</a>
          <a href="#services" className={styles.navLink}>Services</a>
          <a href="#cases" className={styles.navLink}>Cases</a>
          <a href="#contact" className={styles.navLink}>Contact</a>
        </div>
      </div>
    </nav>
  );
}
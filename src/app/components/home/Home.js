import styles from './Home.module.css';

export default function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            <span className={styles.titleLine}>WE ARE</span>
            <span className={styles.titleLine}>FULL-SERVICE</span>
            <span className={styles.titleLine}>AGENCY</span>
          </h1>
        </div>
        
        <div className={styles.heroDescription}>
          <p className={styles.descriptionText}>
            The first full-stack Web3<br />
            creative agency integrating AI<br />
            technology to deliver best-in-<br />
            class client experience.
          </p>
        </div>
      </div>
      
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollCircle}>
          <span className={styles.scrollText}>SCROLL TO DISCOVER OUR SERVICES</span>
          <div className={styles.scrollArrow}>↓</div>
        </div>
      </div>
      
      <div className={styles.heroArrow}>
        ↗
      </div>
    </section>
  );
}
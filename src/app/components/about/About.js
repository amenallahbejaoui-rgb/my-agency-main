import styles from './About.module.css';

export default function About() {
  const services = [
    {
      id: 1,
      title: "AI Dev",
      description: "We specialize in creating AI-powered solutions that enhance user experiences through intelligent automation and data-driven insights.",
      icon: "gears"
    },
    {
      id: 2,
      title: "UI Design",
      description: "We craft the boundaries of innovation through beautiful UI & UX design, ensuring you distinguish yourself from your competitors.",
      icon: "monitor"
    },
    {
      id: 3,
      title: "Web Development",
      description: "Our proficient team of frontend developers construct understanding of the latest frontend technologies and trends, featuring an emphasis on SaaS Projects.",
      icon: "laptop"
    },
    {
      id: 4,
      title: "Ecommerce",
      description: "We offer comprehensive ecommerce solutions designed for modern businesses, delivering seamless online experiences.",
      icon: "cursor"
    },
    {
      id: 5,
      title: "Animation",
      description: "We create stunning animations and motion graphics to elevate your brand and engage your audience with dynamic visual experiences.",
      icon: "stars"
    }
  ];

  return (
    <section className={styles.about}>
      <div className={styles.container}>
        
        {/* A Little About Us Section */}
        <div className={styles.aboutSection}>
          <div className={styles.aboutContent}>
            <div className={styles.aboutLeft}>
              <h2 className={styles.aboutTitle}>
                A LITTLE<br />
                ABOUT US
              </h2>
              <div className={styles.curvedArrow}>
                <svg viewBox="0 0 100 60" className={styles.arrowSvg}>
                  <path 
                    d="M10 50 Q 30 10, 70 30" 
                    stroke="rgba(255,255,255,0.6)" 
                    strokeWidth="1" 
                    fill="none"
                  />
                  <path 
                    d="M65 25 L 70 30 L 65 35" 
                    stroke="rgba(255,255,255,0.6)" 
                    strokeWidth="1" 
                    fill="none"
                  />
                </svg>
              </div>
            </div>
            
            <div className={styles.aboutRight}>
              <div className={styles.aboutArrow}>↗</div>
              <div className={styles.aboutText}>
                <p className={styles.aboutDescription}>
                  Headquartered in Los Angeles, our team is dedicated 
                  to driving conversions and delivering tangible value to 
                  our clients. We are fueled by our passion for creating 
                  distinctive experiences that set you apart from the sea 
                  of ordinary brands in today's market.
                </p>
                <p className={styles.aboutDescription}>
                  We take the time to deeply understand your business, 
                  allowing us to execute on your mission most effectively.
                </p>
                <button className={styles.readMoreBtn}>
                  Read more →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* We Are Expert At Section */}
        <div className={styles.expertSection}>
          <div className={styles.expertHeader}>
            <h2 className={styles.expertTitle}>
              WE ARE<br />
              EXPERT AT
            </h2>
            <button className={styles.letsWorkBtn}>
              Let's work
            </button>
          </div>
          
          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <div key={service.id} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  {service.icon === 'gears' && (
                    <div className={styles.gearsIcon}>
                      <div className={styles.gear1}></div>
                      <div className={styles.gear2}></div>
                    </div>
                  )}
                  {service.icon === 'monitor' && (
                    <div className={styles.monitorIcon}>
                      <div className={styles.screen}></div>
                      <div className={styles.stand}></div>
                    </div>
                  )}
                  {service.icon === 'laptop' && (
                    <div className={styles.laptopIcon}>
                      <div className={styles.laptopScreen}></div>
                      <div className={styles.laptopBase}></div>
                    </div>
                  )}
                  {service.icon === 'cursor' && (
                    <div className={styles.cursorIcon}>
                      <div className={styles.pointer}></div>
                    </div>
                  )}
                  {service.icon === 'stars' && (
                    <div className={styles.starsIcon}>
                      <div className={styles.star}></div>
                      <div className={styles.star}></div>
                      <div className={styles.star}></div>
                    </div>
                  )}
                </div>
                
                <div className={styles.serviceContent}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
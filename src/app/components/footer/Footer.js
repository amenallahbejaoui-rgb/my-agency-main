import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Cases', href: '#cases' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'AI Development', href: '#ai-dev' },
    { name: 'UI/UX Design', href: '#design' },
    { name: 'Web Development', href: '#web-dev' },
    { name: 'E-commerce', href: '#ecommerce' },
    { name: 'Animation', href: '#animation' }
  ];

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'Instagram', href: '#', icon: '📸' },
    { name: 'Telegram', href: '#', icon: '📱' }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Main Footer Content */}
        <div className={styles.footerMain}>
          
          {/* Company Section */}
          <div className={styles.footerSection}>
            <div className={styles.companyInfo}>
              <h3 className={styles.companyName}>WEN LAUNCH</h3>
              <p className={styles.companyTagline}>
                Creative Studio
              </p>
              <p className={styles.companyDescription}>
                The first full-stack Web3 creative agency integrating AI 
                technology to deliver best-in-class client experience.
              </p>
            </div>
          </div>

          {/* Navigation Section */}
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Navigation</h4>
            <ul className={styles.linkList}>
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className={styles.footerLink}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Services</h4>
            <ul className={styles.linkList}>
              {services.map((service) => (
                <li key={service.name}>
                  <a href={service.href} className={styles.footerLink}>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Get In Touch</h4>
            <div className={styles.contactInfo}>
              <p className={styles.contactItem}>
                📧 hello@wenlaunch.com
              </p>
              <p className={styles.contactItem}>
                📍 Los Angeles, CA
              </p>
              <p className={styles.contactItem}>
                📞 +1 (555) 123-4567
              </p>
            </div>
            
            {/* Social Links */}
            <div className={styles.socialLinks}>
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href} 
                  className={styles.socialLink}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>
              © {currentYear} WEN LAUNCH. All rights reserved.
            </p>
            <div className={styles.bottomLinks}>
              <a href="#privacy" className={styles.bottomLink}>Privacy Policy</a>
              <a href="#terms" className={styles.bottomLink}>Terms of Service</a>
              <a href="#cookies" className={styles.bottomLink}>Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
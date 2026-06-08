import styles from './Features.module.css';

export default function Features() {
  const features = [
    {
      id: 1,
      title: "Launch with Ease",
      description: "",
      icon: "🚀",
      span: "small"
    },
    {
      id: 2,
      title: "Unlimited Requests",
      description: "Get unlimited task requests. Prioritize what is needed in your business.",
      icon: "🔄",
      span: "medium"
    },
    {
      id: 3,
      title: "Launch Fast",
      description: "Get started requests tasks immediately after subscribing and expect a 2 day average turnaround time.",
      icon: "⚡",
      span: "medium"
    },
    {
      id: 4,
      title: "Start Today",
      description: "Get started requests tasks immediately after subscribing and expect a 2 day average turnaround time.",
      icon: "📅",
      span: "medium"
    },
    {
      id: 5,
      title: "Pause Or Cancel Anytime",
      description: "Easily pause or cancel your subscription at any point. Giving you the flexibility your business needs.",
      icon: "⏸️",
      span: "medium"
    },
    {
      id: 6,
      title: "Affordable Pricing",
      description: "Save up to 70% per year hiring our team compared to hiring a full-time designer & developer in the United States.",
      icon: "💰",
      span: "medium"
    }
  ];

  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <h2 className={styles.title}>FEATURES</h2>
        
        <div className={styles.featuresGrid}>
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className={`${styles.featureCard} ${styles[feature.span]}`}
            >
              <div className={styles.featureIcon}>
                <div className={styles.iconCircle}>
                  {feature.icon}
                </div>
              </div>
              
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                {feature.description && (
                  <p className={styles.featureDescription}>{feature.description}</p>
                )}
              </div>
              
              {feature.id === 4 && (
                <div className={styles.featureArrow}>
                  ↗
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
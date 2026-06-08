import styles from './OurWork.module.css';

export default function OurWork() {
  const projects = [
    {
      id: 1,
      title: "Savage Nation",
      category: "Digital Collectible",
      image: "/api/placeholder/600/400",
      description: "A futuristic digital collectible platform featuring 3D rendered characters and immersive landscapes.",
      span: "large"
    },
    {
      id: 2,
      title: "Gooey Crunch",
      category: "Ecommerce",
      image: "/api/placeholder/400/400",
      description: "An innovative ecommerce platform with stunning visual effects and user experience design.",
      span: "medium"
    },
    {
      id: 3,
      title: "Kaizen Talent",
      category: "Marketing Agency",
      image: "/api/placeholder/400/400",
      description: "A professional marketing agency website with modern design and strategic positioning.",
      span: "medium"
    }
  ];

  return (
    <section className={styles.ourWork}>
      <div className={styles.container}>
        <h2 className={styles.title}>OUR WORKS</h2>
        
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`${styles.projectCard} ${styles[project.span]}`}
            >
              <div className={styles.projectImage}>
                <div className={styles.imagePlaceholder}>
                  {project.id === 1 && (
                    <div className={styles.project1Visual}>
                      <div className={styles.geometricShapes}>
                        <div className={styles.shape1}></div>
                        <div className={styles.shape2}></div>
                        <div className={styles.shape3}></div>
                      </div>
                    </div>
                  )}
                  {project.id === 2 && (
                    <div className={styles.project2Visual}>
                      <div className={styles.portalEffect}>
                        <div className={styles.portal}></div>
                        <div className={styles.figure}></div>
                      </div>
                    </div>
                  )}
                  {project.id === 3 && (
                    <div className={styles.project3Visual}>
                      <div className={styles.astronautScene}>
                        <div className={styles.astronaut}></div>
                        <div className={styles.bubbles}>
                          <div className={styles.bubble}></div>
                          <div className={styles.bubble}></div>
                          <div className={styles.bubble}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className={styles.projectInfo}>
                <div className={styles.projectMeta}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <span className={styles.projectCategory}>/ {project.category}</span>
                </div>
                <div className={styles.projectArrow}>→</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.bottomActions}>
          <div className={styles.socialLink}>
            Text me on Telegram
          </div>
          <button className={styles.discussButton}>
            💬 Discuss Project
          </button>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import styles from '../Sections/Projects/ProjectsStyles.module.css';

function ProjectCard({ src, githubLink, deployLink, h3, p, githubIcon, deployIcon }) {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img src={src} alt={`${h3} logo`} className={styles.image} />
        <div className={styles.overlay}>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a href={deployLink} target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <img src={deployIcon} alt="Deploy" />
          </a>
        </div>
      </div>
      <h3>{h3}</h3>
      <p>{p}</p>
    </div>
  );
}

export default ProjectCard;

import React from "react";

import styles from "./ProjectCard.module.css";
import projectpic from "./laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.avif"

export const ProjectCard = ({
  project: { title, description, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={projectpic}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.links}>
        <a href={demo} className={styles.link}>
          Demo
        </a>
        <a href={source} className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};

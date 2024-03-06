import React from "react";

import styles from "./About.module.css";
import aboutImage from "./aboutImage.png"
import cursorIcon from "./cursorIcon.png"
import serverIcon from "./serverIcon.png"
import uiIcon from "./uiIcon.png"

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={aboutImage}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a Entry level frontend developer in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={serverIcon} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I am Entry level backend developer with fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={uiIcon} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Full - stack Developer</h3>
              <p>
                I have created full stack website with mern stack .
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

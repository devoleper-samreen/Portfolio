import React from "react";
import styles from "./Contact.module.css";
import emailIcon from "./emailIcon.png"
import linkedinIcon from "./linkedinIcon.png"
import githubIcon from "./githubIcon.png"

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" />
          <a href="mailto:samreenmalik52292@gmail.com">click</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedinIcon}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/samreen-malik-b9484b291">click</a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="Github icon" />
          <a href="https://www.github.com/devoleper-samreen">click</a>
        </li>
      </ul>
    </footer>
  );
};

import React from "react";
import styles from "./Hero.module.css";
import hero from "./heroImage.png"


export const Hero = () => {

  
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}> I'm Samreen !</h1>
        <p className={styles.description}>
          full - stack developer with ability to learn and colleborate in rapidly changing enviornment and composition.
        </p>
        <a href="https://drive.google.com/file/d/1XpO7-53yhcUyubVQ8Zst3nbTsAJPNCQs/view?usp=drivesdk" className={styles.contactBtn}>
          Resume
        </a>
      </div>
      <img
        src={hero}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

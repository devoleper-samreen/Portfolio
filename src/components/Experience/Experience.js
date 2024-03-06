import React from "react";

import styles from "./Experience.module.css";
import html from "./html.png"
import css from "./css.png"
import js from "./js.png"
import bootstrap from "./bootstrap.png"
import tailwind from "./tailwind.png"
import react from "./react.png"
import mongodb from "./mongodb.png"
import node from "./node.png"
import express from "./express.png"

export const Experience = () => {

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>

             <div className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={html}/>
                </div>
                <p className={styles.name}>Html</p>
              </div>

              <div className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={css}/>
                </div>
                <p className={styles.name}>CSS</p>
              </div>

              <div className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={js}/>
                </div>
                <p className={styles.name}>Javascript</p>
              </div>

              <div className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={bootstrap}/>
                </div>
                <p className={styles.name}>Bootstrap</p>
              </div>

              <div className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={tailwind}/>
                </div>
                <p className={styles.name}>Tailwind css</p>
              </div>

              <div className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={react}/>
                </div>
                <p className={styles.name}>React</p>
              </div>

              <div className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={node}/>
                </div>
                <p className={styles.name}>Node</p>
              </div>

              <div className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={express}/>
                </div>
                <p className={styles.name}>Express</p>
              </div>

              <div className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={mongodb}/>
                </div>
                <p className={styles.name}>Mongodb</p>
              </div>

        </div>
      </div>
    </section>
  );
};

import React, { useState } from "react";

import styles from "./Navbar.module.css";
import menuopen from "./menuIcon.png"
import menuclose from "./closeIcon.png"

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
      Samreen
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? menuopen
              : menuclose
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen ||styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about" >About</a>
          </li>
          <li>
            <a href="#experience">Skills</a>
          </li>
          <li>
            <a href="#projects" >Projects</a>
          </li>
          <li>
            <a href="#contact" >Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

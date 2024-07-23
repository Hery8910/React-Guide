import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css"


export function NavBar() {
  return (
    <nav>
      <ul className={styles.ul}>
        <li>
          <Link className={styles.li} to="/">Home</Link>
        </li>
        <li>
          <Link className={styles.li} to="/Components">Components</Link>
        </li>
        <li>
          <Link className={styles.li} to="/Hooks">Hooks</Link>
        </li>
        <li>
          <Link className={styles.li} to="/Styles">Style</Link>
        </li>
        <li>
          <Link className={styles.li} to="BestPractice">Best Practices</Link>
        </li>
        <li>
          <Link className={styles.li} to="/Exercises">Exercises</Link>
        </li>
      </ul>
    </nav>
  );
}
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.title}>With ❤️ from Berlin</h2>
      <ul className={styles.linkList}>
        <li className={styles.listItem}>
          <Link to="/About" className={styles.link}>
            About Me
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link to="/About" className={styles.link}>
            Contact
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link to="/About" className={styles.link}>
            Feedback
          </Link>
        </li>
      </ul>
    </footer>
  );
}

import React from 'react';
import styles from './HooksPage.module.css';

 export function HooksPage(){
  return (
    <footer className={styles.footer}>
      <h2 className={styles.title}>With ❤️ from Berlin</h2>
      <ul className={styles.linkList}>
        <li className={styles.listItem}><a href="#about-me" className={styles.link}>About Me</a></li>
        <li className={styles.listItem}><a href="#contact" className={styles.link}>Contact</a></li>
        <li className={styles.listItem}><a href="#feedback" className={styles.link}>Feedback</a></li>
      </ul>
    </footer>
  );
};




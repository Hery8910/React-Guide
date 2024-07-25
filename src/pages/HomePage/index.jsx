import React from "react";
import styles from "./HomePage.module.css";

export function HomePage() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.h1}>
          A open source <span className={styles.span}>React </span> components
          library
        </h1>
        <div className={styles.images}>
          <img
            className={styles.Card}
            src="public/images/Card_Component.webp"
            alt="Web example"
          />
          <img
            className={styles.Table}
            src="public/images/Table.webp"
            alt="Web example"
          />
          <img
            className={styles.Footer}
            src="public/images/Footer.webp"
            alt="Web example"
          />
        </div>
      </header>

      <section className={styles.section}>
        <p className={styles.p}>
          As part of the React course I participated in, we were required to
          demonstrate our acquired knowledge by creating a functional
          application with React. After analyzing all the application options I
          believed I was capable of creating with React, none seemed to offer a
          solution to an existing problem. That is when I considered creating an
          application that would help me find information more efficiently, have
          code examples that I could copy and use in any project, and, if
          necessary, quickly and directly access the official documentation. I
          hope it will be as useful to you as it has been for me.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Objectives</h2>
        <p className={styles.p}>
          The objectives of the project were quite clear from the beginning. I
          wanted to create a collection of components, hooks, relevant
          information on styling, best practices, and exercise examples. In
          general, I aimed to compile the knowledge I have acquired during my
          studies to assist other programming students like myself. The project
          is open-source with the goal of showcasing how I developed this
          project and motivating others to develop their own solutions or
          contribute to this one.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Benefits</h2>
        <p className={styles.p}>
          This project provides quick access to collected information about
          React and offers practical exercises to learn React in a more hands-on
          manner. The ready-to-use component examples make it easier to solve
          these exercises and allow you to start creating your own projects. All
          the information gathered has been sourced from the official
          documentation, but it may contain errors or be outdated. Therefore, I
          always recommend using the official documentation for a more
          comprehensive guide.
        </p>
      </section>
    </main>
  );
}

export default HomePage;

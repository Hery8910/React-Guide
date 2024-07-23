import React from "react";
import styles from "./HomePage.module.css";

export function HomePage() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.h1}>
        A open source <span className={styles.span}>React</span> <br />components library
        </h1>
        <img className={styles.img} src="public/images/Card_Component.webp" alt="Web example" />
      </header>

      <section className={styles.section}>
        <h2 className={styles.h2}></h2>
        <p className={styles.p}>
          The Developer Guide: a live reference is created for React hooks,
          components, methods, useful styling tricks or tools with the purpose
          of helping developers remember and have quick access to useful
          examples and documentation- I believe almost everything that can be
          remembered straightaway will mean you learn it quicker. I tried to get
          the most basic information which could be useful for learning web
          programming languages and technologies. I highly suggest that you
          always verify the content of this project as it may contain some
          errors. I hope it helps you on your learning Journey.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Objectives</h2>
        <p className={styles.p}>
          The main objective of Developer Guide is to provide a central hub for
          learning and recalling React components and hooks. This guide aims to
          offer clear and concise documentation accompanied by practical
          examples. By using this guide, users can quickly copy and implement
          code snippets, enhancing their coding efficiency. Additionally, the
          guide supports continuous learning by regularly updating the content
          to stay current with the latest React developments. Furthermore, the
          application provides practical exercises to enhance learning and
          application of React concepts.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Benefits</h2>
        <p className={styles.p}>
          Developer Guide offers easy access to essential React information,
          significantly improving users understanding through practical
          examples. The guide saves time by providing ready-to-use code
          snippets, enabling developers to focus on building their projects.
          Moreover, it supports continuous learning with up-to-date content,
          ensuring that developers are always aware of the latest practices and
          updates in React. Additionally, it includes practical exercises to
          reinforce learning and application of React concepts.
        </p>
      </section>
    </main>
  );
}

export default HomePage;

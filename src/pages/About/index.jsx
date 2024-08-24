import React from "react";
import { useState } from "react";
import styles from "./About.module.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export function About() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ name, email, comment });
  };
  return (
    <>
      <main className={styles.main}>
        <header className={styles.header}>
            <h1>
              Hi!
              <br /> My name is Heriberto
            </h1>
          <div>
            <p>
              It's a pleasure to connect with you! If you have any questions,
              feedback, or just want to say hello, feel free to get in touch
              with me. I'm available for collaborations, professional
              opportunities, and any other matters you'd like to discuss.
            </p>
        
            <a
              className={styles.a}
              href="https://github.com/Hery8910"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to Github profile"
            >
              <FaGithub />
            </a>
            <a
              className={styles.a}
              href="https://www.linkedin.com/in/heriberto-santana-solsona-7366342b2/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to linkedin profile"
            >
              <FaLinkedin />
            </a>
          </div>
        </header>
        <section className={styles.section}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
              <input
                type="text"
                id="name"
                className={styles.input}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="comment" className={styles.label}>
                Comment
              </label>
              <textarea
                id="comment"
                className={styles.textarea}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.button}>
              Submit
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

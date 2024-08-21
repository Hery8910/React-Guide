import React from "react";
import { RenderCode } from "../../components/RenderCode";
import { fetchData } from "../../hooks/fetchData";
import styles from "./Exercise.module.css";



export function Exercises() {
  const { data, loading, error } = fetchData("/Exercises.json");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  // <RenderCode code={element.requirements} language="md"/>

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.h1}>Practice Exercises</h1>
        <div>
          <h2 className={styles.h2}>Sharpen Your React Skills with Tailored Exercises</h2>
          <p className={styles.p}>
            On this page, you’ll find a collection of exercises categorized into
            three levels: Beginner, Intermediate, and Advanced. Each exercise is
            accompanied by a detailed description of the tasks to be completed,
            provided in markdown format (.md), making it easy to copy the
            requirements into a README.md file. These exercises are designed to
            challenge and enhance your understanding of React. I hope you find
            them useful. Happy coding!
          </p>
        </div>
      </header>
      <main className={styles.main}>
        <ul className={styles.ul}>
          {data.map(element => {
            return(
              <li
              className={styles.li} 
              key={element.title}>
                <p className={styles.li_p}>{element.level}</p>
                <h2 className={styles.h2}>{element.title}</h2>
                <p className={styles.p}>{element.objective}</p>
              </li>
            )
          })}
          
        </ul>
      </main>
    </>
  );
}

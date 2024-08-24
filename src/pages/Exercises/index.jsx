import React, { useState } from "react";
import { RenderCode } from "../../components/RenderCode";
import { fetchData } from "../../hooks/fetchData";
import styles from "./Exercise.module.css";

export function Exercises() {
  const { data, loading, error } = fetchData("/Exercises.json");
  const [showPopover, setShowPopover] = useState(false);
  const [popoverContent, setPopoverContent] = useState(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  function handleClick(element) {
    setPopoverContent(element); 
    setShowPopover(true); 
  }

  function handlePopover() {
    setShowPopover(false);
  }

  return (
    <>
     
      <main className={styles.main}>
      <header>
        <h1 className={styles.h1}>Practice Exercises</h1>
          
          <p className={styles.p}>
            On this page, you’ll find a collection of exercises categorized into
            three levels: Beginner, Intermediate, and Advanced. Each exercise is
            accompanied by a detailed description of the tasks to be completed,
            provided in markdown format (.md), making it easy to copy the
            requirements into a README.md file. These exercises are designed to
            challenge and enhance your understanding of React. I hope you find
            them useful. Happy coding!
          </p>
      </header>
        <ul className={styles.ul}>
          {data.map((element) => {
            return (
              <li className={styles.li} key={element.title}>
                <p className={styles.li_p}>{element.level}</p>
                <h2 className={styles.h2}>{element.title}</h2>
                <p className={styles.p}>{element.objective}</p>
                <button className={styles.button} onClick={() => handleClick(element)}>More info</button>
              </li>
            );
          })}
        </ul>
        
      </main>
     
      {showPopover && (
         <aside className={styles.aside}>
          <div className={styles.popover}>
            <button onClick={handlePopover} className={styles.button}>
              X
            </button>
            <p className={styles.li_p}>{popoverContent.level}</p>
            <h3>{popoverContent.title}</h3>
            <p className={styles.p}>{popoverContent.description}</p>
            <RenderCode code={popoverContent.requirements} language="md" />
          </div>
      </aside>

        )}
    </>
  );
}

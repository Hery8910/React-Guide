import React, { useState } from "react";
import { RenderCode } from "../../components/RenderCode";
import { fetchData } from "../../hooks/fetchData";
import styles from "./HooksPage.module.css";
import ScrollspyNav from "react-scrollspy-nav";


export function HooksPage() {
  const { data, loading, error } = fetchData("/HooksPage.json");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <>
     <aside className={styles.aside}>
        <nav>
          <ScrollspyNav
            scrollTargetIds={[
              "about",
              `${data.sections[0].id}`,
              `${data.sections[1].id}`,
              `${data.sections[2].id}`,
              `${data.sections[3].id}`,
            ]}
            offset={100}
            activeNavClass={styles.isActive}
            scrollDuration="1000"
            headerBackground="true"
          >
            <ul>
            <h3>In this page</h3>

              <li>
                <a href="#about">
                  About
                </a>
              </li>
              <li>
                <a href={`#${data.sections[0].id}`}>
                  Architecture
                </a>
              </li>
              <li>
                <a href={`#${data.sections[1].id}`}>
                  SPA
                </a>
              </li>
              <li>
                <a href={`#${data.sections[2].id}`}>
                  Reusability
                </a>
              </li>
              <li>
                <a href={`#${data.sections[3].id}`}>
                  Performance
                </a>
              </li>
             
            </ul>
          </ScrollspyNav>
        </nav>
      </aside>
      <header id="about">
        <h1> {data.header.title}</h1>
          <p>{data.header.description}</p>
      </header>
      <main className={styles.main}>
        <ul>
          {data.sections.map((element) => {
            return (
              <li key={element.id} id={element.id}>
                <h3>{element.title}</h3>
                <p>{element.description}</p>
                <h3>Benefits</h3>
                <p>{element.benefits}</p>
                <RenderCode code={element.implementation} language="javascript"/>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}

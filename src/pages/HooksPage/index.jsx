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
            <ul className={styles.nav_ul}>
              <li className={styles.nav_li}>
                <a className={styles.a} href="#about">
                  About
                </a>
              </li>
              <li className={styles.nav_li}>
                <a className={styles.a} href={`#${data.sections[0].id}`}>
                  Architecture
                </a>
              </li>
              <li className={styles.nav_li}>
                <a className={styles.a} href={`#${data.sections[1].id}`}>
                  SPA
                </a>
              </li>
              <li className={styles.nav_li}>
                <a className={styles.a} href={`#${data.sections[2].id}`}>
                  Reusability
                </a>
              </li>
              <li className={styles.nav_li}>
                <a className={styles.a} href={`#${data.sections[3].id}`}>
                  Performance
                </a>
              </li>
             
            </ul>
          </ScrollspyNav>
        </nav>
      </aside>
      <header className={styles.header} id="about">
        <h1 className={styles.h1}> {data.header.title}</h1>
        <div>
          <h2 className={styles.header_h2}>{data.header.subtitle}</h2>
          <p className={styles.p}>{data.header.description}</p>
        </div>
      </header>
      <main className={styles.main}>
        <ul className={styles.ul}>
          {data.sections.map((element) => {
            return (
              <li className={styles.li} key={element.id} id={element.id}>
                <h2 className={styles.h2}>{element.title}</h2>
                <p className={styles.p}>{element.description}</p>
                <h3 className={styles.h3}>Benefits</h3>
                <p className={styles.p}>{element.benefits}</p>
                <RenderCode code={element.implementation} language="javascript"/>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}

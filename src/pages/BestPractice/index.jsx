import React from "react";
import { fetchData } from "../../hooks/fetchData";
import ScrollspyNav from "react-scrollspy-nav";
import styles from "./BestPractice.module.css";

export function BestPractice() {
  const { data, loading, error } = fetchData("/BestPractice.json");

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
              `${data.sections[4].id}`,
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
              <li>
                <a href={`#${data.sections[4].id}`}>
                  Testing
                </a>
              </li>
            </ul>
          </ScrollspyNav>
        </nav>
      </aside>
      <main id="about">
        <header>
          <h1>{data.header.title}</h1>
            <p>{data.header.description}</p>
        </header>
        <section className={styles.architecture} id={data.sections[0].id}>
          <main className={styles.architecture_main}>
            <div>
              <h2 className={styles.h2}>{data.sections[0].title}</h2>
              <h3 className={styles.h3}>{data.sections[0].topics[0].title}</h3>
              <p className={styles.p}>
                {data.sections[0].topics[0].description}
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>{data.sections[0].topics[1].title}</h3>
              <p className={styles.p}>
                {data.sections[0].topics[1].description}
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>{data.sections[0].topics[1].title}</h3>
              <p className={styles.p}>
                {data.sections[0].topics[2].description}
              </p>
            </div>
          </main>
          <aside className={styles.architecture_aside}>
            <img
              className={styles.architecture_img}
              src={data.sections[0].img}
              alt={data.sections[0].img_alt}
            />
          </aside>
        </section>
        <section className={styles.section} id={data.sections[1].id}>
          <h2 className={styles.h2}>{data.sections[1].title}</h2>
          <h3 className={styles.h3}>{data.sections[1].topics[0].title}</h3>
          <p className={styles.p}>{data.sections[1].topics[0].description}</p>
          <h3 className={styles.h3}>{data.sections[1].topics[1].title}</h3>
          <p className={styles.p}>{data.sections[1].topics[1].description}</p>
          <div className={styles.div}></div>
        </section>
        <section className={styles.section} id={data.sections[2].id}>
          <header className={styles.reusability_header}>
            <h2 className={styles.h2}>{data.sections[2].title}</h2>
            <img
              className={styles.reusability_img}
              src={data.sections[2].img}
              alt={data.sections[2].img_alt}
            />
          </header>
          <main>
            <div>
              <h3 className={styles.h3}>{data.sections[2].topics[0].title}</h3>
              <p className={styles.p}>
                {data.sections[2].topics[0].description}
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>{data.sections[2].topics[1].title}</h3>
              <p className={styles.p}>
                {data.sections[2].topics[1].description}
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>{data.sections[2].topics[2].title}</h3>
              <p className={styles.p}>
                {data.sections[2].topics[2].description}
              </p>
            </div>
          </main>
        </section>
        <section className={styles.section} id={data.sections[3].id}>
          <h2 className={styles.h2}>{data.sections[3].title}</h2>
          <h3 className={styles.h3}>{data.sections[3].topics[0].title}</h3>
          <p className={styles.p}>{data.sections[2].topics[0].description}</p>
          <h3 className={styles.h3}>{data.sections[3].topics[1].title}</h3>
          <p className={styles.p}>{data.sections[3].topics[1].description}</p>
          <h3 className={styles.h3}>{data.sections[3].topics[2].title}</h3>
          <p className={styles.p}>{data.sections[3].topics[2].description}</p>
        </section>
        <section className={styles.section} id={data.sections[4].id}>
          <h2 className={styles.h2}>{data.sections[4].title}</h2>
          <h3 className={styles.h3}>{data.sections[4].topics[0].title}</h3>
          <p className={styles.p}>{data.sections[4].topics[0].description}</p>
          <h3 className={styles.h3}>{data.sections[4].topics[1].title}</h3>
          <p className={styles.p}>{data.sections[4].topics[1].description}</p>
          <h3 className={styles.h3}>{data.sections[4].topics[2].title}</h3>
          <p className={styles.p}>{data.sections[4].topics[2].description}</p>
        </section>
      </main>
    </>
  );
}

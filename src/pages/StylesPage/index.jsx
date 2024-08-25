import React from "react";
import { fetchData } from "../../hooks/fetchData";
import { RenderCode } from "../../components/RenderCode";
import ScrollspyNav from "react-scrollspy-nav";
import styles from "./StylesPage.module.css";

export function StylesPage() {
  const { data, loading, error } = fetchData("/styles.json");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <aside className={styles.aside}>
        <nav>
          <ScrollspyNav
            scrollTargetIds={[
              "about",
              "inline",
              "module",
              "component",
              "global",
            ]}
            offset={100}
            activeNavClass={styles.isActive}
            scrollDuration="1000"
            headerBackground="true"
          >
            <ul>
              <h3>In this page</h3>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#inline">Inline</a>
              </li>
              <li>
                <a href="#module">Module</a>
              </li>
              <li>
                <a href="#component">Components</a>
              </li>
              <li>
                <a href="#global">Global</a>
              </li>
            </ul>
          </ScrollspyNav>
        </nav>
      </aside>
      <main id="about">
        <header>
          <h1>Styling Methods in React</h1>

          <p>
            In this section, we explore the various methods available for
            styling components in React. From inline styles and CSS Modules to
            Styled Components and Global CSS, each approach offers unique
            advantages tailored to specific use cases. Whether you're building a
            small project or a large-scale application, understanding these
            methods will help you choose the best strategy for managing and
            scaling your styles effectively in React. Below, you'll find
            detailed explanations and code examples for each styling technique.
          </p>
        </header>
        <section className={styles.section} id="inline">
          <h3>{data[0].title}</h3>
          <p>{data[0].description}</p>
          <RenderCode code={data[0].code} />
        </section>
        <section className={styles.section} id="module">
          <h3>{data[1].title}</h3>
          <p>{data[1].description}</p>
          <div className={styles.div}>
            <RenderCode code={data[1].code} />
            <RenderCode code={data[1].code2} />
          </div>
        </section>
        <section className={styles.section} id="component">
          <h3>{data[2].title}</h3>
          <p>{data[2].description}</p>
          <RenderCode code={data[2].code} />
        </section>
        <section className={styles.section} id="global">
          <h3>{data[3].title}</h3>
          <p>{data[3].description}</p>
          <div className={styles.div}>
            <RenderCode code={data[3].code} />
            <RenderCode code={data[3].code2} />
          </div>
        </section>
      </main>
    </>
  );
}

import React, { useState, useEffect } from "react";
import { FiExternalLink } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { RenderCode } from "../RenderCode";
import { ComponentHomePage } from "../../pages/ComponentHomePage";
import ScrollspyNav from "react-scrollspy-nav";
import styles from "./Component.module.css";

export function Component({ data }) {
  const { name } = useParams();
  const [component, setComponent] = useState(null);

  useEffect(() => {
    if (data) {
      const foundComponent = data.find((comp) => comp.name === name);
      setComponent(foundComponent);
    }
  }, [name, data]);
  useEffect(() => {
    const handleScroll = () => {
      const activeElement = document.querySelector(".is-active");
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!component) return <ComponentHomePage />;

  return (
    <>
      <aside className={styles.aside}>
        <nav>
          <ul className={styles.nav}>
            <ScrollspyNav
              scrollTargetIds={[
                "installation",
                "usage",
                "styles",
                "properties",
                "references",
              ]}
              offset={100}
              activeNavClass={styles.isActive}
              scrollDuration="1000"
              headerBackground="true"
            >
              <h2 className={styles.h2}>In this page</h2>

              <li className={styles.li}>
                <a className={styles.a} href="#installation">
                  Installation
                </a>
              </li>
              <li className={styles.li}>
                <a className={styles.a} href="#usage">
                  Usage
                </a>
              </li>
              <li className={styles.li}>
                <a className={styles.a} href="#styles">
                  Styles
                </a>
              </li>
              <li className={styles.li}>
                <a className={styles.a} href="#properties">
                  Properties
                </a>
              </li>
              <li className={styles.li}>
                <a className={styles.a} href="#references">
                  References
                </a>
              </li>
            </ScrollspyNav>
          </ul>
        </nav>
      </aside>
      <main>
        <header>
          <h1>{component.name}</h1>
          <p>{component.description}</p>
        </header>
        <section id="installation">
          <h3>Installation</h3>
          <p>{component.installation.description}</p>
          {component.installation.command ? (
            <RenderCode code={component.installation.command} />
          ) : (
            ""
          )}
        </section>
        <section id="usage">
          <h2>Usage</h2>
          <h3>Basic</h3>
          <p>{component.usage.basic.description}</p>
          {component.usage.basic.code ? (
            <RenderCode code={component.usage.basic.code} />
          ) : (
            ""
          )}
        </section>
        <section id="styles">
          <h3>Styles</h3>
          <p>{component.styles.description}</p>
          {component.styles.code ? (
            <RenderCode code={component.styles.code} />
          ) : (
            ""
          )}
        </section>
        <section id="properties">
          <h2>Properties</h2>
          {component.properties.map((prop, index) => (
            <div key={index}>
              <h3>{prop.name}</h3>
              <p>{prop.description}</p>
              {prop.example ? <RenderCode code={prop.example} /> : ""}
            </div>
          ))}
        </section>
        <section id="references">
          <h2>References</h2>
          <ul>
            {component.references.map((ref, index) => (
              <li key={index}>
                <a href={ref.url} target="_blank" rel="noopener noreferrer">
                  {ref.name} <FiExternalLink />
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

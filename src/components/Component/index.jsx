import React, { useState, useEffect } from "react";
import { FiExternalLink } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { RenderCode } from "../RenderCode";
import { ComponentHomePage } from "../../pages/ComponentHomePage";
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

  if (!component) return <ComponentHomePage />;

  return (
    <div className={styles.body}>
      <main className={styles.main}>
        <header className={styles.header}>
        <div>
          <h1 className={styles.h1}>{component.name}</h1>
          <p className={styles.p}>{component.description}</p>
          </div>
          <img
          className={styles.img}
              src={component.example.url}
              alt={component.example.description}
            ></img>
        </header>
        <section className={styles.section}>
          <h2 className={styles.h2} id="installation">
            Installation
          </h2>
          <p className={styles.p}>{component.installation.description}</p>
          {component.installation.command ? (
            <RenderCode code={component.installation.command} />
          ) : (
            ""
          )}
        </section>
        <section className={styles.section}>
          <h2 className={styles.h2} id="usage">
            Usage
          </h2>
          <h3>Basic</h3>
          <p className={styles.p}>{component.usage.basic.description}</p>
          {component.usage.basic.code ? (
            <RenderCode code={component.usage.basic.code} />
          ) : (
            ""
          )}
        </section>
        <section className={styles.section}>
          <h2 className={styles.h2} id="styles">
            Styles
          </h2>
          <p className={styles.p}>{component.styles.description}</p>
          {component.styles.code ? (
            <RenderCode code={component.styles.code} />
          ) : (
            ""
          )}
        </section>
        <section className={styles.section}>
          <h2 className={styles.h2} id="properties">
            Properties
          </h2>
          {component.properties.map((prop, index) => (
            <div key={index}>
              <h3>{prop.name}</h3>
              <p className={styles.p}>{prop.description}</p>
              {prop.example ? <RenderCode code={prop.example} /> : ""}
            </div>
          ))}
        </section>
        <section className={styles.section}>
          <h2 id="references">References</h2>
          <ul className={styles.ul}>
            {component.references.map((ref, index) => (
              <li key={index} className={styles.li}>
                <a
                  className={styles.a}
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {ref.name} <FiExternalLink />
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <aside>
        <nav>
          <ul className={styles.nav}>
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
          </ul>
        </nav>
      </aside>
    </div>
  );
}

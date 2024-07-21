import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RenderCode } from "./RenderCode";
import { ComponentHomePage } from "../pages/ComponentHomePage";
import styles from "../styles/Component.module.css";

export function Component({ data }) {
  const { name } = useParams();
  const [component, setComponent] = useState(null);

  const copyToClipboard = ({ code }) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        alert("Code copied to clipboard!");
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  };

  useEffect(() => {
    if (data) {
      const foundComponent = data.find((comp) => comp.name === name);
      setComponent(foundComponent);
    }
  }, [name, data]);

  if (!component) return <ComponentHomePage />;

  return (
    <div className={styles.div}>
      <h1>{component.name}</h1>
      <p>{component.description}</p>
  
      <h2>Installation</h2>
     <RenderCode code={component.installation} />
      <h2>Usage</h2>
      <h3>Basic</h3>
      <RenderCode code={component.usage.basic.code} />

      <h3>Styles</h3>
      <RenderCode code={component.usage.styles.code} />

      <h2>Properties</h2>
      {component.properties.map((prop, index) => (
        <div key={index}>
          <h3>{prop.name}</h3>
          <p>{prop.description}</p>
          <RenderCode code={prop.example} />
        </div>
      ))}

      <h2>References</h2>
      <ul>
        {component.references.map((ref, index) => (
          <li key={index}>
            <a href={ref.url} target="_blank" rel="noopener noreferrer">
              {ref.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

import React from "react";
import { FaRegCopy } from "react-icons/fa6";
import { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atelierDuneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import styles from "../styles/RenderCode.module.css";

export function RenderCode({ code }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1000);
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  };
  return (
    <div className={styles.div}>
      <SyntaxHighlighter
        className={styles.code}
        language="javascript"
        style={atelierDuneDark}
      >
        {code}
      </SyntaxHighlighter>

      <button onClick={copyToClipboard} className={styles.button}>
        {copied && <span className="copy-message">Copied</span>}
        {copied ? "" : <FaRegCopy />}
      </button>
    </div>
  );
}
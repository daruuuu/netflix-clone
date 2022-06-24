import React from "react";
import styles from "./Row.module.css";

const Row = ({ title, children }) => {
  return (
    <div className={styles.row}>
      <h2>{title}</h2>
      <div className={styles.posters}>{children}</div>
    </div>
  );
};

export default Row;

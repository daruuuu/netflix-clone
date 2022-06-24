import React from "react";
import Input from "./Input";
import styles from "./Form.module.css";

const Form = (props) => {
  return (
    <div className={styles.holder}>
      <Input onClose={props.onClose} />
    </div>
  );
};

export default Form;

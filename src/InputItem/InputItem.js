import React from "react";
import styles from "./InputItem.module.css";

const InputItem = (props) => {
  return (
    <div className={styles.InputItem}>
      <input className={styles.InputItem__input} type="text"></input>{" "}
      <button className={styles.InputItem__add} onClick={props.click}>
        +
      </button>
    </div>
  );
};

export default InputItem;

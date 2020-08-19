import React from "react";
import styles from "./TodoItem.module.css";

const TodoItem = (props) => {
  return (
    <div className={styles.TodoItem}>
      <div
        className={
          props.complete ? styles.TodoItem__item_strike : styles.TodoItem__item
        }
      >
        {props.taskContent}
      </div>
    </div>
  );
};

export default TodoItem;

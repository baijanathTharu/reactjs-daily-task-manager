import React from "react";
import styles from "./OperateItem.module.css";

const OperateItem = (props) => {
  return (
    <div className={styles.OperateItem}>
      {props.complete ? (
        <span
          className={styles.OperateItem__delete}
          onClick={props.taskComplete}
          id="delete"
        >
          Delete
        </span>
      ) : (
        <span
          className={styles.OperateItem__done}
          onClick={props.taskComplete}
          id="done"
        >
          Done
        </span>
      )}
    </div>
  );
};

export default OperateItem;

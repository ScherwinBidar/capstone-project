import React from "react";

import styles from "./BoxBars.module.css";

export default function BoxBars(props) {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className={styles.boxBar}>
      <div className={styles.boxBar__inner}>
        <div
          className={styles.boxBar__fill}
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className={styles.boxBar__label}>{props.label}</div>
    </div>
  );
}

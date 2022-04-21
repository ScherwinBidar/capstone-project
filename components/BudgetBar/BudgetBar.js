import styles from "./BudgetBar.module.css";
import BudgetDate from "./BudgetDate";
import React, { useState } from "react";

export default function Budgetbar(props) {
  return (
    <div className={styles.wrapperDiv}>
      <button className={styles.basicBar}>
        <BudgetDate passDate={props.date} />
        <div className={styles.item}>{props.item}</div>
        <div className={styles.amount}>{props.price} Euro</div>
      </button>
    </div>
  );
}

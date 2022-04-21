import React from "react";
import styles from "./YearFilter.module.css";

export default function YearFilter(props) {
  function changeYearHandler(event) {
    props.onImportYear(event.target.value);
  }
  return (
    <div className={styles.button}>
      <select value={props.onDefaultYear} onChange={changeYearHandler}>
        <option value="2026">2026</option>
        <option value="2025">2025</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
      </select>
    </div>
  );
}

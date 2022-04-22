import FilterBar from "./FilterBar";
import YearFilter from "./YearFilter";
import VisualizeBar from "./VisualizeBar";
import styles from "./WrapBar.module.css";
import React, { useState } from "react";

export default function WrapBars(props) {
  const [theYear, setTheYear] = useState("2022");
  function importYearHandler(importedYear) {
    setTheYear(importedYear);
  }

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === theYear;
  });

  return (
    <div>
      <div className={styles.button}>
        <YearFilter onDefaultYear={theYear} onImportYear={importYearHandler} />
      </div>
      <VisualizeBar expenses={filteredExpenses} />
      <FilterBar items={filteredExpenses} />
    </div>
  );
}

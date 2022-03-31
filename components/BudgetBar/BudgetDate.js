import styles from "./BudgetDate.module.css";

export default function BudgetDate(pros) {
  const month = new Date("2022-02-05T00:00:00Z").toLocaleString("de-de", {
    month: "long",
  });
  const year = new Date("2022-02-05T00:00:00Z").getFullYear();
  const day = new Date("2022-02-05T00:00:00Z").toLocaleString("de-de", {
    day: "2-digit",
  });
  return (
    <div className={styles.date}>
      <div className={styles.month}>{month}</div>
      <div className={styles.year}>{year}</div>
      <div className={styles.day}>{day}</div>
    </div>
  );
}

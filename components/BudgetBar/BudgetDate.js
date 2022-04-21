import styles from "./BudgetDate.module.css";

export default function BudgetDate(props) {
  const month = props.passDate.toLocaleString("de-de", { month: "long" });
  const year = props.passDate.getFullYear();
  const day = props.passDate.toLocaleString("de-de", { day: "2-digit" });

  return (
    <div className={styles.date}>
      <div className={styles.month}>{month}</div>
      <div className={styles.year}>{year}</div>
      <div className={styles.day}>{day}</div>
    </div>
  );
}

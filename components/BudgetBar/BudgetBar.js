import styles from "./BudgetBar.module.css";

export default function Budgetbar() {
  return (
    <button className={styles.basicBar}>
      <div className={styles.date}>
        <div>Februar</div>
        <div>2022</div>
        <div>05</div>
      </div>
      <div className={styles.item}>Sony Playstation</div>
      <div className={styles.amount}>500 Euro</div>
    </button>
  );
}

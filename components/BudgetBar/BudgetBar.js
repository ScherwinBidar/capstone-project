import styles from "./BudgetBar.module.css";

export default function Budgetbar() {
  return (
    <div className={styles.wrapperDiv}>
      <button className={styles.basicBar}>
        <div className={styles.date}>
          <div>Februar</div>
          <div>2022</div>
          <div>05</div>
        </div>
        <div className={styles.item}>Sony Playstation</div>
        <div className={styles.amount}>500 Euro</div>
      </button>
      <button className={styles.basicBar}>
        <div className={styles.date}>
          <div>März</div>
          <div>2022</div>
          <div>08</div>
        </div>
        <div className={styles.item}>Mercedes AMG</div>
        <div className={styles.amount}>20.000 Euro</div>
      </button>
    </div>
  );
}

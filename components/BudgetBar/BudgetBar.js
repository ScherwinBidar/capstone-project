import styles from "./BudgetBar.module.css";
import BudgetDate from "./BudgetDate";

export default function Budgetbar() {
  return (
    <div className={styles.wrapperDiv}>
      <button className={styles.basicBar}>
        <BudgetDate />
        <div className={styles.item}>Sony Playstation</div>
        <div className={styles.amount}>500 Euro</div>
      </button>
    </div>
  );
}

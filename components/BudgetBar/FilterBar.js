import BudgetBar from "./BudgetBar";
import styles from "./FilterBar.module.css";

export default function FilterBar(props) {
  if (props.items.length === 0) {
    return <h2 className={styles.noExpenseText}>Keine Ausgaben</h2>;
  }

  return (
    <div>
      {props.items.map((expense) => (
        <BudgetBar
          key={expense.id}
          item={expense.item}
          price={expense.price}
          date={expense.date}
        />
      ))}
    </div>
  );
}

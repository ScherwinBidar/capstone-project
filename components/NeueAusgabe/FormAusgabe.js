import styles from "./FormAusgabe.module.css";

export default function FormAusgabe() {
  return (
    <form>
      <div className={styles.formWrapper}>
        <div className={styles.formStyle}>
          <label>Item</label>
          <input type="text" />
        </div>
        <div className={styles.formStyle}>
          <label>Preis</label>
          <input type="numer" min="0.01" step="0.01" />
        </div>
        <div className={styles.formStyle}>
          <label>Datum</label>
          <input type="date" min="2022-01-01" />
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <button className={styles.abbrechen}>Abbrechen</button>
        <button className={styles.bestätigen}>Bestätigen</button>
      </div>
    </form>
  );
}

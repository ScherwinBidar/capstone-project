import styles from "./NeueAusgabe.module.css";

export default function NeueAusgabe() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.banner}>
          <h1>Neue Ausgabe</h1>
        </div>
        <div className={styles.background}>
          <div className={styles.buttonWrapper1}>
            <button>Item</button>
            <button>Preis</button>
            <button>Datum</button>
          </div>
          <div className={styles.buttonWrapper2}>
            <button className={styles.abbrechen}>Abbrechen</button>
            <button className={styles.bestätigen}>Bestätigen</button>
          </div>
        </div>
      </div>
    </>
  );
}

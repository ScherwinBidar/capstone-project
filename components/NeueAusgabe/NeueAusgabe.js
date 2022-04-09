import styles from "./NeueAusgabe.module.css";
import FormAusgabe from "./FormAusgabe";

export default function NeueAusgabe() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.banner}>
          <h1>Neue Ausgabe</h1>
        </div>
        <FormAusgabe />
      </div>
    </>
  );
}

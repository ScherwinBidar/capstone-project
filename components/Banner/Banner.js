import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <button className={styles.neueAusgabe}>Neue Ausgabe</button>
      <button className={styles.signOut}>Sign Out</button>
      <button className={styles.neuesZiel}>Neues Ziel</button>
    </div>
  );
}

import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.logoWrapper}>
        <h1 className={styles.logo}>Budgetinator</h1>
      </div>
      <div className={styles.lowerContent}>
        <button className={styles.signOut}>
          <a href="api/auth/logout">Logout</a>
        </button>
      </div>
    </div>
  );
}

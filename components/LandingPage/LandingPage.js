import React from "react";
import styles from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <>
      <div className={styles.banner}>
        <h1 className={styles.logo}>Budgetinator</h1>
      </div>
      <div className={styles.lowerContent}>
        <button>
          <a href="api/auth/login" className={styles.white}>
            Login
          </a>
        </button>
        <div>
          <img src="/logo.png" width={300} height={300} />
        </div>
      </div>
    </>
  );
}

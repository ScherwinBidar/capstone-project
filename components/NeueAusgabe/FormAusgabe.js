import styles from "./FormAusgabe.module.css";
import React, { useState } from "react";

export default function FormAusgabe(props) {
  const [enteredItem, setItem] = useState("");
  const [enteredPrice, setPrice] = useState("");
  const [enteredDate, setDate] = useState("");
  const [submitButtonState, setSubmitButtonState] = useState(false);

  function itemHandler(event) {
    setItem(event.target.value);
  }
  function priceHandler(event) {
    setPrice(event.target.value);
  }
  function dateHandler(event) {
    setDate(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const userInput = {
      item: enteredItem,
      price: enteredPrice,
      date: new Date(enteredDate),
    };

    props.onAddUserInput(userInput);
    setItem("");
    setDate("");
    setPrice("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.formWrapper}>
        <div className={styles.formStyle}>
          <label>Item</label>
          <input type="text" value={enteredItem} onChange={itemHandler} />
        </div>
        <div className={styles.formStyle}>
          <label>Preis</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredPrice}
            onChange={priceHandler}
          />
        </div>
        <div className={styles.formStyle}>
          <label>Datum</label>
          <input
            type="date"
            min="2022-01-01"
            value={enteredDate}
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <button
          type="button"
          onClick={props.onCancel}
          className={styles.abbrechen}
        >
          Abbrechen
        </button>
        <button
          type="submit"
          // onClick={props.onDataSubmit}
          className={styles.bestätigen}
        >
          Bestätigen
        </button>
      </div>
    </form>
  );
}

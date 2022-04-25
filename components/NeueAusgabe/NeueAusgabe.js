import styles from "./NeueAusgabe.module.css";
import FormAusgabe from "./FormAusgabe";
import React, { useState } from "react";

export default function NeueAusgabe(props) {
  const [isEditing, setIsediting] = useState(false);

  function addUserInputHandler(importUserInput) {
    const userInput = {
      ...importUserInput,
      id: Math.random().toString(),
    };

    props.onAddUserInput(userInput);
  }

  function startEditingHandler() {
    setIsediting(true);
  }

  function stopEditingHandler() {
    setIsediting(false);
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.buttonWrapper}>
          {!isEditing && (
            <button onClick={startEditingHandler}>Ausgabe eingeben</button>
          )}
        </div>
        {isEditing && (
          <FormAusgabe
            onAddUserInput={addUserInputHandler}
            onCancel={stopEditingHandler}
            // onDataSubmit={stopEditingHandler}
          />
        )}
      </div>
    </>
  );
}

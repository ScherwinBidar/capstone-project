import styles from "./NeueAusgabe.module.css";
import FormAusgabe from "./FormAusgabe";

export default function NeueAusgabe(props) {
  function addUserInputHandler(importUserInput) {
    const userInput = {
      ...importUserInput,
      id: Math.random().toString(),
    };

    props.onAddUserInput(userInput);
  }
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <h1>Ausgabe eingeben</h1>
        </div>
        <FormAusgabe onAddUserInput={addUserInputHandler} />
      </div>
    </>
  );
}

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import Banner from "../components/Banner/Banner";
import WrapBars from "../components/BudgetBar/WrapBars";
import NeueAusgabe from "../components/NeueAusgabe/NeueAusgabe";

const exampleArray = [
  {
    id: "e0",
    item: "Hier stehen bald ihre Ausgaben",
    price: "0",
    date: new Date(2022, 2, 5),
  },
];

export default function Home() {
  const [userData, setUserData] = useState(exampleArray);

  function importUserInputHandler(userInput) {
    setUserData((prevItems) => {
      return [userInput, ...prevItems];
    });
  }

  return (
    <>
      <Banner />
      <NeueAusgabe onAddUserInput={importUserInputHandler} />
      <WrapBars expenses={userData} />
    </>
  );
}

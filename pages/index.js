import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import Banner from "../components/Banner/Banner";
import WrapBars from "../components/BudgetBar/WrapBars";
import NeueAusgabe from "../components/NeueAusgabe/NeueAusgabe";
import LandingPage from "../components/LandingPage/LandingPage";

const exampleArray = [
  {
    id: "e0",
    item: "Hier stehen bald ihre Ausgaben",
    price: "0",
    date: new Date(2022, 1, 0),
  },
];

export default function Home() {
  const { user, error, isLoading } = useUser();

  console.log(user);

  const [userData, setUserData] = useState(exampleArray);

  function importUserInputHandler(userInput) {
    setUserData((prevItems) => {
      return [userInput, ...prevItems];
    });
  }

  if (user) {
    return (
      <>
        <Banner />
        <NeueAusgabe onAddUserInput={importUserInputHandler} />
        <WrapBars expenses={userData} />
      </>
    );
  }

  return (
    <>
      <LandingPage />
    </>
  );
}

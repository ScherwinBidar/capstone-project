import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Budgetbar from "../components/BudgetBar/BudgetBar";
import Banner from "../components/Banner/Banner";

export default function Home() {
  return (
    <>
      <Banner />
      <Budgetbar />
      <Budgetbar />
    </>
  );
}

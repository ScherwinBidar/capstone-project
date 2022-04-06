import Head from "next/head";
import Image from "next/image";
import Budgetbar from "../components/BudgetBar/BudgetBar";
import Banner from "../components/Banner/Banner";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Banner />
      <Budgetbar />
      <Budgetbar />
    </>
  );
}

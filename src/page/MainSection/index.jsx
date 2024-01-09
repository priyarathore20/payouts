import React from "react";
import { Main } from "./styles";
import Header from "../../components/Header";
import OverviewSection from "../../components/Overview";
import Transactions from "../../components/Transactions";
const MainSection = () => {
  return (
    <Main.Container>
      <Header />
      <OverviewSection />
      <Transactions />
    </Main.Container>
  );
};

export default MainSection;

import React from 'react';
import { Main } from './styles';
import Header from '../../components/Header';
import OverviewSection from '../../components/Overview';
import Transactions from '../../components/Transactions';
const MainSection = () => {
  return (
    <Main.Container>
      <Header />
      <Main.Content>
        <OverviewSection />
        <Transactions />
      </Main.Content>
    </Main.Container>
  );
};

export default MainSection;

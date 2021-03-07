import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Commercial from '../components/Commercial';
import IndicatorsFutureHome from '../components/IndicatorsFutureHome';

const IndexPage: React.FC = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Commercial />
      <IndicatorsFutureHome />
    </div>
  );
};

export default IndexPage;

import React from 'react';
import { useTranslation } from 'react-i18next';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Commercial from '../components/Commercial';
import IndicatorsFutureHome from '../components/IndicatorsFutureHome';

const IndexPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <CssBaseline />
      <div style={{ width: '100%' }}>
        <Header />
        <Banner />
        <Commercial />
        <IndicatorsFutureHome />
      </div>
    </>
  );
};

export default IndexPage;

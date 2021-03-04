import React from 'react';
import { useTranslation } from 'react-i18next';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Commercial from '../components/Commercial';

const IndexPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Typography
          component="div"
          style={{ backgroundColor: '#ffffff', height: '400vh' }}
        >
          <Header />
          <Banner />
          <Commercial />
        </Typography>
      </Container>
    </>
  );
};

export default IndexPage;

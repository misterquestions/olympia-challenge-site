import React from 'react';
import { useTranslation } from 'react-i18next';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Header from '../components/Header';

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: 'black',
    height: 200,
  },
}));

const IndexPage: React.FC = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Typography
          component="div"
          style={{ backgroundColor: '#ffffff', height: '400vh' }}
        >
          <Header />
          <div>
            <Paper className={classes.paper}>
              <Grid item>
                <Button href="/pay-form" variant="contained">
                  Comenza Ahora
                </Button>
              </Grid>
            </Paper>
          </div>
        </Typography>
      </Container>
    </>
  );
};

export default IndexPage;

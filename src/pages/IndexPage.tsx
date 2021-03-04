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
import homeScanImage from '../assets/statics/Casa_escaneada.png';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    backgroundColor: 'black',
    padding: theme.spacing(2),
    margin: 'auto',
  },
  textColor: {
    color: 'white',
  },
  image: {
    width: '70%',
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
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
          <div className={classes.root}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs className={classes.textColor}>
                      <Typography gutterBottom variant="h3">
                        Genera tu Home iD
                      </Typography>
                      <Typography variant="subtitle1" gutterBottom>
                        Solo 90 segundos para encontrar los productos
                      </Typography>
                      <Typography variant="subtitle2" gutterBottom>
                        mas afines a tu estilo de vida
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Button href="/pay-form" variant="contained">
                        Comprá Ahora
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <div className={classes.image}>
                    <img
                      className={classes.img}
                      alt="complex"
                      src={homeScanImage}
                    />
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </Typography>
      </Container>
    </>
  );
};

export default IndexPage;

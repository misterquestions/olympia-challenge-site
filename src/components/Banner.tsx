import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import homeScanImage from '../assets/images/Casa_escaneada.png';

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

const Banner: React.FC = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs className={classes.textColor}>
                <Typography gutterBottom variant="h3">
                  {t('banner.title')}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  {t('banner.subtitle1')}
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  {t('banner.subtitle2')}
                </Typography>
              </Grid>
              <Grid item>
                <Button href="/pay-form" variant="contained">
                  {t('banner.button')}
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <div className={classes.image}>
              <img className={classes.img} alt="complex" src={homeScanImage} />
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Banner;

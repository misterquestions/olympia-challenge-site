import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import headerImage from '../assets/images/Lavasecadora_Header.png';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  space: {
    marginBottom: 20,
    justifyContent: 'space-around',
  },
  textBold: {
    fontWeight: 'bold',
  },
  oval: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#D8D8D8',
    borderRadius: '100%',
    width: 300,
    height: 300,
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

const Header: React.FC = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper>
        <Grid container direction="row" justify="space-around">
          <Grid item xs={6} container>
            <Grid item container>
              <Grid item container className={classes.space}>
                <Grid container direction="column" justify="center">
                  <Typography
                    align="center"
                    gutterBottom
                    variant="h3"
                    className={classes.textBold}
                  >
                    {t('header.title')}
                  </Typography>
                  <Typography
                    align="center"
                    variant="subtitle1"
                    gutterBottom
                    className={classes.textBold}
                  >
                    {t('header.subtitle')}
                  </Typography>
                  <Typography
                    align="center"
                    variant="subtitle1"
                    gutterBottom
                    className={classes.textBold}
                  >
                    {t('header.subtitleNext')}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    href="/pay-form"
                    variant="contained"
                    style={{ backgroundColor: 'black', color: 'white' }}
                  >
                    {t('header.buyBtn')}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container justify="flex-end" className={classes.oval}>
            <div className={classes.image}>
              <img className={classes.img} alt="complex" src={headerImage} />
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Header;

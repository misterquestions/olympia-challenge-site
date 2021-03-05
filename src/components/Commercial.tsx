import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.png';
import image3 from '../assets/images/image3.png';
import image4 from '../assets/images/image4.png';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
  },
  image: {
    width: '100%',
  },
  bold: {
    fontWeight: 'bold'
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const Commercial: React.FC = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={1}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={1}>
          <Grid item>
            <Paper>
              <Grid item>
                <div className={classes.image}>
                  <img className={classes.img} alt="complex" src={image1} />
                </div>
              </Grid>
              <Typography
                gutterBottom
                variant="h6"
                className={classes.bold}
              >
                {t('commercial.title1')}
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                className={classes.bold}
              >
                {t('commercial.subtitle1')}
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                className={classes.bold}
              >
                {t('commercial.subtitle1a')}
              </Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper>
              <Grid item>
                <div className={classes.image}>
                  <img className={classes.img} alt="complex" src={image2} />
                </div>
              </Grid>
              <Typography
                gutterBottom
                variant="h6"
                className={classes.bold}
              >
                {t('commercial.title2')}
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                className={classes.bold}
              >
                {t('commercial.subtitle2')}
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                className={classes.bold}
              >
                {t('commercial.subtitle2a')}
              </Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper>
              <Grid item>
                <div className={classes.image}>
                  <img className={classes.img} alt="complex" src={image3} />
                </div>
              </Grid>
              <Typography
                gutterBottom
                variant="h6"
                className={classes.bold}
              >
                {t('commercial.title3')}
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                className={classes.bold}
              >
                {t('commercial.subtitle3')}
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                className={classes.bold}
              >
                {t('commercial.subtitle3a')}
              </Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper>
              <Grid item>
                <div className={classes.image}>
                  <img className={classes.img} alt="complex" src={image4} />
                </div>
                <Typography
                  gutterBottom
                  variant="h6"
                  className={classes.bold}
                >
                  {t('commercial.title4')}
                </Typography>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  className={classes.bold}
                >
                  {t('commercial.subtitle4')}
                </Typography>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  className={classes.bold}
                >
                  {t('commercial.subtitle4a')}
                </Typography>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Commercial;

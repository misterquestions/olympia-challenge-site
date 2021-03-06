import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Twitter, Facebook, Instagram, WhatsApp } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: 'black',
    padding: theme.spacing(2),
    margin: 'auto',
    height: 300,
  },
  textColor: {
    color: 'white',
  },
  inputField: {
    border: '1px solid white',
    borderRadius: 25,
    height: 30,
    margin: 30,
  },
  padd: {
    margin: 30,
  },
}));

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.paper}>
        <Grid container justify="space-around" className={classes.textColor}>
          <Grid item lg={2}>
            <Grid
              container
              direction="column"
              justify="space-around"
              className={classes.padd}
            >
              <Typography>{t('footer.title')}</Typography>
              <TextField
                autoComplete="string"
                className={classes.inputField}
                variant="outlined"
                color="secondary"
                size="small"
              />
              <Button
                className={classes.padd}
                href="/"
                variant="contained"
                style={{ fontWeight: 'bold' }}
              >
                {t('footer.btn')}
              </Button>
            </Grid>
          </Grid>
          <Grid item lg={2}>
            <Grid container direction="column" justify="space-between">
              <Typography variant="h6">{t('footer.subtitle1')}</Typography>
              <Typography variant="body2">{t('common.lav')}</Typography>
              <Typography variant="body2">{t('common.sec')}</Typography>
              <Typography variant="body2">{t('common.aier')}</Typography>
              <Typography variant="body2">{t('common.est')}</Typography>
              <Typography variant="body2">{t('common.inst')}</Typography>
              <Typography variant="body2">{t('common.asp')}</Typography>
              <Typography variant="body2">{t('common.other')}</Typography>
            </Grid>
          </Grid>
          <Grid item lg={2}>
            <Grid container direction="column" justify="space-between">
              <Typography variant="h6">{t('footer.subtitle2')}</Typography>
              <Typography variant="body2">{t('footer.find')}</Typography>
              <Typography variant="body2">{t('footer.questions')}</Typography>
              <Typography variant="body2">{t('footer.tellUs')}</Typography>
              <Typography variant="body2">{t('footer.garanty')}</Typography>
              <Typography variant="body2">{t('footer.fact')}</Typography>
            </Grid>
          </Grid>
          <Grid item lg={2}>
            <Grid container direction="column" justify="space-between">
              <Typography variant="h6">{t('footer.subtitle3')}</Typography>
              <Typography variant="body2">{t('footer.about')}</Typography>
              <Typography variant="body2">{t('footer.prens')}</Typography>
              <Typography variant="body2">{t('footer.sus')}</Typography>
            </Grid>
          </Grid>
          <Grid item lg={2}>
            <Grid container direction="column" justify="space-around">
              <Typography variant="h6">{t('footer.subtitle4')}</Typography>
              <Grid container direction="row">
                <Instagram />
                <Facebook />
                <Twitter />
                <WhatsApp />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Footer;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 'inerhit',
  },
  paper: {
    backgroundColor: 'black',
    padding: theme.spacing(2),
    margin: 'auto',
  },
  textColor: {
    color: 'white',
  },
  inputField: {
    border: '1px solid white',
    borderRadius: 25,
  },
}));

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container className={classes.textColor}>
          <Grid item container lg={2} direction="column">
            <Typography>{t('footer.title')}</Typography>
            <TextField
              autoComplete="string"
              className={classes.inputField}
              label="Email"
              variant="filled"
              color="secondary"
              size="small"
            />
          </Grid>
          <Grid item container lg={2} direction="column">
            <Typography>{t('footer.subtitle1')}</Typography>
          </Grid>
          <Grid item container lg={2} direction="column">
            <Typography>{t('footer.subtitle2')}</Typography>
          </Grid>
          <Grid item container lg={2} direction="column">
            <Typography>{t('footer.subtitle3')}</Typography>
          </Grid>
          <Grid item container lg={2} direction="column">
            <Typography>{t('footer.subtitle4')}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Footer;

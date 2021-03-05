import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#D8D8D8',
    marginBottom: 20,
    marginTop: 20,
    width: 300,
  },
  paperWidth: {
    margin: 20,
  },
}));

const IndicatorsFutureHome: React.FC = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.paperWidth}>
        <Typography gutterBottom variant="h3">
          {t('indicatorsFH.title')}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {t('indicatorsFH.subtitle')}
        </Typography>
        <Grid container justify="space-around" spacing={2}>
          <Grid item className={classes.root} xl={6}>
            <Typography gutterBottom variant="h6" align="center">
              {t('indicatorsFH.titleCard')}
            </Typography>
            <Typography variant="subtitle2" gutterBottom align="center">
              {t('indicatorsFH.subtitleCard')}
            </Typography>
            <Typography variant="subtitle2" gutterBottom align="center">
              {t('indicatorsFH.subtitleCardNext')}
            </Typography>
            <Button href="/item-detail" variant="contained">
              {t('indicatorsFH.common')}
            </Button>
          </Grid>
          <Grid item className={classes.root} xl={6}>
            <Typography gutterBottom variant="h6" align="center">
              {t('indicatorsFH.titleCard1')}
            </Typography>
            <Typography variant="subtitle2" gutterBottom align="center">
              {t('indicatorsFH.subtitleCard1')}
            </Typography>
            <Typography variant="subtitle2" gutterBottom align="center">
              {t('indicatorsFH.subtitleCardNext1')}
            </Typography>
            <Button href="/item-detail" variant="contained">
              {t('indicatorsFH.common')}
            </Button>
          </Grid>
          <Grid item className={classes.root} xl={6}>
            <Typography gutterBottom variant="h6" align="center">
              {t('indicatorsFH.titleCard2')}
            </Typography>
            <Typography variant="subtitle2" gutterBottom align="center">
              {t('indicatorsFH.subtitleCard2')}
            </Typography>
            <Typography variant="subtitle2" gutterBottom align="center">
              {t('indicatorsFH.subtitleCardNext2')}
            </Typography>
            <Button href="/item-detail" variant="contained">
              {t('indicatorsFH.common')}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default IndicatorsFutureHome;

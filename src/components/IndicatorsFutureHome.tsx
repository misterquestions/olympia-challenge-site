import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 360,
    maxHeight: 360,
    backgroundColor: '#D8D8D8',
  },
  paperWidth: {
    marginTop: 20,
    marginBottom: 20,
    paddingBottom: 20,
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
        <Grid
          container
          justify="space-around"
          className={classes.paperWidth}
          spacing={2}
        >
          <Grid item direction="column" className={classes.root} xs={4}>
            <Typography gutterBottom variant="h6">
              {t('indicatorsFH.titleCard')}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              {t('indicatorsFH.subtitleCard')}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              {t('indicatorsFH.subtitleCardNext')}
            </Typography>
            <Button href="/item-detail" variant="contained">
              {t('indicatorsFH.common')}
            </Button>
          </Grid>
          <Grid item direction="column" className={classes.root} xs={4}>
            <Typography gutterBottom variant="h6">
              {t('indicatorsFH.titleCard1')}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              {t('indicatorFH.subtitleCard1')}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              {t('indicatorsFH.subtitleCardNext1')}
            </Typography>
            <Button href="/item-detail" variant="contained">
              {t('indicatorsFH.common')}
            </Button>
          </Grid>
          <Grid item direction="column" className={classes.root} xs={4}>
            <Typography gutterBottom variant="h6">
              {t('indicatorsFH.titleCard2')}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              {t('indicatorsFH.subtitleCard2')}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
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

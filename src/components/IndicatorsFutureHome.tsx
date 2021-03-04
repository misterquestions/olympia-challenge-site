import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
    flexGrow: 1,
    marginTop: 20,
    marginBottom: 20,
    paddingBottom: 20,
  },
}));

const IndicatorsFutureHome: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.paperWidth}>
        <Typography gutterBottom variant="h3">
          Indicadores Future Home
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Elige el producto indicado para tí en minutos
        </Typography>
        <Grid
          container
          justify="space-around"
          className={classes.paperWidth}
          spacing={2}
        >
          <Grid item direction="column" className={classes.root}>
            <Typography gutterBottom variant="h6">
              Tiempo de Instalación
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Indica el esfuerzo requerido
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              para instalar tu producto
            </Typography>
            <Button href="/item-detail" variant="contained">
              Leer más
            </Button>
          </Grid>
          <Grid item direction="column" className={classes.root}>
            <Typography gutterBottom variant="h6">
              Tieme Server
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Indice de que tan autonomo
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              es el producto
            </Typography>
            <Button href="/item-detail" variant="contained">
              Leer más
            </Button>
          </Grid>
          <Grid item direction="column" className={classes.root}>
            <Typography gutterBottom variant="h6">
              Eficiencia Energética
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Indentifica los productos
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              más eficientes energéticamente
            </Typography>
            <Button href="/item-detail" variant="contained">
              Leer más
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default IndicatorsFutureHome;

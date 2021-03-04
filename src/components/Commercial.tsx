import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const Commercial: React.FC = () => {
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
              <Typography gutterBottom variant="h6">
                Optimiza el tiempo de lavado
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Encuentra la lavadora ideal
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                para tu espacio y estilo de vida
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
              <Typography gutterBottom variant="h6">
                Encuentra la paz en la cocina
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Identifica los electrodomésticos que te
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                llevena tus metas de salud y bienestar
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
              <Typography gutterBottom variant="h6">
                La limpieza casi como magia
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Ólvidate de la limpieza,
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                y gana tiempo para tí
              </Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper>
              <Grid item>
                <div className={classes.image}>
                  <img className={classes.img} alt="complex" src={image4} />
                </div>
                <Typography gutterBottom variant="h6">
                  La temperatura ideal!
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Que cada cuarto de tu casa
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  sea el más comfortable
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

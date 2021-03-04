import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import headerImage from '../assets/statics/Lavasecadora_Header.png';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    padding: theme.spacing(2),
  },
  space: {
    marginLeft: 30,
  },
  oval: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 50,
    backgroundColor: '#D8D8D8',
    borderRadius: '100%',
    width: 200,
    height: 200,
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
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container direction="row" className={classes.space}>
          <Grid item sm container>
            <Grid
              item
              xs
              container
              direction="row"
              spacing={2}
              alignContent="center"
            >
              <Grid item xs>
                <Typography gutterBottom variant="h3">
                  Optimiza tus días
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  El poder de elegir Electrodomésticos
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Sustentables, eficientes y a precios accesibles
                </Typography>
                <Grid item>
                  <Button href="/pay-form" variant="contained">
                    Comprá Ahora
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.oval}>
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

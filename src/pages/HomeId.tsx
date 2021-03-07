import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import homeScanImage from '../assets/images/Casa_escaneada.png';

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'center',
    height: 300,
  },
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

const getSteps = () => {
  return [
    '¿Cual es tu objetivo?',
    'Selecciona el producto',
    '¿Es para casa o negocio?',
    '¿Cuántas personas viven en tu hogar?',
    '¿Qué estilo de lavadora prefieres?',
    '¿Qué espacio tienes para tu lavadora?',
    '¿Qué tipo de instalación tienes en tu hogar?',
  ];
};
function getStepContent(step: number) {
  switch (step) {
    case 0:
      return (
        <Paper>
          <Button variant="contained">Una limpieza más veloz</Button>
          <Button variant="contained">Preparar comida eficientemente</Button>
          <Button variant="contained">Tener ropa siempre limpia y lista</Button>
          <Button variant="contained">La mejor temperatura</Button>
          <Button variant="contained">Mi spa en casa</Button>
        </Paper>
      );
    case 1:
      return (
        <Paper>
          <Button variant="contained">Lavadora</Button>
          <Button variant="contained">Planchas</Button>
          <Button variant="contained">Lavasecadora</Button>
          <Button variant="contained">Mini lavadora</Button>
        </Paper>
      );
    case 2:
      return (
        <Paper>
          <Button variant="contained">Casa</Button>
          <Button variant="contained">Negocio</Button>
        </Paper>
      );
    case 3:
      return (
        <Paper>
          <Button variant="contained">1</Button>
          <Button variant="contained">2</Button>
          <Button variant="contained">3</Button>
          <Button variant="contained">4</Button>
          <Button variant="contained">5+</Button>
        </Paper>
      );
    case 4:
      return (
        <Paper>
          <Button variant="contained">Puerta frontal</Button>
          <Button variant="contained">Puerta superior</Button>
        </Paper>
      );
    case 5:
      return (
        <Paper>
          <TextField variant="outlined" color="secondary" />
        </Paper>
      );
    case 6:
      return (
        <Paper>
          <Button variant="contained">solo elécrtica</Button>
          <Button variant="contained">eléctrica y de gas</Button>
        </Paper>
      );
    default:
      return 'Unknown step';
  }
}
const HomeId: React.FC = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const steps = getSteps();

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Paper>
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
              </Grid>
            </Grid>
            <Grid item>
              <div className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src={homeScanImage}
                />
              </div>
            </Grid>
          </Grid>
        </Paper>
      </div>
      <div className={classes.container}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: { optional?: React.ReactNode } = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset} className={classes.button}>
                Reset
              </Button>
            </div>
          ) : (
            <div>
              <Typography>{getStepContent(activeStep)}</Typography>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.button}
                >
                  Back
                </Button>
                {isStepOptional(activeStep) && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSkip}
                    className={classes.button}
                  >
                    Skip
                  </Button>
                )}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Paper>
  );
};

export default HomeId;

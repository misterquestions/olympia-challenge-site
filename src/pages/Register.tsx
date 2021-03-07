import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import Banner from '../components/Banner';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignContent: 'center',
  },
  decorate: {
    margin: 30,
    padding: 30,
  },
}));

const Register: React.FC = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Paper>
      <Banner />
      <Card>
        <Grid container lg={12} justify="center">
          <Grid container justify="center" className={classes.decorate}>
            <Grid container className={classes.container}>
              <Grid item>
                <Grid container direction="column">
                  <TextField
                    autoComplete="on"
                    label="First Name"
                    variant="outlined"
                    color="secondary"
                    size="small"
                    onChange={handleChange}
                  />
                  <TextField
                    autoComplete="on"
                    label="Last Name"
                    variant="outlined"
                    color="secondary"
                    size="small"
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <Grid item>
                <Grid container direction="column">
                  <TextField
                    autoComplete="on"
                    label="Email"
                    variant="outlined"
                    color="secondary"
                    size="small"
                    onChange={handleChange}
                  />
                  <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                    size="small"
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Button
              href="/pay-form"
              variant="contained"
              style={{ fontWeight: 'bold' }}
            >
              {t('register.btn')}
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Paper>
  );
};

export default Register;

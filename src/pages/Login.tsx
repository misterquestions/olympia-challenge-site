import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { Twitter, Facebook } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Banner from '../components/Banner';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignContent: 'center',
  },
  card: {
    backgroundColor: 'black',
    color: 'white',
    padding: 10,
  },
}));

const Login: React.FC = () => {
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
        <Grid container xl={12} justify="center">
          <Grid container xl={12} alignContent="center">
            <Grid item xs={6}>
              <Typography align="center">
                <div className="row">
                  <div className="input-field col s6">
                    <TextField
                      autoComplete="on"
                      label="Email"
                      variant="outlined"
                      color="secondary"
                      size="small"
                    />
                  </div>
                  <div className="input-field col s6">
                    <TextField
                      id="outlined-password-input"
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                      variant="outlined"
                    />
                  </div>
                </div>
                <Button
                  href="/pay-form"
                  variant="contained"
                  style={{ fontWeight: 'bold' }}
                >
                  {t('login.title')}
                </Button>
              </Typography>
              <Typography align="center">
                <Grid justify="center" direction="row">
                  <Checkbox
                    defaultChecked
                    color="primary"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                    onChange={handleChange}
                  />
                  <Typography>{t('login.rememberMe')}</Typography>
                  <a href="/">{t('login.subtitle1')}</a>
                </Grid>
              </Typography>
            </Grid>
            <Grid item xs={6} className={classes.container}>
              <Typography align="center">
                <Grid container direction="row" justify="center">
                  <Twitter />
                  <Typography>{t('login.subtitle2')}</Typography>
                </Grid>
                <Grid container direction="row" justify="center">
                  <Facebook />
                  <Typography>{t('login.subtitle3')}</Typography>
                </Grid>
              </Typography>
              <Typography align="center">
                <Typography align="center">{t('login.btnTitle')}</Typography>
                <Button
                  href="/pay-form"
                  variant="contained"
                  style={{ fontWeight: 'bold' }}
                >
                  {t('login.btn')}
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Paper>
  );
};

export default Login;

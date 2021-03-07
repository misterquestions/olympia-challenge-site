import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useStripe } from '@stripe/react-stripe-js';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Mail from '@material-ui/icons/Mail';
import TextField from '@material-ui/core/TextField';
import MyCardElement from './MyCardElement';

const useStyles = makeStyles(() => ({
  FormGroup: {
    borderStyle: 'none',
    willChange: 'opacity, transform',
    borderRadius: 4,
  },
  FormRow: {
    display: 'flex',
    alignItems: 'center',
    margiLeft: '15px',
  },
}));

const MyCheckoutForm: React.FC = () => {
  const classes = useStyles();
  const stripe = useStripe();
  const handleSubmit = async (event: { preventDefault: () => void }) => {
    // Block native form submission.
    event.preventDefault();
  };
  return (
    <form className={classes.FormGroup} onSubmit={handleSubmit}>
      <Grid
        container
        direction="row"
        className={classes.FormRow}
        spacing={8}
        justify="space-between"
      >
        <Grid item>
          <TextField
            id="Account field"
            label="Nombre del titular*"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            id="Email field"
            label="Email*"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Mail />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <MyCardElement />
        <Grid item>
          <Button
            type="submit"
            variant="contained"
            disabled={!stripe}
            style={{
              backgroundColor: 'black',
              color: 'white',
              marginBottom: 10,
            }}
          >
            Pay
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default MyCheckoutForm;

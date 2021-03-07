import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useStripe, useElements } from '@stripe/react-stripe-js';
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
  const elements = useElements();
  const stripe = useStripe();
  const handleSubmit = async (event: { preventDefault: () => void }) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement: any = elements.getElement(MyCardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }
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

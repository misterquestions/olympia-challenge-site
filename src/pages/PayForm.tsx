import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import MyCheckoutForm from '../components/MyCheckoutForm';

const stripePromise = loadStripe('pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG');

const PayForm: React.FC = () => {
  return (
    <Grid
      container
      justify="center"
      style={{ height: 400 }}
      alignContent="center"
      alignItems="center"
    >
      <Grid item lg={6}>
        <Elements stripe={stripePromise}>
          <MyCheckoutForm />
        </Elements>
      </Grid>
    </Grid>
  );
};

export default PayForm;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardElement } from '@stripe/react-stripe-js';

const useStyles = makeStyles(() => ({
  StripeElement: {
    width: '90%',
    marginLeft: 30,
    padding: '11px 15px 11px 0',
  },
}));

const MyCardElement: React.FC = () => {
  const classes = useStyles();
  return (
    <CardElement
      className={classes.StripeElement}
      options={{
        style: {
          base: {
            fontSize: '16px',
            color: '#424770',
            '::placeholder': {
              color: '#aab7c4',
            },
          },
          invalid: {
            color: '#9e2146',
          },
        },
      }}
    />
  );
};

export default MyCardElement;

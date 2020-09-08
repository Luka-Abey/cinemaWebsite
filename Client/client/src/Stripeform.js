import React from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (!error) {
      console.log(paymentMethod);
      const { id } = paymentMethod;

      try {
        const {data} = await axios.post('/api/charge/', { id, amount: 3899 });
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.warn(error);
      return ({
          message: error.message
      })
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: "300px", margin: "0 auto" }}
    >
      <CardElement />
      <button role="link" type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

const stripePromise = loadStripe(
  "pk_test_51HNaldF8DGptuqu5JisJ7OAYj3wPAJWUMINx5xgLcSWS081P1pmdN3YyPIAsKTvbgmSDWyXH9VBdQZK52iBIWH8O00xlQivOn0"
);

const Stripeform = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripeform;

const express = require("express");
const cors = require("cors");
const app = express();
const router = express.Router();

const stripe = require("stripe")(
  "sk_test_51HNaldF8DGptuqu5L7hwqu7BvGCgQehCG35XLiElTdWw0Aj6tKSmsAKK4vXjiTEPTslHOUmaiIEZ1PHHXSyTi2AP00GKSOi6x3"
);

// routes
router.get("/create-checkout-session", async (req, res) => {
  res.send("does it work?");
});
router.post("/create-checkout-session/:price", async (req, res) => {
  const { items } = req.body;
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: req.params.price
    currency: "gbp"
  });
  res.send({
    clientSecret: paymentIntent.client_secret
  });
});

module.exports = router;
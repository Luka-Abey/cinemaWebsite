const express = require("express");
const path = require('path');
const cors = require("cors");
const app = express();
// const uuid = require("uuid/v4");

const stripe = require("stripe")(
  "sk_test_51HNaldF8DGptuqu5L7hwqu7BvGCgQehCG35XLiElTdWw0Aj6tKSmsAKK4vXjiTEPTslHOUmaiIEZ1PHHXSyTi2AP00GKSOi6x3"
);

//middleware
app.use(express.json());
app.use(cors());


// routes
app.get("/create-checkout-session", (req, res) => {
  res.send("does it work?");
});
app.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price: 1000,
        quantity: quantity
      },
    ],
    mode: "payment",
    success_url: "https://example.com/success",
    cancel_url: "https://example.com/cancel",
  });

  res.json({ id: session.id });
});

module.exports = app;

// app.listen(4242, () => console.log(`Listening on port ${4242}!`));


// export default async (req, res) => {
//   const { id, amount } = req.body;

//   try {
//     const payment = await stripe.paymentIntents.create({
//       amount,
//       currency: "GBP",
//       description: "testing stripe",
//       payment_method: id,
//       confirm: true,
//     });
//     console.log(payment);

//     return res.status(200).json({
//       confirm: "testing",
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(400).json({
//       message: error.message,
//     });
//   }
// };

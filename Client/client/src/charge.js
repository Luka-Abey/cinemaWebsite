import Stripe from "stripe";

const stripe = new Stripe(
  "sk_test_51HNaldF8DGptuqu5L7hwqu7BvGCgQehCG35XLiElTdWw0Aj6tKSmsAKK4vXjiTEPTslHOUmaiIEZ1PHHXSyTi2AP00GKSOi6x3"
);

export default async (req, res) => {
    const { id, amount } = req.body;

try {
    const payment = await stripe.paymentIntents.create({
        amount,
        currency: "GBP",
        description: "testing stripe",
        payment_method: id,
        confirm: true
    });
    console.log(payment);

    return res.status(200).json({
        confirm: "testing"
    });
}catch (error){
    console.log(error);
    return res.status(400).json({
        message: error.message
    })
};
}
const express = require('express');
const stripe = require('stripe')(process.env.SECRET_KEY); // secret test key in .env

const router = express.Router();

const standardPlan = 500;

router.post('/charge', async (req, res) => {
  const user = req.body;
  if (!user) {
    return res.send('User not found.');
  }
  try {
    const customer = await stripe.customers.create({
      email: user.token.email,
      source: user.token.id,
      // this selects a plan based on the user preference which is passed as subType
      plan:
        user.subType === standardPlan
          ? process.env.PLAN_ID_ONE
          : process.env.PLAN_ID_TWO
    });
    console.log("CUSTOMER", customer)
    res.status(201).send(customer);
  } catch (error) {
    next(err);
  }
});

module.exports = router;

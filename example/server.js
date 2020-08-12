/* eslint-disable */

require('dotenv').config();

const mp = require('mercadopago');
const Express = require('express');
const bodyParser = require('body-parser');

// MP initialization

mp.configure({
  sandbox: true,
  access_token: process.env.MP_ACCESS_TOKEN,
});

// Endpoints setup

const router = new Express.Router();

router.post('/orders', async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
});

router.post('/customers', async (req, res, next) => {
  try {
    const customer = await mp.customers.create({ email: req.body.email });

    res.status(200);
    res.json(customer);
  } catch (err) {
    next(err);
  }
});

router.post('/payments', async (req, res, next) => {
  try {
    const payment = await mp.payment.save({
      token: req.body.token,
      transaction_amount: 176,
      issuer_id: req.body.issuer_id,
      installments: parseInt(req.body.installments),
      description: 'Ergonomic Cotton Chair',
      payment_method_id: req.body.payment_method_id,
      payer: {
        email: 'test@test.com',
      },
    });

    res.status(200);
    res.json(payment);
  } catch (err) {
    next(err);
  }
});

// Server setup

const app = Express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', router);

app.listen(3500, () => console.info('Up and Running'));

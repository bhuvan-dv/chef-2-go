// server.js
import express from 'express';
import initialize from './app.js';
import stripePackage from 'stripe';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(cors()); // Add this line to enable CORS

const stripe = stripePackage('sk_test_51OLqYNIwNW49OitZjLS5sBC5vQGJm2bI3VxnG5yEtOwmzbNGuGuPc2G8DgMia071oeHLxscVAHy6M0ouCiYzICHs00Tyv3AJVU'); 

app.use(bodyParser.json());

initialize(app);

app.post('/charge', async (req, res) => {
  try {
    const { token, amount } = req.body;

    const charge = await stripe.charges.create({
      amount,
      currency: 'usd',
      source: token,
    });

    res.status(200).json(charge);
  } catch (error) {
    console.error(error);

    if (error.type === 'StripeCardError') {
      res.status(400).json({ error: 'Card declined' });
    } else if (error.type === 'StripeInvalidRequestError') {
      res.status(400).json({ error: 'Invalid request to Stripe' });
    } else if (error.type === 'StripeAuthenticationError') {
      res.status(401).json({ error: 'Authentication with Stripe failed' });
    } else {
      res.status(500).json({ error: 'Unexpected error occurred' });
    }
  }
});

app.get('/', (req, res) => {
  res.send('Welcome !');
});

app.listen(port, () => console.log(`Server is listening at port ${port}`));

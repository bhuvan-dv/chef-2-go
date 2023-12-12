
import stripePackage from 'stripe';

const stripe = stripePackage('sk_test_51OLqYNIwNW49OitZjLS5sBC5vQGJm2bI3VxnG5yEtOwmzbNGuGuPc2G8DgMia071oeHLxscVAHy6M0ouCiYzICHs00Tyv3AJVU');

export const payment = async (req, res) => {
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
  };

  
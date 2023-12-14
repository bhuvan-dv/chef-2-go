import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppState } from '../../../store';

interface PaymentProps {
  price: number;
}

const Payment: React.FC<PaymentProps> = (props) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const amount = props.price;
  const userId = useSelector((state:AppState) => state.users.currentUser?._id);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements || loading) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (cardElement) {
      try {
        setLoading(true);

        const { token, error } = await stripe.createToken(cardElement);

        if (error) {
          console.error(error);
          toast.error('Failed to create payment token. Please check your card details.');
        } else {
          const response = await fetch(`http://localhost:5000/users/premium/${userId}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token: token.id, amount: Math.round(amount * 100), isPremium: true }), // Convert amount to cents
          });

          if (response.status === 200) {
            console.log('Payment successful!');
            toast.success('Payment successful!');

            // Wait for a few seconds before routing to /videos
            setTimeout(() => {
              navigate('/videos');
            }, 2000);
          } else {
            console.error('Payment failed.');
            toast.error('Payment failed. Please try again.');
          }
        }
      } catch (error) {
        console.error('An unexpected error occurred:', error);
        toast.error('An unexpected error occurred. Please try again later.');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-3xl font-Morion font-extrabold mb-6 text-soft-mint-green-600">One Last Step...</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="card-element">
            Card Details
          </label>
          <div className="border border-gray-300 rounded-md p-3">
            <CardElement id="card-element" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="amount-input">
            Amount
          </label>
          <TextField
            type="number"
            id="amount-input"
            value={amount}
            className="border border-gray-300 rounded-md p-3 w-full"
            placeholder="Enter amount"
            aria-readonly
          />
        </div>
        <Button
          type="submit"
          className={`bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-soft-mint-green ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={!stripe || loading}
        >
          {loading ? 'Processing...' : 'Pay Now'}
        </Button>
      </form>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default Payment;

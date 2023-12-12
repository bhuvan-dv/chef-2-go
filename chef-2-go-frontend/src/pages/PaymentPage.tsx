// PaymentPage.tsx
import React from 'react';
import Payment from '../components/Premium/PricingPage/Payment';
import { useLocation } from 'react-router-dom';

type PaymentProps = {
    price: number
}
const PaymentPage = (props: PaymentProps) => {

    let location = useLocation();
    
    const currPrice = location.state;
  return (
    <div>
      <h1>Payment Page</h1>
      <Payment price={currPrice} />
    </div>
  );
};

export default PaymentPage;

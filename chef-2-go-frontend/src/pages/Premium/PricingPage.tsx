
import React from 'react';
import './PricingPage.css';
import Pricing from '../../components/Premium/PricingPage/Pricing';
import Testimonials from '../../components/Premium/PricingPage/Testimonials';
import FAQ from '../../components/Premium/PricingPage/FAQs';

const PricingPage: React.FC = () => {
  return (
    <div className="background-container h-screen flex flex-col items-center justify-center text-white ">
      <div className="overlay"></div>

      <div className="flex flex-col items-center space-y-8 z-10">
        <h1 className="text-4xl text-morion font-bold h1">Become a Foodie!</h1>
        <Pricing />
      </div>
    </div>
  );
};

export default PricingPage;
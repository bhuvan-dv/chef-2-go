// Pricing.tsx
import React from 'react';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import ExploreIcon from '@mui/icons-material/Explore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RestaurantIcon from '@mui/icons-material/Restaurant';

const Pricing: React.FC = () => {
  const navigate = useNavigate();

  const handleSelect = (price: number) => {
    navigate('/payment',{
      state: price
    });
  };

  return (
    <div className="flex justify-center space-x-4">
      <div className="pricing-card group relative w-1/5 h-96 p-8 bg-opacity-20 backdrop-blur-md bg-white text-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:shadow-xl hover:-translate-y-1">
        <div className="before absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 opacity-0 group-hover:opacity-100"></div>
        <h2 className="text-2xl font-bold mb-4 relative z-1">Explorer</h2>
        <p className="text-gray-300 mb-4 relative z-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p className="text-gray-300 mb-4 relative z-1">$9.99/month</p>
        <Button
          className="bg-white text-blue-500 px-6 py-3 rounded-full hover:bg-gray-300 relative z-1"
          onClick={() => handleSelect(9.99)}
          startIcon={<ExploreIcon />}
        >
          Select
        </Button>
      </div>

      <div className="group relative w-1/5 h-96 p-8 bg-opacity-20 backdrop-blur-md bg-white text-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:shadow-xl hover:-translate-y-1">
        <div className="before absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 opacity-0 group-hover:opacity-100"></div>
        <h2 className="text-2xl font-bold mb-4 relative z-1">Enthusiast</h2>
        <p className="text-gray-300 mb-4 relative z-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p className="text-gray-300 mb-4 relative z-1">$19.99/month</p>
        <Button
          className="bg-white text-purple-500 px-6 py-3 rounded-full hover:bg-gray-300 relative z-1"
          onClick={() => handleSelect(19.99)}
          startIcon={<FavoriteIcon />}
        >
          Select
        </Button>
      </div>

      <div className="group relative w-1/5 h-96 p-8 bg-opacity-20 backdrop-blur-md bg-white text-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:shadow-xl hover:-translate-y-1">
        <div className="before absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 opacity-0 group-hover:opacity-100"></div>
        <h2 className="text-2xl font-bold mb-4 relative z-1">Connoisseur</h2>
        <p className="text-gray-300 mb-4 relative z-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p className="text-gray-300 mb-4 relative z-1">$29.99/month</p>
        <Button
          className="bg-white text-green-500 px-6 py-3 rounded-full hover:bg-gray-300 relative z-1"
          onClick={() => handleSelect(29.99)}
          startIcon={<RestaurantIcon />}
        >
          Select
        </Button>
      </div>
    </div>
  );
};

export default Pricing;

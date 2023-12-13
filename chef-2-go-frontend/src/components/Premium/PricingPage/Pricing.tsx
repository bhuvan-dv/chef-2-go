import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ExploreIcon from '@mui/icons-material/Explore';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RestaurantIcon from '@mui/icons-material/Restaurant';

const Pricing: React.FC = () => {
  const navigate = useNavigate();

  const handleSelect = (price: number, cardType: string) => {
    if (cardType === 'Explorer') {
      navigate('/');
    } else {
      navigate('/payment', {
        state: price
      });
    }
  };

  return (
    <div className="flex justify-center space-x-4">
      <div className="group relative w-1/4 h-96 p-8 bg-opacity-20 backdrop-blur-md bg-white text-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:shadow-xl hover:-translate-y-1">
        <div className="before absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 opacity-0 group-hover:opacity-100"></div>
        <h2 className="text-2xl font-bold mb-4 relative z-1 text-center">Explorer</h2>
        <div className="text-gray-300 mb-4 relative z-1">
          <i className="icon fas fa-globe text-green-950 "></i> Free browsing
        </div>
        <p className="text-gray-300 mb-4 relative z-1">$0/month</p>
        <Button
          className="bg-white text-blue-500 px-6 py-3 rounded-full hover:bg-gray-300 relative z-1 bottom-4"
          onClick={() => handleSelect(0, 'Explorer')}
          startIcon={<ExploreIcon />}
        >
          Select
        </Button>
      </div>

      <div className="group relative w-1/4 h-96 p-8 bg-opacity-20 backdrop-blur-md bg-white text-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:shadow-xl hover:-translate-y-1">
        <div className="before absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 opacity-0 group-hover:opacity-100"></div>
        <h2 className="text-2xl font-bold mb-4 relative z-1 text-center">Enthusiast</h2>
        <div className="text-gray-300 mb-4 relative z-1">
          <i className="fas fa-globe text-green-950 "></i> Free browsing <br />
          <LocalMoviesIcon fontSize="small" className="text-green-950  inline" /> Learn while watching! Get access to our premium page<br />
          <FastfoodIcon fontSize="small" className="text-green-950  inline" /> Get one complimentary dish of your choice per month
        </div>
        <p className="text-gray-300 mb-4 relative z-1">$19.99/month</p>
        <Button
          className="bg-white text-purple-500 px-6 py-3 rounded-full hover:bg-gray-300 relative z-1 bottom-4"
          onClick={() => handleSelect(19.99, 'Enthusiast')}
          startIcon={<FavoriteIcon />}
        >
          Select
        </Button>
      </div>

      <div className="group relative w-1/4 h-96 p-8 bg-opacity-20 backdrop-blur-md bg-white text-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:shadow-xl hover:-translate-y-1">
        <div className="before absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 opacity-0 group-hover:opacity-100"></div>
        <h2 className="text-2xl text-center font-bold mb-4 relative z-1">Connoisseur</h2>
        <div className="text-gray-300 mb-4 relative z-1">
          <i className="fas fa-globe text-green-950 "></i> Free browsing<br />
          <LocalMoviesIcon fontSize="small" className="text-green-950  inline" /> Learn while watching! Get access to our premium page<br />
          <FastfoodIcon fontSize="small" className="text-green-950 inline" /> Get three complimentary dishes of your choice per month
        </div>
        <p className="text-gray-300 mb-4 relative z-1">$29.99/month</p>
        <Button
          className="bg-white text-green-500 px-6 py-3 rounded-full hover:bg-gray-300 relative z-1 bottom-4"
          onClick={() => handleSelect(29.99, 'Connoisseur')}
          startIcon={<RestaurantIcon />}
        >
          Select
        </Button>
      </div>
    </div>
  );
};

export default Pricing;

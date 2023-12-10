import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';


import ChefRoutes from './routes/ChefRoutes';
import About from './pages/About/About';
import ChefPage from './pages/Chef/ChefPage';
import RecipeSearch from './pages/RecipeSearch/RecipeSearch';
import axios from 'axios';

function App() {
  const topChefs = [
    {
      id: 1,
      name: 'Chef John Doe',
      speciality: 'Italian Cuisine',
      recipes: ['Spaghetti Carbonara', 'Margherita Pizza', 'Tiramisu'],
      imageUrl: 'https://c.ndtvimg.com/2022-05/uhjvddb_chef-generic_625x300_10_May_22.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350'
    },
    {
      id: 2,
      name: 'Chef Jane Smith',
      speciality: 'French Pastry',
      recipes: ['Croissant', 'Éclair', 'Macarons'],
      imageUrl: 'https://c.ndtvimg.com/2022-05/uhjvddb_chef-generic_625x300_10_May_22.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350'
    },
    {
      id: 3,
      name: 'Chef Alex Johnson',
      speciality: 'Japanese Sushi',
      recipes: ['Nigiri', 'Sashimi', 'Dragon Roll'],
      imageUrl: 'https://c.ndtvimg.com/2022-05/uhjvddb_chef-generic_625x300_10_May_22.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350'
    },
    {
      id: 4,
      name: 'Chef John Doe',
      speciality: 'Italian Cuisine',
      recipes: ['Spaghetti Carbonara', 'Margherita Pizza', 'Tiramisu'],
      imageUrl: 'https://c.ndtvimg.com/2022-05/uhjvddb_chef-generic_625x300_10_May_22.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350'
    },
    {
      id: 5,
      name: 'Chef Jane Smith',
      speciality: 'French Pastry',
      recipes: ['Croissant', 'Éclair', 'Macarons'],
      imageUrl: 'https://c.ndtvimg.com/2022-05/uhjvddb_chef-generic_625x300_10_May_22.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350'
    },
    {
      id: 6,
      name: 'Chef Alex Johnson',
      speciality: 'Japanese Sushi',
      recipes: ['Nigiri', 'Sashimi', 'Dragon Roll'],
      imageUrl: 'https://c.ndtvimg.com/2022-05/uhjvddb_chef-generic_625x300_10_May_22.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350'
    },
  ];
  return (
    <Router>
      <main>
        <ChefRoutes/>
        {/* <ChefPage chefs={topChefs}/> */}
      </main>
    </Router>
  );
}

export default App;

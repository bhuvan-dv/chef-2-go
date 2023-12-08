import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';


import ChefRoutes from './routes/ChefRoutes';
import About from './pages/About/About';
import ChefPage from './pages/Chef/ChefPage';
import RecipeSearch from './pages/RecipeSearch/RecipeSearch';
import axios from 'axios';

function App() {
  // const topChefs = [
  //   {
  //     id: 1,
  //     name: 'Chef John Doe',
  //     speciality: 'Italian Cuisine',
  //     recipes: ['Spaghetti Carbonara', 'Margherita Pizza', 'Tiramisu'],
  //     imageUrl: 'https://c.ndtvimg.com/2022-05/uhjvddb_chef-generic_625x300_10_May_22.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350'
  //   },
  //   {
  //     id: 2,
  //     name: 'Chef Jane Smith',
  //     speciality: 'French Pastry',
  //     recipes: ['Croissant', 'Éclair', 'Macarons'],
  //     imageUrl: 'https://c.ndtvimg.com/2022-05/uhjvddb_chef-generic_625x300_10_May_22.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350'
  //   },
  //   {
  //     id: 3,
  //     name: 'Chef Alex Johnson',
  //     speciality: 'Japanese Sushi',
  //     recipes: ['Nigiri', 'Sashimi', 'Dragon Roll'],
  //     imageUrl: 'https://c.ndtvimg.com/2022-05/uhjvddb_chef-generic_625x300_10_May_22.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350'
  //   },
  //   {
  //     id: 4,
  //     name: 'Chef John Doe',
  //     speciality: 'Italian Cuisine',
  //     recipes: ['Spaghetti Carbonara', 'Margherita Pizza', 'Tiramisu'],
  //     imageUrl: 'https://c.ndtvimg.com/2022-05/uhjvddb_chef-generic_625x300_10_May_22.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350'
  //   },
  //   {
  //     id: 5,
  //     name: 'Chef Jane Smith',
  //     speciality: 'French Pastry',
  //     recipes: ['Croissant', 'Éclair', 'Macarons'],
  //     imageUrl: 'https://c.ndtvimg.com/2022-05/uhjvddb_chef-generic_625x300_10_May_22.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350'
  //   },
  //   {
  //     id: 6,
  //     name: 'Chef Alex Johnson',
  //     speciality: 'Japanese Sushi',
  //     recipes: ['Nigiri', 'Sashimi', 'Dragon Roll'],
  //     imageUrl: 'https://c.ndtvimg.com/2022-05/uhjvddb_chef-generic_625x300_10_May_22.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350'
  //   },
  // ];
  // const topRecipes = [
  //   {
  //     id: 1,
  //     name: 'Passionfruit Vanilla Pancakes',
  //     chef: 'Chef John Doe',
  //     imageUrl: 'ß'
  //   },
  //   {
  //     id: 2,
  //     name: 'Vegan Cheesy Crunch Tacos',
  //     chef: 'Chef Jane Smith',
  //     imageUrl: 'https://bigtreefarms.com/wp-content/uploads/2021/08/Vegan-Cheesy-Crunch-Tacos1-372x406.jpg'
  //   },
  //   {
  //     id: 3,
  //     name: 'Teriyaki Grilled Pineapple and Portobello',
  //     chef : 'Chef Alex Johnson',
  //     imageUrl: 'https://bigtreefarms.com/wp-content/uploads/2021/08/teriyaki-pineapple-recipe-372x406.jpg'
  //   },
  //   {
  //     id: 4,
  //     name: 'Soba Noodle Stir Fry',
  //     chef: 'Chef John Doe',
  //     imageUrl: 'https://bigtreefarms.com/wp-content/uploads/2021/04/51548bb6-43dd-4842-8627-e66b674e75af-372x406.jpg'
  //   },
  //   {
  //     id: 5,
  //     name: 'Chocolate Pavola',
  //     chef: 'Chef Jane Smith',
  //     imageUrl: 'https://bigtreefarms.com/wp-content/uploads/2021/04/ChocolatePavlova-372x406.png'
  //   },
  //   {
  //     id: 6,
  //     name: 'Veggie Stir Fry with Original Coco Aminos',
  //     chef: 'Chef Alex Johnson',
  //     imageUrl: 'https://bigtreefarms.com/wp-content/uploads/2022/08/Original-Stir-Fry-Vb-372x406.jpg'
   // },
 // ];
//  const [topChefs, setTopChefs] = useState([]);
//   const [topRecipes, setTopRecipes] = useState([]);

//   useEffect(() => {
//     // Fetch chefs data
//     axios.get('your_backend_api_url/chefs')
//       .then(response => {
//         setTopChefs(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching chefs:', error);
//       });

//     // Fetch recipes data
//     axios.get('your_backend_api_url/recipes')
//       .then(response => {
//         setTopRecipes(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching recipes:', error);
//       });
//   }, []); // Empt
  return (
    <Router>
      <main>
        <ChefRoutes/>
        {/* <
         chefs={topChefs}/>
        <RecipeSearch Recipes={topRecipes} /> */}
      </main>
    </Router>
  );
}

export default App;

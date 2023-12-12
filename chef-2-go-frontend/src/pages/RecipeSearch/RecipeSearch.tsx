// Import necessary libraries and types
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardContent, Typography, CardMedia, Grid, Button } from '@mui/material';
import { getAllRecipes } from '../../services/recipe';
import SearchBar from '../../components/SearchBar/SearchBar';
import RecipeGrid from '../../components/RecipeGrid/RecipeGrid';
import { setRecipes } from '../../store/slice/recipe-slice'; 
import Recipe from '../../models/Recipe';
import { AppState } from '../../store';

type TopRecipesProps = Recipe[];

const RecipeSearch: React.FC = () => {

  return (
    
    <div className="container mx-auto my-8 flex justify-center flex-col gap-5">
     <div className="relative">
        <img
          src="https://bigtreefarms.com/wp-content/uploads/2022/07/BTF_RecipeHeader-1-scaled.jpg"
          alt="Full Width Image"
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black">
          <h2 className="text-6xl font-bold mb-46 mr-56">Explore Our Recipes</h2>
        </div>
        </div>
        <div className='self-center'>
      <SearchBar searchCategory="recipe"/>
      </div>
      <RecipeGrid />
    </div>
  );
};

export default RecipeSearch;



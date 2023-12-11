// Import necessary libraries and types
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardContent, Typography, CardMedia, Grid, Button } from '@mui/material';
import { getAllRecipes } from '../../services/recipe';
import SearchBar from '../../components/SearchBar/SearchBar';
import RecipeGrid from '../../components/RecipeGrid/RecipeGrid';
import { setRecipes } from '../../store/slice/recipe-slice'; // Adjust the path
import Recipe from '../../models/Recipe';
import { AppState } from '../../store';

// interface Recipe {
//   id: number;
//   name: string;
//   chef: string;
//   imageUrl: string;
// }

type TopRecipesProps = Recipe[];

const RecipeSearch: React.FC = () => {

  return (
    <div className="container mx-auto my-8">
      <SearchBar searchCategory="recipe"/>
      <RecipeGrid />
    </div>
  );
};

export default RecipeSearch;



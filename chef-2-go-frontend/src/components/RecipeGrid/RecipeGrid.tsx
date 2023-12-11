import { Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import React, { useEffect } from 'react';
import Recipe from '../../models/Recipe';
import {useDispatch, useSelector } from 'react-redux';
import { getAllRecipes } from '../../services/recipe';
import { AppState } from '../../store';
import { setRecipes } from '../../store/slice/recipe-slice';
import { useNavigate } from 'react-router-dom';

const RecipeGrid = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const recipes = useSelector((state: AppState) => state.recipes);
    const searchTerm = useSelector((state: AppState) => state.recipes.searchTerm);
    const filteredRecipes = recipes.recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getInitialRecipes = async () => {
        try {
            const response = await getAllRecipes();
            const recipesList = await response.data;
            dispatch(setRecipes(recipesList));
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    }
    useEffect(() => {
        getInitialRecipes();
    }, []);

    const handleRecipeView = (recipeId : string | undefined) => {
        if (recipeId) {
            navigate(`/recipe/${recipeId}`);
        }
    }
  return (
  <div>
    <Grid container spacing={3}>
      {Array.isArray(filteredRecipes) && filteredRecipes.map((recipe: Recipe) => (
        <Grid item xs={12} sm={6} md={4} key={recipe._id}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={recipe?.imageUrl}
              className="object-cover"
            />
            <CardContent>
              <Typography variant="h6">{recipe.name}</Typography>
              <Typography variant="h6">{recipe.chef}</Typography>
              {/* View Recipe Button */}
              <Button variant="contained" color="primary" className="mt-4" onClick={() => handleRecipeView(recipe._id)}>
                View Recipe
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </div>
);

};

export default RecipeGrid;


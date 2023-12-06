import React from 'react';
import { Card, CardContent, Typography, CardMedia, Grid, Button } from '@mui/material';

interface Recipe {
  id: number;
  name: string;
  chef: string
  imageUrl: string;
}

interface TopRecipesProps {
    Recipes: Recipe[];
}

const RecipeSearch: React.FC<TopRecipesProps> = ({ Recipes }) => {
    return (
        <div className="container mx-auto my-8">
          {/* Rectangular Full-Width Image Section */}
          <div className="relative">
            <img
              src="https://bigtreefarms.com/wp-content/uploads/2022/07/BTF_RecipeHeader-1-scaled.jpg" // Replace with your actual image URL
              alt="Full Width Image"
              className="w-full h-64 object-cover"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black">
          <h2 className="text-6xl font-bold mb-46 mr-56">Explore Our Recipes</h2>
        </div>
          </div>
    
          {/* All Recipes Section */}
          <h1 className="text-3xl font-bold mb-4 mt-8">All Recipes</h1>
          <Grid container spacing={3}>
            {Recipes.map((Recipe) => (
              <Grid item xs={12} sm={6} md={4} key={Recipe.id}>
                <Card>
                  <CardMedia
                    component="img"
                    alt={Recipe.name}
                    height="200"
                    image={Recipe.imageUrl}
                    className="object-cover"
                  />
                  <CardContent>
                    <Typography variant="h6">{Recipe.name}</Typography>
                    <Typography variant="h6">{Recipe.chef}</Typography>
                    {/* View Recipe Button */}
                    <Button variant="contained" color="primary" className="mt-4">
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

export default RecipeSearch;

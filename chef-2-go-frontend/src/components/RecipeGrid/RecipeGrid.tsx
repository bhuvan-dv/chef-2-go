import { Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Recipe from '../../models/Recipe'
import { getAllRecipes } from '../../services/recipe';

const RecipeGrid = async () => {

    const [apiData, setApiData] = React.useState<Recipe[] | null>(null);
  async function demo() {
    console.log("here")
    let x: any = await getAllRecipes();
    console.log(`x value: ${JSON.stringify(x)}`);

    setApiData(x?.data);

    React.useEffect(() => {
        if (!apiData) {
          demo()
        }
      }, [apiData]);
  }
  return (
    <div>
      <Grid container spacing={3}>
        {apiData?.map((Recipe: Recipe) => (
          <Grid item xs={12} sm={6} md={4} key={Recipe._id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={Recipe?.imageUrl}
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
  )
}

export default RecipeGrid

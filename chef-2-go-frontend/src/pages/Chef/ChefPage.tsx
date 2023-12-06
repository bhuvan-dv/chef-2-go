import React from 'react';
import './ChefPage.css'
import { Card, CardContent, Typography, CardMedia, Grid, Button } from '@mui/material';

interface Chef {
  id: number;
  name: string;
  speciality: string;
  recipes: string[];
  imageUrl: string;
}

interface TopChefsProps {
  chefs: Chef[];
}

const ChefPage: React.FC<TopChefsProps> = ({ chefs}) => {
    return (
        <div className="container mx-auto my-8">
          {/* Rectangular Full-Width Image Section */}
          <div className="relative">
            <img
              src="https://cdn5.vectorstock.com/i/1000x1000/29/84/group-professionals-chef-cooking-vector-26812984.jpg" // Replace with your actual image URL
              alt="Full Width Image"
              className="w-full h-64 object-cover"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black">
              <h2 className="text-4xl font-bold mb-4">Explore our Top Chef pages</h2>
              <p className="text-xl">Discover talented chefs and their signature recipes.</p>
            </div>
          </div>
    
          {/* Top Chefs Section */}
          <h1 className="text-3xl font-bold mb-4 mt-8">Top Chefs and Their Recipes</h1>
          <Grid container spacing={3}>
            {chefs.map((chef) => (
              <Grid item xs={12} sm={6} md={4} key={chef.id}>
                <Card>
                  <CardMedia
                    component="img"
                    alt={chef.name}
                    height="200"
                    image={chef.imageUrl}
                    className="object-cover"
                  />
                  <CardContent>
                    <Typography variant="h6">{chef.name}</Typography>
                    <Typography color="textSecondary" gutterBottom>{chef.speciality}</Typography>
                    <Typography variant="body2" component="p">
                      <strong>Recipes:</strong>
                      <ul>
                        {chef.recipes.map((recipe, index) => (
                          <li key={index}>{recipe}</li>
                        ))}
                      </ul>
                    </Typography>
                    {/* View Chef Button */}
                    <Button variant="contained" color="primary" className="mt-4">
                      View Chef
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      );
};

export default ChefPage;

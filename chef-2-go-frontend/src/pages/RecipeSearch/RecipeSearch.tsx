import React from 'react';
import { Card, CardContent, Typography, CardMedia, Grid, Button, TextField } from '@mui/material';
import { getAllRecipes } from '../../services/recipe';
interface Recipe {
  id: number;
  name: string;
  chef: string
  imageUrl: string;
}

type TopRecipesProps = Recipe[];//= 
// Recipes: Recipe[]

const RecipeSearch: React.FC = () => {
  const [apiData, setApiData] = React.useState<TopRecipesProps | null>(null);
  async function demo() {
    console.log("here")
    let x: any = await getAllRecipes();
    console.log(`x value: ${JSON.stringify(x)}`);

    setApiData(x?.data);
  }
  React.useEffect(() => {
    if (!apiData) {
      demo()
    }
  }, [apiData]);

  console.log("updated api data", apiData);
  // console.log(`incoming data: ${Recipes}`);

  // console.log("updated api data",apiData?.Recipes);
  return (
    <div className="container mx-auto my-8">
      {/* Rectangular Full-Width Image Section */}
      <div className="relative">
        <img
          src="https://bigtreefarms.com/wp-content/uploads/2022/07/BTF_RecipeHeader-1-scaled.jpg"// Replace with your actual image URL
          alt="Full Width Image"
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black">
          <h2 className="text-6xl font-bold mb-46 mr-56">Explore Our Recipes</h2>
        </div>
      </div>
      {/* <section>
        <div className="container pt-6">
          <div className="row">
            <div className="col-sm-12 text-center">
              <div className="mt-auto">
                <p className="label font-alt-lite d-inline-block px-3 nice-select-label">Filter Recipes</p>
                <form className="d-inline-block v-middle">
                  <select id="filter_product_cats" className="filter-to-page mb-3 mx-1" data-type="recipes_filter" style={{ display: "none;" }}>
                    <option value="">Filter by Category</option>
                    <option value="16">Organic Coconut Sweeteners</option><option value="17">Sauces &amp; Marinades</option>        </select><div className="nice-select filter-to-page mb-3 mx-1" tabIndex={0}><span className="current">Filter by Category</span><ul className="list"><li data-value="" className="option selected focus">Filter by Category</li><li data-value="16" className="option">Organic Coconut Sweeteners</li><li data-value="17" className="option">Sauces &amp; Marinades</li></ul></div>
                  <select id="filter_recipes" className="filter-to-page mb-3 mx-1" data-type="recipes_filter" style={{ display: "none;" }}>
                    <option value="">Filter by Style</option>
                    <option value="32">Soups &amp; Salads</option><option value="33">Bowls &amp; Rolls</option><option value="50">Sides &amp; Apps</option><option value="30">Featured</option><option value="35">Baked Goods &amp; Sweets</option><option value="34">Drinks</option><option value="31">Main Dishes</option>             <option value="all">See All</option>
                  </select><div className="nice-select filter-to-page mb-3 mx-1" tabIndex={0}><span className="current">Filter by Style</span><ul className="list"><li data-value="" className="option selected focus">Filter by Style</li><li data-value="32" className="option">Soups &amp; Salads</li><li data-value="33" className="option">Bowls &amp; Rolls</li><li data-value="50" className="option">Sides &amp; Apps</li><li data-value="30" className="option">Featured</li><li data-value="35" className="option">Baked Goods &amp; Sweets</li><li data-value="34" className="option">Drinks</li><li data-value="31" className="option">Main Dishes</li><li data-value="all" className="option">See All</li></ul></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* All Recipes Section */}
      <h1 className="text-3xl font-bold mb-4 mt-8" style={{ color: 'black' }}>All Recipes</h1>
      <Grid container spacing={3}>
        {apiData?.map((Recipe: Recipe) => (
          <Grid item xs={12} sm={6} md={4} key={Recipe.id}>
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
  );
};

export default RecipeSearch;


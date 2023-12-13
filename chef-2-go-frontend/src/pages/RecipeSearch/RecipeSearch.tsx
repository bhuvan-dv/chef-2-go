// Import necessary libraries and types
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardContent, Typography, CardMedia, Grid, Button } from '@mui/material';
import { getAllRecipes } from '../../services/recipe';
import SearchBar from '../../components/SearchBar/SearchBar';
import RecipeGrid from '../../components/RecipeGrid/RecipeGrid';
import { setRecipes } from '../../store/slice/recipe-slice'; 
import Recipe from '../../models/Recipe';
import { AppState } from '../../store';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header/Header';
import SidebarNav from '../../components/SideBarNav/SidebarNav';

type TopRecipesProps = Recipe[];

const RecipeSearch: React.FC = () => {
  const { t } = useTranslation('common');
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 9; 

  let [menuState, setMenuState] = React.useState(false);


  const recipes: TopRecipesProps = useSelector((state: AppState) => state.recipes.recipes);

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    // Fetch recipes when the component mounts
    const fetchRecipes = async () => {
      try {
        const data = await getAllRecipes();
        dispatch(setRecipes(data.data));
      } catch (error) {
        console.error('Error fetching recipes', error);
      }
    };

    fetchRecipes();
  }, [dispatch]);

  return (
    <div className="container mx-auto my-8 flex justify-center flex-col gap-5">
            <Header menuState={menuState} setMenuState={setMenuState}/>
        <SidebarNav menuState={menuState} setMenuState={setMenuState}/>
      <div className="relative">
        <img
          src="https://bigtreefarms.com/wp-content/uploads/2022/07/BTF_RecipeHeader-1-scaled.jpg"
          alt="Full Width Image"
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black">
          <h2 className="text-6xl font-bold mb-46 mr-56">{t("searchrecipe.search")}</h2>
        </div>
      </div>
      <div className='self-center'>
        <SearchBar searchCategory="recipe"/>
      </div>
      <RecipeGrid recipes={currentRecipes} />
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(recipes.length / recipesPerPage) }).map((_, index) => (
          <Button key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default RecipeSearch;

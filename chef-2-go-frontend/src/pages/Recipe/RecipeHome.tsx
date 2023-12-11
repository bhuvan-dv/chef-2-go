import React from 'react'
import Recipe from '../../components/Recipe/Recipe'
import { useParams } from 'react-router-dom';
const RecipeHome = () => {
  const {recipeId} = useParams();
  return (
    <div>
      <Recipe id={recipeId}/>
    </div>
  )
}
 
export default RecipeHome
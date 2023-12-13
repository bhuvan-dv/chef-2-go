import React from 'react'
import Recipe from '../../components/Recipe/Recipe'
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import SidebarNav from '../../components/SideBarNav/SidebarNav';
const RecipeHome = () => {
  const {recipeId} = useParams();
  let [menuState, setMenuState] = React.useState(false);

  return (
    <div>
            <Header menuState={menuState} setMenuState={setMenuState}/>
        <SidebarNav menuState={menuState} setMenuState={setMenuState}/>
      <Recipe id={recipeId}/>
    </div>
  )
}
 
export default RecipeHome
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { RecipeSummary, IngridentsList } from './recipeCss';

type Ingredient = {
    name: string;
    quantity: string;
    unitType: string;
};

type IngredientProps = {
    ingredients: Ingredient[];
};

const style = {
    width: '100%',
    font:"Morion"
};


const Ingridents = (props: IngredientProps) => {
    const [secondary, setSecondary] = React.useState(false);
    const ingredientElements = props.ingredients.map((ingredient, index) => (
        <ListItem key={index} style={IngridentsList} sx={{ fontFamily:'Morion', fontWeight:'medium'}}>
            <ListItemText primary={`${ingredient.name}`} secondary={secondary ? `${ingredient.quantity}-${ingredient.unitType}` : null} />
        </ListItem>
    ));

    return (
            <div className='p-20'>
                <div className='flex justify-between'>
                    <h4 className='font-Morion text-3xl font-semibold' style={RecipeSummary}>Ingredients (serves four)</h4>
                </div>
                <List sx={style} component="nav" aria-label="mailbox folders" >
                    {ingredientElements}
                </List>
            </div>);

}

export default Ingridents;
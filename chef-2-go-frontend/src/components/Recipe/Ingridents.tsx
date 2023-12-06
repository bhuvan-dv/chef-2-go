import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { RecipeSummary, IngridentsList } from './recipeCss';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button, colors } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

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
    font: "Morion"
};
const theme = createTheme({
    components: {
        MuiButton: {
        }
    },
    typography: {
        fontSize: 18,
        fontFamily: "Morion",
        button: {
            fontSize: '1rem',
            textTransform: 'none',
        },
    },
    palette: {
        secondary: {
            main: "#38524f",
        }
    }
});


const Ingridents = (props: IngredientProps) => {
    const [secondary, setSecondary] = React.useState(false);
    const ingredientElements = props.ingredients.map((ingredient, index) => (
        <ListItem key={index} style={IngridentsList} sx={{ fontFamily: 'Morion', fontWeight: 'medium' }}>
            <ListItemText primary={`${ingredient.name}`} secondary={secondary ? `${ingredient.quantity}-${ingredient.unitType}` : null} />
        </ListItem>
    ));

    return (
        <ThemeProvider theme={theme}>
            <div className='p-20'>
                <div className='flex justify-between'>
                    <h4 className='font-Morion text-3xl font-semibold' style={RecipeSummary}>Ingredients (serves four)</h4>
                    <Button variant="text" endIcon={<AddShoppingCartIcon />} sx={{ color: `secondary.main`, maxWidth: 'fit' }} >
                    </Button>
                </div>
                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={secondary}
                                onChange={(event) => setSecondary(event.target.checked)}
                            />
                        }
                        label="See Quanity"
                    />
                </FormGroup>
                <List sx={style} component="nav" aria-label="mailbox folders" >
                    {ingredientElements}
                </List>
            </div>
        </ThemeProvider>);

}

export default Ingridents;
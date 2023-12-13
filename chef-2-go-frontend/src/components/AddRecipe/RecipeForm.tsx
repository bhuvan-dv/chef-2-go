import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Button, TextField, Typography, Box } from '@mui/material';
import Recipe from '../../models/Recipe';

import { styled } from '@mui/system';
import CustomTextArea from './CustomTextArea';
import { createNewRecipes } from '../../services/recipe';
import { AppState } from '../../store';
import { useSelector } from 'react-redux';

interface RecipeFormProps {
    chefId: string;
}

const RecipeForm: React.FC<RecipeFormProps> = () => {
    const currentUser = useSelector((state: AppState) => state.users.currentUser);
    const [recipeData, setRecipeData] = useState<Recipe>({
        name: '',
        chef: currentUser?.name || '',
        chefId: currentUser?._id || '6578ecfd21114b586c590275',
        summary: '',
        instructions: [],
        ingredients: [{ name: '', quantity: '', unitType: '' }],
        comment: null,
        imageUrl: '',
    });

    const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response : any= createNewRecipes<Recipe>(recipeData);
        if(response.status === 200) {
            alert('Recipe has been created successfully');
        }
        else {
            alert('Error in adding Recipe, please try again');
            setRecipeData({
                name: '',
                chef: currentUser?.name || '',
                chefId: currentUser?._id || '6578ecfd21114b586c590275',
                summary: '',
                instructions: [],
                ingredients: [{ name: '', quantity: '', unitType: '' }],
                comment: null,
                imageUrl: '',
            });
        }

        // onSubmit(recipeData);
        // Add logic to send the data to your API or perform necessary actions
    };
    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        field: keyof Recipe
    ) => {
        const { value } = event.target;
        setRecipeData({ ...recipeData, [field]: value });
    };

    const handleIngredientChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        index: number,
        field: keyof typeof recipeData.ingredients[number]
    ) => {
        const newIngredients = [...recipeData.ingredients];
        newIngredients[index][field] = event.target.value;
        setRecipeData({ ...recipeData, ingredients: newIngredients });
    };

    const addIngredient = () => {
        setRecipeData({
            ...recipeData,
            ingredients: [
                ...recipeData.ingredients,
                { name: '', quantity: '', unitType: '' },
            ],
        });
    };


    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Name"
                value={recipeData?.name}
                onChange={(e) => handleInputChange(e, 'name')}
                fullWidth
                margin="normal"
            />
            {/* Other fields go here: chef, summary, instructions, video, gifs, comment, imageUrl */}
            <Typography variant="body1" gutterBottom>
                Summary
            </Typography>
            <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                <TextField
                    label="Summary"
                    value={recipeData?.summary}
                    onChange={(e) => handleInputChange(e, 'summary')}
                    margin="normal"
                    size="small"

                />
                <CustomTextArea 
                // label="Summary"
                //     value={recipeData.summary}
                //     onChange={(e) => handleInputChange(e, 'summary')}
                //     margin="normal"
                //     size="small"
                     />
                {/* <Textarea
                    maxRows={4}
                    aria-label="maximum height"
                    placeholder="Maximum 4 rows"
                    defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua."
                /> */}
            </Box>
            {/* Ingredients */}
            <Typography variant="body1" gutterBottom>
                Ingredients
            </Typography>
            {recipeData && recipeData.ingredients.map((ingredient, index) => (
                <Box key={index} sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                    <TextField
                        label="Name"
                        value={ingredient.name}
                        onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => handleIngredientChange(e, index, 'name')}
                        margin="normal"
                        size="small"

                    />
                    <TextField
                        label="Quantity"
                        value={ingredient.quantity}
                        onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => handleIngredientChange(e, index, 'quantity')}
                        margin="normal"
                        size="small"

                    />
                    <TextField
                        label="Unit Type"
                        value={ingredient.unitType}
                        onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => handleIngredientChange(e, index, 'unitType')}
                        margin="normal"
                        size="small"
                    />
                </Box>
            ))}
            <Button variant="contained" onClick={addIngredient}>
                Add Ingredient
            </Button>

            {/* Submit Button */}
            <Button variant="contained" color="primary" type="submit">
                Submit
            </Button>
        </form>
    );
};

export default RecipeForm;

import React, { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { Button, TextField, Typography, Box, Input } from '@mui/material';
import Recipe from '../../models/Recipe';
import CustomTextArea from './CustomTextArea';
import { createNewRecipes } from '../../services/recipe';
import { AppState } from '../../store';
import { useSelector } from 'react-redux';
import storage from '../../Firebase/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

interface RecipeFormProps {
    chefId: string;
}

const RecipeForm: React.FC<RecipeFormProps> = () => {

    const [selectedFile, setSelectedFile] = useState<File | null | undefined>(null);
    const currentUser = useSelector((state: AppState) => state.users.currentUser);
    const navigate = useNavigate();
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

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setSelectedFile(file);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (selectedFile != null || selectedFile != undefined) {
            const storageRef = ref(storage, `recipes/${selectedFile?.name}`);
            const response = await uploadBytesResumable(storageRef, selectedFile as Blob);
            const url: string = await getDownloadURL(ref(storage, `recipes/${selectedFile?.name}`));
            recipeData.imageUrl = url;
        }
        const response: any = await createNewRecipes<Recipe>(recipeData);
        if (response.statusText == 'OK') {
            toast.success('Recipe has been created successfully');
            setTimeout(()=>{

            },5000)
            navigate(-1);
            
        }
        else {
            toast.error('Error in adding Recipe, please try again' + response.status);
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

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

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
            {/* code to handle images */}
            {/* <div>
                <Input
                    type="file"
                    name="Add Recipe Photo"
                    placeholder="Add Recipe Image"
                    onChange={handleFileChange} />
            </div> */}
            <Box sx={{ display: "flex", alignSelf: "center" }}>
                <Typography variant="body1" gutterBottom sx={{ display: "flex", alignItems: "center" }}>
                    Choose Your Recipe Picture:
                </Typography>
                <Button component="label" variant="contained" startIcon={<CloudUploadIcon />} sx={{ margin: 2 }}>
                    Upload
                    <VisuallyHiddenInput type="file" onChange={handleFileChange} />
                </Button>
            </Box>
            <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                <TextField
                    label="Summary"
                    value={recipeData?.summary}
                    onChange={(e) => handleInputChange(e, 'summary')}
                    margin="normal"
                    size="medium"
                    sx={{ width: "100%" }}
                />
                {/* <CustomTextArea
                    label="Summary"
                    value={recipeData.summary}
                    onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => handleInputChange(e, 'summary')}
                    margin="normal"
                    size="small"
                /> */}
                {/* <Textarea
                    maxRows={4}
                    aria-label="maximum height"
                    placeholder="Maximum 4 rows"
                    defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua."
                /> */}
            </Box>
            {/* Ingredients */}
            <Box>
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
            </Box>
            <Box sx={{ display: 'flex', justifyContent: "space-evenly" }}>
                <Button variant="contained" onClick={addIngredient}>
                    Add Ingredient
                </Button>
                {/* Submit Button */}
                <Button variant="contained" color="primary" type="submit" sx={{
                    bgcolor: "green", color: "white", '&:hover': {
                        backgroundColor:"white",
                        cursor: 'pointer',
                        color:  'green',
                        borderColor: "green",
                    },
                }}>
                    Submit
                </Button>
            </Box>
        </form>
    );
};

export default RecipeForm;

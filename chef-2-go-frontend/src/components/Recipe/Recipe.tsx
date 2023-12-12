import React, { useState, CSSProperties } from 'react'
import { getRecipes } from '../../services/recipe'
import Recipe from '../../models/Recipe'
import { recipes } from '../../models/Recipe';
import "./recipe.module.css";
import { ImgContStyling, TitleContStyling, TitleStyling, RecipeSummary } from './recipeCss';
import Ingridents from './Ingridents';
import RecipeInstructions from './RecipeInstructions';
// import Circle from './Circle';
import { Paper, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
// let obj: Recipe = {
//     comment: null,
//     _id: "655cf1d2107b4ea257c79c0b",
//     name: "Braised Venison Shoulder Dinner",
//     chef: "Amith",
//     summary: "A slow-cooked braise transformed into a roast-style dinner for a hearty winter feast. Port wine, red wine and venison stock ensure this dish is all things tender, succulent and flavourful.",
//     instructions: [
//         "step0", "step1", "step2"
//     ],
//     ingredients: [
//         {
//             name: "Braised venison shoulder",
//             quantity: "1",
//             unitType: "Whole"
//         },
//         {
//             name: "Leeks halved",
//             quantity: "2",
//             unitType: "parts"
//         },
//         {
//             name: "Large heirloom carrots quartered",
//             quantity: "4",
//             unitType: "nos"
//         },
//         {
//             name: "Water",
//             quantity: "500",
//             unitType: "ml"
//         },
//         {
//             name: "Sugar",
//             quantity: "1⁄4",
//             unitType: "cup"
//         },
//         {
//             name: "unsalted butter chopped and chilled",
//             quantity: "1",
//             unitType: "Block"
//         },
//         {
//             name: "thyme",
//             quantity: "1⁄2",
//             unitType: "Bunch"
//         },
//         {
//             name: "Venison stock",
//             quantity: "2",
//             unitType: "liter"
//         },
//         {
//             name: "port wine",
//             quantity: "1⁄2",
//             unitType: "Bottle"
//         },
//         {
//             name: "Red wine",
//             quantity: "1⁄2",
//             unitType: "cup"
//         }
//     ],
//     video: "https://store.com/sajfnkdf",
//     gifs: "https://gifs.com/mygif"
// }

type RecipeProps = {
    id: string | undefined
}

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
            dark: "hsl(43, 21%, 94%)",
            light: "hsl(43, 21%, 94%)"
        }
    }
});
const RecipeHome = (props: RecipeProps) => {
    const [individualRecipe, setIndividualRecipe] = useState<Recipe | undefined>(undefined);
    const Recipeheading: React.FC = () => {
        let headStyling: CSSProperties = {};
        if (individualRecipe?.imageUrl) {
            headStyling = ImgContStyling(individualRecipe.imageUrl);
        }
        let aarr: string[] | undefined = individualRecipe?.name?.split(" ");
        const charElements: React.ReactNode[] | undefined = aarr?.map((char: string, index: number) => (
            <div key={index} style={TitleStyling} className='text-9xl pl-96'>
                {char}
            </div>
        ));
        return (<div className='text-[#ffffff]' style={headStyling}>{charElements}</div>); // Return the array of elements
    };

    async function getIndividualRecipe(): Promise<any> {
        const RecipeResponse: any = await getRecipes(props.id);
        let { data } = RecipeResponse;
        setIndividualRecipe(data);
    }

    React.useEffect(() => {
        getIndividualRecipe();
    }, [])

    return (
        <>

            <div>
                <ThemeProvider theme={theme}>
                    <div className=''>
                        <Recipeheading />
                    </div>
                    {/* <Circle> */}
                    <div className='bg-[#f2f0eb] w-full md:w-auto'>
                        <section className='bg-[#f2f0eb] mx-8 flex flex-row py-8 px-4'>
                            <div className='border-solid border-2 border-rgba(47, 66, 64, 0.25) w-1/2'>
                                <Paper elevation={3} style={{ padding: '20px', backgroundColor: "hsl(43, 21%, 94%)", height: "100%" }}>
                                    {/* <h4 style={RecipeSummary} className='font-Morion text-3xl font-semibold p-28 text-justify'>{individualRecipe?.summary}</h4> */}
                                    <Typography variant="h4" gutterBottom sx={{ RecipeSummary }} className='text-3xl font-semibold p-28 text-justify'>
                                        {individualRecipe?.summary}
                                    </Typography>
                                </Paper>
                            </div>
                            <div className='border-solid border-2 border-rgba(47, 66, 64, 0.25) w-1/2'>
                                <Ingridents ingredients={individualRecipe?.ingredients} />
                            </div>
                        </section>
                        <section className='bg-[#f2f0eb] mx-8 flex flex-row py-8 px-4'>
                            <RecipeInstructions instructions={individualRecipe?.instructions} />
                        </section>
                    </div>
                    {/* </Circle> */}
                </ThemeProvider >
            </div>

        </>
    )
}

export default RecipeHome
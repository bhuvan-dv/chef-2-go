import React from 'react'
import { getRecipes } from '../../services/recipe'
import Recipe from '../../models/Recipe'
import "./recipe.css";
import { TitleContStyling, TitleStyling } from './recipeCss';

let obj: Recipe = {
    comment: null,
    _id: "655cf1d2107b4ea257c79c0b",
    name: "Braised Venison Shoulder Dinner",
    chef: "Amith",
    instructions: [
        "step0", "step1", "step2"
    ],
    ingredients: [
        {
            name: "batter",
            quantity: "200",
            unitType: "gm"
        }
    ],
    video: "https://store.com/sajfnkdf",
    gifs: "https://gifs.com/mygif"
}


const RecipeHome: React.FC = () => {
    const Recipeheading: React.FC = () => {
        let aarr: string[] = obj.name.split(" ");
        const charElements: React.ReactNode[] = aarr.map((char: string, index: number) => (
            <div key={index} style={TitleStyling} className='text-9xl pl-96'>
                {char}
            </div>
        ));
        return <div className='text-[#ffffff]' style={TitleContStyling}>{charElements}</div>; // Return the array of elements within a fragment
    };

    // async function abdc(): Promise<any> {
    //     const RecipeResponse: any = await getRecipes("655cf1d2107b4ea257c79c0b");
    //     let { data } = RecipeResponse;
    //     console.log(RecipeResponse?.data);
    // }
    // abdc();
    
    return (
        <>
            <div className=''>
                <Recipeheading />
            </div>
            <div>

            </div>
        </>
    )
}

export default RecipeHome
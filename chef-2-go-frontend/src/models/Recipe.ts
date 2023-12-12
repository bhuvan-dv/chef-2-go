interface Recipe {
    _id?:string;
    name: string;
    chef: string;
    summary:string;
    instructions: string[] | undefined;
    ingredients: {
        name: string;
        quantity: string;
        unitType: string;
    }[];
    video?: string;
    gifs?: string;
    comment: string | null,
    imageUrl: string;
}
export const recipes: Recipe[] = [
    {
        comment: null,
        _id: "655cf1d2107b4ea257c79c0b",
        name: "Dosa",
        chef: "Amith",
        summary: "A slow-cooked braise transformed into a roast-style dinner for a hearty winter feast. Port wine, red wine and venison stock ensure this dish is all things tender, succulent and flavourful.",
        instructions: [
            "step0","step1","step2"
        ],
        ingredients: [
            {
                name: "batter",
                quantity: "200",
                unitType: "gm"
            }
        ],
        video: "https://store.com/sajfnkdf",
        gifs: "https://gifs.com/mygif",
        imageUrl: "https://store.com/sajfnkdf"
    }
];
export default Recipe;
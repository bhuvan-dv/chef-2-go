interface Recipe {
    _id?:string;
    name: string;
    chef: string;
    instructions: string[];
    ingredients: {
        name: string;
        quantity?: string;
        unitType?: string;
    }[];
    video?: string;
    gifs?: string;
    comment: string | null;
}
export const courses: Recipe[] = [
    {
        comment: null,
        _id: "655cf1d2107b4ea257c79c0b",
        name: "Dosa",
        chef: "Amith",
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
        gifs: "https://gifs.com/mygif"
    }
];
export default Recipe;
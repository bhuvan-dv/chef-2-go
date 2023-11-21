import mongoose from "mongoose";
const Schema = mongoose.Schema;

const RecipeSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        chef: {
            type: String,
            required: true,
        },
        instructions: {
            type: Array,
            required: true
        },
        ingredients: {
            type: Array,
            required: true,
            name: {
                type: String
            },
            quanity: {
                type: String,
            },
            unitType: {
                type: String
            }
        },
        Video: {
            type: String,
        },
        gifs: {
            type: String
        }
    },
    {
        versionKey: false,
    }
)

const RecipeModel = mongoose.model("recipe", RecipeSchema);

export default RecipeModel;
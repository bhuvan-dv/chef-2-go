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
        ingridents: {
            type: String,
            required: true,
            quanity: {
                type: Number,

            }
        },
        Video: {
            type: String,
        },
        gifs: {
            type: String,
            required: true
        }
    },
    {
        versionKey: false,
    }
)

const RecipeModel = mongoose.model("recipe", RecipeSchema);

export default RecipeModel;
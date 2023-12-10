import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ChefSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        category: {
            type: String
        },
        comment: {
            type: String,
            default: null
        },
        recipes: {
            type: Array,
            required: true
        },
        imageUrl: {
            type: String
        }
    },
    {
        versionKey: false,
    }
)

const ChefModel = mongoose.model("chef", ChefSchema);

export default ChefModel;
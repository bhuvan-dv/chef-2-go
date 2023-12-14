import mongoose from "mongoose";
const Schema = mongoose.Schema;

/**
 * Chef schema to define the structure of Chef documents in MongoDB.
 */
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
/**
 * ChefModel represents the MongoDB model for the "chef" collection.
 */
const ChefModel = mongoose.model("chef", ChefSchema);

export default ChefModel;
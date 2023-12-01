import mongoose from "mongoose";

// Define Mongoose schema for Ingredient model

const Schema = mongoose.Schema;
const IngridentSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: false,
  },

  stores: {
    type: Array,
    required: true,
    unique: false,
    name: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
  },
});

export const IngridentModel = mongoose.model("ingredient", IngridentSchema);

// export default IngridentModel;

import mongoose from "mongoose";

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

const IngridentModel = mongoose.model("ingredient", IngridentSchema);

export default IngridentModel;

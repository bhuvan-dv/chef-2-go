import mongoose from "mongoose";
const Schema = mongoose.Schema;


const ROLES = {
    ADMIN: "admin",
    CHEF: "chef",
    CUSTOMER: "customer"
}

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name:{
        type: String
    },
    username:{
        type: String,
        required: true,
        unique:true
    },
    role:{
        type: String,
        enum: Object.values(ROLES), // Restrict values to those defined in ROLES
        required: true
    },
    isPremiumUser:{
        type: Boolean,
        default: false
    },
    isVerified:{
        type:Boolean,
        default:false
    }

}, {versionKey: false, timestamps: true});

const UserModel = mongoose.model("user", UserSchema);

export default UserModel;
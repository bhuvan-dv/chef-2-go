import User from "../models/user-model.js";
import bcrypt from "bcrypt";
import mongoose, { mongo } from "mongoose";
import mongoose, { mongo } from "mongoose";
import validator from 'validator';

// Function to sign up a new user
export const signup = async (name, username, email, password, role) => {
    console.log('Entered in signup');
    console.log(`name: ${name}, email: ${email}, username: ${username}, password: ${password}, user-role: ${role}`);

    // Validation
    if (!email || !password || !role) {
        throw Error('All Fields must be filled');
    }
    if (!validator.isEmail(email)) {
        throw Error('Email is not valid');
    }
    if (!validator.isStrongPassword(password)) {
        throw Error('Password is not strong enough');
    }

    // Check if the email already exists
    const emailExists = await User.findOne({ email });
    if (emailExists) {
        throw Error('Email already in use');
    }

    // check if username already exists
    const usernameExists = await User.findOne({username});
    if (usernameExists) {
        throw Error('username already in use');
    }

    // Generate a salt and hash the password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    console.log(`hash: ${hash}`);

    // Create a new user in the database
    const user = await User.create({ name, username, email, password: hash, role });
    return user;
}

// Function to log in a user
export const login = async (username, email, password) => {
    // Validation
    console.log('Entered in login');
    console.log(` service username: ${username}, email: ${email}, password: ${password}`);
    if ((!email || !username) || !password) {
        throw Error('All Fields must be filled');
    }

    let user;

    // Find the user by username or email
    console.log(`username: ${username}`);
    if (username) {  
        user = await User.findOne({ username });
        if(!user){
            throw Error("user not find, pleaes check your username and password")
        }
    } else {
        console.log(`email: ${email}`);
        user = await User.findOne({ email });
        console.log(`user: ${user}`);
        if (!user) {
            throw Error('user not find, pleaes check your email and password');
        }
    }

    // Validate if the user exists

    // Compare plain text password with hashed password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        throw Error('Invalid login credentials');
    }
    return user;
}

// Function to delete a user by their ID
export const deleteUser = async (id) => {
    console.log("Deleting user with ID:", id);
    return await User.findByIdAndDelete(id).exec();
}

export const getRegisteredUsers = async () => {
    const registeredUsers = User.find({role:'chef'}).exec();
    return registeredUsers
}

export const getUserById = async (id) => {
    return await User.findById(id).exec();
}

export const getUserByEmail = async (email) => {
    return User.findOne({ email: email }).exec();
}

export const updateUserDetails = async (id, user) => {
    console.log(`id in service: ${id}`);
    console.log(`user in service: ${user}`);
    const response = await getUserById(id);
    console.log(`response: ${response}`);
    const objectId = new mongoose.Types.ObjectId(id);
    return await User.findOneAndUpdate({_id : id}, user, {new: true}).exec();
}

// Function to update User Verification Details
export const updateVerifcationStatus = async (email, isVerified) => {

    let updateUser = { "isVerified": isVerified };

    return await User.findOneAndUpdate({"email": email}, updateUser, {new: true}).exec();
}
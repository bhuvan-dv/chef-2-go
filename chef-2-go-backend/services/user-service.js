import User from "../models/user-model.js";
import bcrypt from "bcrypt";
import validator from 'validator';

// Function to sign up a new user
export const signup = async (name, username, email, password) => {
    console.log('Entered in signup');
    console.log(`name: ${name}, email: ${email}, username: ${username}, password: ${password}`);

    // Validation
    if (!email || !password) {
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

    // Generate a salt and hash the password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    console.log(`hash: ${hash}`);

    // Create a new user in the database
    const user = await User.create({ name, username, email, password: hash });
    return user;
}

// Function to log in a user
export const login = async (username, email, password) => {
    // Validation
    if (!email || !password) {
        throw Error('All Fields must be filled');
    }

    let user;

    // Find the user by username or email
    if (username) {  
        user = await User.findOne({ username });
    } else {
        console.log(`email: ${email}`);
        user = await User.findOne({ email });
        console.log(`user: ${user}`);
    }

    // Validate if the user exists
    if (!user) {
        throw Error('Incorrect Email');
    }

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

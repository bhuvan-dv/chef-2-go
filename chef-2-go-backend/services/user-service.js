import User from "../models/user-model.js";
import bcrypt from "bcrypt";
import validator from 'validator';


export const signup = async (name, username, email, password) => {
    console.log('Entered in signup')
    console.log(`name: ${name}, email: ${email}, username: ${username}, password: ${password}`);
    //validation
    if (!email || !password) {
        throw Error('All Fields must be filled');
    }
    if (!validator.isEmail(email)) {
        throw Error('Email is not valid');
    }
    if (!validator.isStrongPassword(password)) {
        throw Error('Password is not strong enough');
    }
    const emailExists = await User.findOne({ email });
    if (emailExists) {
        throw Error('Email already in use');
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    console.log(`hash: ${hash}`)
    const user = await User.create({ name: name, username: username, email: email, password: hash });
    return user;
}

export const login = async (username, email, password) => {
    console.log(`Entered here`);
    //validation
    if (!email || !password) {
        throw Error('All Fields must be filled');
    }
    let user;
    if (username) {  
        user = await User.findOne({ username });
    }
    else{
        console.log(`email: ${email}`);
        user = await User.findOne({ email });
        console.log(`user: ${user}`);
    }

    //validating if user exists
    if (!user) {
        throw Error('Incorrect Email');
    }

    //comparing plain text password with hashed password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        throw Error('Invalid login Credentials')
    }
    return user;
}

export const searchChefsbyName = async (searchTerm) =>{
    const chefs = User.find({ name: { $regex: new RegExp(searchTerm) } });
    return chefs;
}

export const searchChefByUserName = async (username) =>{
    const chef = await User.findOne({ username: username });
    return chef;
}
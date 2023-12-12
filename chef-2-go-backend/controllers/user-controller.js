import * as userService from "../services/user-service.js";
import validator from "validator";
import { setResponse, setErrorResponse, setSignupError } from "./response-handler.js";
import { createToken } from "../utilities/token.js";
import { request, response } from "express";
import * as otpHandler from "../utilities/otpHandler.js";
import bcrypt from "bcrypt";

export const loginUser = async (request, response) => {
    try {
        const { email, password, username } = request.body;
        console.log(` controller email: ${email}, password: ${password}, username: ${username}`);
        const user = await userService.login(username,email, password);

        //creating token 
        const token = createToken(user._id);
        const returnData = {
            token: token,
            user: user
        }
        //sending token in response
        setResponse(returnData, response);
    } catch (err) {
        console.error("Login Error:", err);

        if (err.name === "ValidationError") {
            setErrorResponse(400, err.message, response);
        } else if (err.name === "UnauthorizedError") {
            setErrorResponse(401, "Unauthorized", response);
        } else {
            setErrorResponse(500, err, response);
        }
    }
}

export const signupUser = async (request, response) => {
    const { name, username, email, password, role } = request.body;
    try {
        const user = await userService.signup(name, username, email, password, role);
        console.log(user);
        //creating token 
        const token = createToken((user._id).toString());
        console.log(`token: ${token}`);

        //sending token in response
        const otpSecret = otpHandler.createNewOTP(request.body.email);
        response.status(201).send({ ...user.toObject(), otpSecret: otpSecret });
        // setResponse({ email, token }, response);
    } catch (err) {
        console.error("Signup Error:", err);

        if (err.name === "ValidationError") {
            setSignupError(400, err.message, response);
        } else if (err.name === "MongoError" && err.code === 11000) {
            setSignupError(409, "Email or username already exists", response);
        } else {
            setErrorResponse(500, "Internal Server Error", response);
        }
    }
}

export const deleteUser = async (request, response) =>{
    try {
        console.log(`id: ${request.params.id}`);
        const id = request.params.id;
        const result = await userService.deleteUser(id);
        setResponse(result, response);
    } catch (err) {
        if (err.name === "CastError" && err.kind === "ObjectId") {
            setErrorResponse(404, "User Not Found", response);
        } else {
            setErrorResponse(500, "Internal Server Error", response);
        }
    }
}

export const getAllRegisteredUsers = async (req, res) => {
    try {
        const registeredUsers = await userService.getRegisteredUsers();
        res.status(200).send(registeredUsers);
    }
    catch (e) {
        console.log(e);
        res.status(400).send({ "message": "Something went wrong." });
    }
}

export const getUserById = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.id);
        res.status(200).send(user);
    }
    catch (e) {
        console.log(e);
        res.status(400).send({ "message": "Something went wrong." });
    }
}

export const getUserByEmail = async (req, res) => {
    try {
        const user = await userService.getUserByEmail(req.params.email);
        res.status(200).send(user);
    }
    catch (e) {
        console.log(e);
        res.status(400).send({ "message": "Something went wrong." });
    }
}


//ReSend OTP Function
export const reSendOTP = async (request, response) => {

    try {
        if (!request.body.email) {
            throw ({ msg: 'email field is required', code: 400 })
        }

        const otpSecret = otpHandler.createNewOTP(request.body.email);
        response.status(201).send({ otpSecret: otpSecret });

    } catch (err) {
        response.status(err.code ? err.code : 500).send({ msg: err.msg ? err.msg : 'Something went wrong in the server' });
    }
}

//Email Verification Function
export const validateUserByEmail = async (request, response) => {
    try {
        if (!request.body.email) {
            throw ({ msg: 'email field is required', code: 400 });
        }

        console.log(request.body);
        const isValidOtp = otpHandler.verifyOTP(request.body.email, request.body.otpSecret, request.body.otp);
        console.log(`Is Valid OTP ${isValidOtp}`);
        if (isValidOtp) {
            const saveUser = await userService.updateVerifcationStatus(request.body.email, isValidOtp);

            console.log(saveUser);
            response.status(201).send({ msg: 'Email Sucessfully verified' });
        } else {
            response.status(401).send({ msg: 'Invalid OTP' });
        }
    } catch (err) {
        console.log(err)
        response.status(err.code ? err.code : 500).send({ msg: err.msg ? err.msg : `Something went wrong with the server.` })
    }
}

//Function to Update User Details by ID
export const updateUser = async (request, response) => {
    const saltRounds = 10;
    try {
        if (!request.body.username) {
            throw ({ msg: 'userName field is required', code: 400 })
        }

        if (!request.body.password) {
            throw ({ msg: 'password field is required', code: 400 })
        }

        console.log(request.body);
        const hashedPwd = await bcrypt.hash(request.body.password, saltRounds);
        const user = {
            userName: request.body.userName,
            password: hashedPwd
        };

        console.log(request.params.userId);

        const saveUser = await userService.updateUserDetails(request.params.userId, request.body );
        console.log(saveUser);
        if (saveUser) {
            response.status(201).send({ ...saveUser.toObject() });

        } else {
            response.status(400).send({ msg: `User with the Id: ${request.params.userId} does not exists` })
        }
    } catch (err) {
        console.log("error: ", err)
        response.status(err.code ? err.code : 500).send({ msg: err.message ? err.message : 'Something went wrong in the server' });
    }
}

export const updateUserDetails = async (request, response) => {
    try {
        const { name, username, email, password, role } = request.body;
        if (validCredentials(request.user, password)) {
            // Retrieve the existing user data
            const existingUser = await userService.getUserById(request.params.id);

            // Update only the changed fields
            const updatedUser = {
                name: name || existingUser.name,
                username: username || existingUser.username,
                email: email || existingUser.email,
                // Add other fields as needed
            };

            const user = await userService.updateUserDetails(request.params.id, updatedUser);
            setResponse(user, response);
        } else {
            setErrorResponse(401, "Unauthorized", response);
        }
    } catch (err) {
        if (err.name === "CastError" && err.kind === "ObjectId") {
            setErrorResponse(404, "User Not Found", response);
        } else {
            setErrorResponse(500, "Internal Server Error", response);
        }
    }
}



//function to take user details and verify his password
const validCredentials = async (user, password) => {
    return await bcrypt.compare(password, user.password);
}

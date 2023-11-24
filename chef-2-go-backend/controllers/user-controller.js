import * as userService from "../services/user-service.js";
import validator from "validator";
import { setResponse, setErrorResponse, setSignupError } from "./response-handler.js";
import { createToken } from "../utilities/token.js";
import { request, response } from "express";
export const loginUser = async (request, response) => {
    try {
        const { email, password, username } = request.body;
        console.log(`email: ${email}, password: ${password}`);
        const user = await userService.login(username,email, password);

        //creating token 
        const token = createToken(user._id);

        //sending token in response
        setResponse({ email, token }, response);
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
        setResponse({ email, token }, response);
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
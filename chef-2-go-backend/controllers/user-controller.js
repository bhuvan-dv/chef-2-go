import * as userService from "../services/user-service.js";
import validator from "validator";
import { setResponse, setErrorResponse, setSignupError } from "./response-handler.js";
import { createToken } from "../utilities/token.js";
export const loginUser = async (request, response) => {
    try {
        const { email, password } = request.body;
        console.log(`email: ${email}, password: ${password}`);
        const user = await userService.login(null,email, password);

        //creating token 
        const token = createToken(user._id);

        //sending token in response
        setResponse({ email, token }, response);
    } catch (err) {
        setErrorResponse(err, response);
    }
}

export const signupUser = async (request, response) => {
    const { name, username, email, password } = request.body;
    try {
        const user = await userService.signup(name, username, email, password);
        console.log(user);
        //creating token 
        const token = createToken((user._id).toString());
        console.log(`token: ${token}`);

        //sending token in response
        setResponse({ email, token }, response);
    } catch (err) {
        setSignupError(err, response);
    }
}

export const searchChef = async (request, response) =>{
    const {searchByCat, searchTerm} = request.body;
    try {
        if (searchByCat === "username") {
            const chef = await userService.searchChefByUserName(searchTerm);
            console.log(`chef: ${chef}`);
            setResponse(chef,response);
        }
        else if(searchByCat === "name"){
            const chefs = await userService.searchChefsbyName(searchTerm);
            setResponse(chefs,response);
        }
    } catch (error) {
        
    }
}
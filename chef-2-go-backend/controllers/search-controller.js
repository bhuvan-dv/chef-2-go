import * as searchService from "../services/search-service.js";
import { setResponse, setErrorResponse, setSignupError } from "./response-handler.js";

export const searchChef = async (request, response) =>{
    const {searchByCat, searchTerm} = request.body;
    try {
        if (searchByCat === "username") {
            const chef = await searchService.searchChefByUserName(searchTerm);
            console.log(`chef: ${chef}`);
            setResponse(chef,response);
        }
        else if(searchByCat === "name"){
            const chefs = await searchService.searchChefsbyName(searchTerm);
            setResponse(chefs,response);
        }
    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx

            const statusCode = error.response.status;
            const errorMessage = error.response.data;

            if (statusCode === 404) {
                setErrorResponse(404, "Resource Not Found", response);
            } else if (statusCode === 401) {
                setErrorResponse(401, "Unauthorized", response);
            } else if (statusCode === 403) {
                setErrorResponse(403, "Forbidden", response);
            } else {
                setErrorResponse(statusCode, errorMessage, response);
            }
        } else if (error.request) {
            // The request was made but no response was received
            setErrorResponse(500, "Internal Server Error", response);
        } else {
            // Something happened in setting up the request that triggered an Error
            setErrorResponse(500, "Internal Server Error", response);
        }
    }
}
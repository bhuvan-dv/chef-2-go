// API controllers using ingredient service and response handlers

import {save, find} from "../services/ingredient-service.js";

import { setErrorResponse, setResponse } from "./response-handler.js";


// Get an ingredient by ID
export const get = async (request, response) => {
  try {
    // const id = request.params.id;
    const ingrident = await find();
    setResponse(ingrident, response);
  } catch (error) {
    console.log(`req: ${request}`)
    setErrorResponse(error, response);
  }
};

// Create a new ingredient
export const post = async (request, response) => {
  try {
    console.log(request.body);
    const newingredient = { ...request.body };
    console.log(`entered here:::`);
    const ingrident = await save(newingredient);
    console.log(ingrident);
    setResponse(ingrident, response);
  } catch (error) {
    console.log(`req post controller: ${JSON.stringify(request.body)}`)
    console.log(`req post controller: ${JSON.stringify(error)}`)
    setErrorResponse(error, response);
  }
};

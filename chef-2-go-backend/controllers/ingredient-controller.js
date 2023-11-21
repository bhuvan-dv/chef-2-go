// API controllers using ingredient service and response handlers

import * as ingredientService from "../services/ingredient-service.js";

import { setErrorResponse, setResponse } from "./response-handler.js";


// Get an ingredient by ID
export const get = async (request, response) => {
  try {
    const id = request.params.id;
    const ingrident = await ingredientService.findById(id);
    setResponse(ingrident, response);
  } catch (error) {
    setErrorResponse(error, response);
  }
};

// Create a new ingredient
export const post = async (request, response) => {
  try {
    console.log(request.body);
    const newingredient = { ...request.body };
    const ingrident = await ingredientService.save(newingredient);
    console.log(ingrident);
    setResponse(ingrident, response);
  } catch (error) {
    setErrorResponse(error, response);
  }
};

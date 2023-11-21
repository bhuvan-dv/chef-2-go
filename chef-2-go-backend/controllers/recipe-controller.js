/**
 * Recipe Controller
 * This module contains the controllers for handling HTTP requests related to recipes.
 * It interacts with the recipe service to perform CRUD operations.
 */

// Importing the recipe service and response handler
import * as recipeService from '../services/recipe-service.js';

import { setResponse, setErrorResponse } from './response-handler.js'

//Retrieve a list of recipes based on query parameters
export const find = async (request, response) => {
    try {
        const params = { ...request.query };
        const recipes = await recipeService.search(params);
        setResponse(recipes, response);
    } catch (err) {
        setErrorResponse(err, response);
    }
}

//Retrieve a single recipe by its ID
export const get = async (request, response) => {
    try {
        const id = request.params.id;
        const recipe = await recipeService.find(id);
        setResponse(recipe, response);
    } catch (err) {
        setErrorResponse(err, response);
    }
}

//Create a new recipe
export const post = async (request, response) => {
    try {
        const newRecipe = { ...request.body };
        const recipe = await recipeService.save(newRecipe);
        setResponse(recipe, response);
    }
    catch (err) {
        setErrorResponse(err, response);
    }
}

//Update a recipe by its ID
export const put = async (request, response) => {
    try {
        const id = request.params.id;
        const updatedRecipe = { ...request.body };
        const recipe = await recipeService.update(updatedRecipe, id);
        setResponse(recipe, response);
    } catch (err) {
        setErrorResponse(err, response);
    }
}

//Partially update a recipe by its ID
export const patch = async (request, response) => {
    try {
        const id = request.params.id;
        const updatedRecipe = { ...request.body };
        const recipe = await recipeService.update(updatedRecipe, id);
        setResponse(recipe, response);
    } catch (err) {
        setErrorResponse(err, response);
    }
}

//Delete a recipe by its ID
export const remove = async (request, response) => {
    try {
        const id = request.params.id;
        const recipe = await recipeService.remove(id);
        setResponse({}, response);
    } catch (err) {
        setErrorResponse(err, response);
    }
}
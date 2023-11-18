import * as recipeService from '../services/recipe-service.js';

import { setResponse, setErrorResponse } from './response-handler.js'

export const find = async (request, response) => {
    try {
        const params = { ...request.query };
        const recipe = await recipeService.search(params);
        setResponse(recipe, response);
    } catch (err) {
        setErrorResponse(err, response);
    }
}

export const get = async (request, response) => {
    try {
        const id = request.params.id;
        const recipe = await recipeService.findById(id);
        setResponse(recipe, response);
    } catch (err) {
        setErrorResponse(err, response);
    }
}

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

export const remove = async (request, response) => {
    try {
        const id = request.params.id;
        const recipe = await recipeService.remove(id);
        setResponse({}, response);
    } catch (err) {
        setErrorResponse(err, response);
    }
}
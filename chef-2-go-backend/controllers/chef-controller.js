/**
 * Chef Controller
 * This module contains the controllers for handling HTTP requests related to chefs.
 * It interacts with the chef service to perform CRUD operations.
 */

// Importing the chef service 
import * as chefService from '../services/chef-service.js';

//Retrieve a list of chefs based on query parameters
export const find = async (request, response) => {
    try {
        const params = { ...request.query };
        const chef = await chefService.search(params);
        response.status(200)
            .json(chef);
    } catch (err) {
        response.status(404)
            .json({
                code: "Error",
                message: "No Chefs Found"
            })
    }
}

export const findAll = async (req, res) => {
    try {
        const chefs = await chefService.findAll();
        res.status(200).json(JSON.stringify(chefs))
    } catch (error) {
        console.log(error.message);
    }
}

//Retrieve a single chef by its ID
export const get = async (request, response) => {
    try {
        const id = request.params.id;
        const chef = await recipeService.find(id);
        response.status(200)
            .json(chef);
    } catch (err) {
        response.status(404)
            .json({
                code: "Error",
                message: "Chef Not Found"
            })
    }
}

//Create a new Chef
export const post = async (request, response) => {
    try {
        console.log(`body: ${request}`);
        const newChef = { ...request.body };
        console.log(`recipe: ${newChef}`);
        const chef = await chefService.save(newChef);
        response.status(200)
            .json(chef);
    } catch (err) {
        response.status(401)
            .json({
                code: "Error",
                message: "Unauthorized request"
            })
    }
}

//Update a chef by its ID
export const put = async (request, response) => {
    try {
        const id = request.params.id;
        const updatedChef = { ...request.body };
        const chef = await chefService.update(updatedChef, id);
        response.status(200)
            .json(chef);
    } catch (err) {
        response.status(400)
            .json({
                code: "Error",
                message: "Invalid Input"
            })
    }
}

//Delete a chef by its ID
export const remove = async (request, response) => {
    try {
        const id = request.params.id;
        const chef = await chefService.remove(id);
        response.status(200)
            .json(chef);
    } catch (err) {
        response.status(404)
            .json({
                code: "Error",
                message: "Chef not Found"
            })
    }
}
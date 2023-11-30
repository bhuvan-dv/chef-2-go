//importing service for handling operations in between response and request cycle
import * as commentService from "../services/comment-service.js"
import { setErrorResponse, setResponse } from "./response-handler.js"

//function to find comments based on ID
export const find = async (request, response) => {
    try {
        const id = request.params.id;
        const comment = await commentService.findComment(id);
        setResponse(comment, response);
    } catch (error) {
        setErrorResponse(error, response);
    }
}

//function to create a new comment, sending the comment object present in request.body
export const post = async (request, response) => {
    try {
        const newComment = { ...request.body };
        const comment = await commentService.createComment(newComment);
        setResponse(comment, response);
    } catch (error) {
        setErrorResponse(error, response);
    }
}

//function to update an Existing comment, sending the updating comment from request.body
export const put = async (request, response) => {
    try {
        const id = request.params.id;
        const updateComment = { ...request.body };
        const comment = await commentService.updateComment(updateComment,id);
        setResponse(comment, response);
    } catch (error) {
        setErrorResponse(error, response);
    }
}

//function to delete an exisiting comment based on ID
//function named deleteCom because 'delete' is not allowed as a variable declaration name.
export const remove = async (request, response) => {
    try {
        const deleteCommentID = request.params.id;
        const comment = await commentService.deleteComment(deleteCommentID);
        setResponse({ del: "comment deleted Successfully" }, response);
    } catch (error) {
        setErrorResponse(error, response);
    }
}
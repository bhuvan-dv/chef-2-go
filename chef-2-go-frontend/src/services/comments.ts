import axiosInstance from "./axios";
import Comment from "../models/comment";
let recipe_path: string = "recipes/";
let comment_path: string = "comments/"

const getComments = async <Comment>(_recipeid: string, _commentID: string): Promise<Comment[]> => {
    return axiosInstance.get(recipe_path + _recipeid + comment_path + _commentID);
}

const createNewComments = async <T>(_recipeid: string, _commentID: string, reqBody: Comment): Promise<T[]> => {
    return axiosInstance.post(recipe_path + _recipeid + comment_path + _commentID, reqBody);
}

const deleteComments = async <T>(_recipeid: string, _commentID: string): Promise<T[]> => {
    return axiosInstance.post(recipe_path + _recipeid + comment_path + _commentID);
}

const updateComments = async <T>(_recipeid: string, _commentID: string): Promise<T[]> => {
    return axiosInstance.post(recipe_path + _recipeid + comment_path + _commentID);
}

export { getComments, createNewComments, deleteComments, updateComments };
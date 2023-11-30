//importing comment model for performing CRUD operations based on designed Comment schema
import Comment from "../models/comment-model.js";

//function to find a particular comment based on ID
export const findComment = async (id) => {
    const comment = await Comment.findById(id).exec();
    return comment;
}

//function to update a specific comment by by passing new comment and id
export const updateComment = async (updatedComment, id) => {
    //by default it returns the previous comment before updation
    //in order to force new pdated comment we use options as a additional parameter with returnDocument value after
    let options={returnDocument:'after'};
    const comment = await Comment.findByIdAndUpdate(id, updatedComment,options).exec();
    return comment;
}

//function to delete a specific comment based on ID
export const deleteComment = async (id) => {
    const comment = await Comment.findById(id).exec();
    if(!comment){
       return "Comment does not exists";
    } else{
        return await Comment.findByIdAndDelete(id).exec();
    }
}

//funciton to create a new comment by passign newComment object
export const createComment = async (newComment) => {
    const comment = new Comment(newComment);
    return await comment.save();
}
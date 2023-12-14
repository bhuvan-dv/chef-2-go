import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const commentSchema = new Schema(
    /**
 * Comment schema to define the structure of Comment documents in MongoDB.
 */
    
    {
        message: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        updatedAt: {
            type: Date,
            default: Date.now
        },
        userId: {
            type: String,
            required: true
        },
        recipeId: {
            type: String,
            required: true
        },
        parent: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment',
            default: null
        },
        children: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }],
        parentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        },
    },
    {
        versionKey: false,
    });

const CommentModel = mongoose.model('Comment', commentSchema);

export default CommentModel;

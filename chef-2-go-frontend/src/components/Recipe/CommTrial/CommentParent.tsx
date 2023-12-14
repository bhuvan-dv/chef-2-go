// import Comment from '../../models/comment'
import React, { useState } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

export type Comment = {
    id: string;
    text: string;
    editable: boolean;
};

const CommentParent: React.FC = () => {
    const [comments, setComments] = useState<Comment[]>([]);
 /**
   * State to manage the list of comments.
   */
    const handleSubmit = (text: string) => {
        const newComment = { id: `${Date.now()}`, text, editable: true };
        setComments([...comments, newComment]);
    };
/**
   * Render the CommentParent component with CommentList and CommentInput.
   */
    return (
        <div className='main-comment-container'>
            <CommentList comments={comments} setComments={setComments} />
            <CommentInput onSubmit={handleSubmit} />
        </div>
    );
};

export default CommentParent;

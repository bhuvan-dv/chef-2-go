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

    const handleSubmit = (text: string) => {
        const newComment = { id: `${Date.now()}`, text, editable: true };
        setComments([...comments, newComment]);
    };

    return (
        <div className='main-comment-container'>
            <CommentList comments={comments} setComments={setComments} />
            <CommentInput onSubmit={handleSubmit} />
        </div>
    );
};

export default CommentParent;

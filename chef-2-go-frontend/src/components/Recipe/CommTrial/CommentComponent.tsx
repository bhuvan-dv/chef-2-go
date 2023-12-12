import React, { useState } from 'react';
import { Avatar, Typography, Box, Divider, TextField, Button } from '@mui/material';
// import Comment from '../../models/comment';
type Comment = {
    id: string;
    text: string;
    user: string;
    timestamp: string;
};

type CommentProps = {
    comments: Comment[];
};

const CommentComponent: React.FC<CommentProps> = ({ comments }) => {
    const [newComment, setNewComment] = useState<string>(''); // State for new comments
    const [editCommentId, setEditCommentId] = useState<string | null>(null); // State to track comment being edited
    let token=localStorage.getItem("token");
    let user=localStorage.getItem("user");
    const handleAddComment = () => {
        if (newComment.trim() !== '') {
            const newCommentObject: Comment = {
                id: (comments.length + 1).toString(), // Convert to string
                text: newComment,
                user: 'User',
                timestamp: new Date().toLocaleString(),
            };

            console.log(newCommentObject);
            
            setNewComment('');
            
        }
    };

    const handleEditComment = (commentId: string) => {
        setEditCommentId(commentId);
        
    };

    return (
        <Box>
            {comments.map((comment) => (
                <Box key={comment.id}>
                    <Avatar alt={comment.user} src={`https://i.pravatar.cc/150?u=${comment.user}`} />
                    <Box ml={2}>
                        <Typography variant="subtitle1" color="textPrimary" gutterBottom>
                            {comment.user}
                        </Typography>
                        {editCommentId === comment.id ? (
                            
                            <TextField
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                label="Edit Comment"
                                variant="outlined"
                            />
                        ) : (
                            <Typography variant="body1" color="textSecondary" gutterBottom>
                                {comment.text}
                            </Typography>
                        )}
                        <Typography variant="caption" color="textSecondary">
                            {comment.timestamp}
                        </Typography>
                        {editCommentId === comment.id ? (
                            
                            <Button onClick={() => handleEditComment(editCommentId === null ? '0' : editCommentId)}>
                                Save
                            </Button>

                        ) : (
                            
                            <Button onClick={() => handleEditComment(comment.id)}>Edit</Button>
                        )}
                    </Box>
                    <Divider />
                </Box>
            ))}

            {/* Add Comment */}
            <TextField
                value={newComment}
                onChange={(e) =>{setNewComment(e.target.value)}}
                label="Add a Comment"
                variant="outlined"
            />
            <Button onClick={handleAddComment}>Add Comment</Button>
        </Box>
    );
};

export default CommentComponent;

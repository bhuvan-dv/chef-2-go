import React from 'react'
import { Comment } from "./CommentParent";
import { Input } from '@mui/material';

/**
 * CommentList component displays a list of comments with edit and delete functionality.
 *
 * @component
 * @example
 * // Example usage of the CommentList component
 * const CommentsPage: FC = () => {
 *   const [comments, setComments] = useState<Comment[]>([
 *     { id: '1', text: 'This is a comment', editable: false },
 *     // Add more comment objects
 *   ]);
 *
 *   return (
 *     <div>
 *       <CommentList comments={comments} setComments={setComments} />
 *     </div>
 *   );
 * };
 *
 * @param {object} props - The properties of the CommentList component.
 * @param {Array} props.comments - An array of comment objects containing id, text, and editable properties.
 * @param {Function} props.setComments - A function to update the comments state.
 * @returns {TSX.Element} - The rendered CommentList component.
 */
type CommentListProps = {
    comments: Comment[];
    setComments: (comments: Comment[]) => void;
}
const CommentList: React.FC<CommentListProps> = ({ comments, setComments }) => {
    const handleEdit = (commentId: string) => {
        setComments(
            comments.map((comment) => {
                if (comment.id === commentId) {
                    return { ...comment, editable: true };
                }
                return comment;
            })
        )
    }

    const handleSave = (commentId: string, newText: string) => {
        setComments(
            comments.map((comment) => {
                if (comment.id === commentId) {
                    return { ...comment, text: newText, editable: true };
                }
                return comment;
            })
        )
    }

    const handleDelete = (commentId: string) => {
        setComments(comments.filter((comment) => comment.id !== commentId))
    }
    return (
        <div>{comments.map((comment) => (
            <div key={comment.id}>
                {comment.editable ? (
                    <div className='textarea-button-container'>
                        <Input value={comment.text}
                            className='comment-container'
                            onChange={(e) => {
                                setComments(
                                    comments.map((c) =>
                                        c.id === comment.id ? { ...c, text: e.target.value } : c
                                    )
                                )
                            }}
                        />
                        
                        <div className='edit-delete-container'>
                            <button onClick={() => handleSave(comment.id, comment.text)}>Save</button>
                            <button className='button-delete'>Delete</button>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className='comment-container'>{comment.text}</div>
                        <button onClick={() => handleEdit(comment.id)}>Edit</button>
                        <button className='button-delete' onClick={() => handleDelete(comment.id)}>Delete</button>
                    </>
                )}
            </div>
        ))}</div>
    )
}

export default CommentList
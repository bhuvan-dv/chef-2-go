import React, { useState } from 'react'
import Input from '@mui/material/Input';
type CommentInputProps = {
    onSubmit: (tect: string) => void;
}
const CommentInput: React.FC<CommentInputProps> = ({onSubmit}) => {
    const [text,setText]=useState<string>("");

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        onSubmit(text);
        setText("");
    }

    return (
        <form>
            <Input 
            value={text} 
            onChange={(e)=>setText(e.target.value)}
            className='input-box'
            ></Input>
            <button className='comment-button'>Submit</button>
        </form>
    )
}

export default CommentInput
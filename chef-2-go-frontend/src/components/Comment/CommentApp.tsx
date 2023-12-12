import React, { useState } from "react";
import Comment from "../Comment/Comment";
import useNode from "./useNode";
import "./comment.css";
import CommentProps from "./commentProps";

type CommentData = {
    id: number;
    name: string; // Add the 'name' property
    items: any[]; // Define the structure of items as needed
};

const comments: CommentData = {
    id: 1,
    name: "Initial Comment", // Add a sample name
    items: [],
};
interface NodeFunctions {
    insertNode: (tree: any, commentId: any, item: any) => any;
    editNode: (tree: any, commentId: any, value: any) => any;
    deleteNode: (tree: any, id: any) => any;
}

const App: React.FC = () => {
    const [commentsData, setCommentsData] = useState<CommentData>(comments);

    const { insertNode, editNode, deleteNode }: NodeFunctions = useNode();

    const handleInsertNode = (folderId: number, item: any) => {
        const finalStructure = insertNode(commentsData, folderId, item);
        setCommentsData(finalStructure);
    };

    const handleEditNode = (folderId: number, value: any) => {
        const finalStructure = editNode(commentsData, folderId, value);
        setCommentsData(finalStructure);
    };

    const handleDeleteNode = (folderId: number) => {
        const finalStructure = deleteNode(commentsData, folderId);
        const temp: CommentData = { ...finalStructure };
        setCommentsData(temp);
    };

    const commentProps: CommentProps = {
        handleInsertNode,
        handleEditNode,
        handleDeleteNode,
        comment: commentsData,
    };

    return (
        <>
            <div className="CommentApp">
                <Comment {...commentProps} />
            </div>
        </>
    );
};

export default App;

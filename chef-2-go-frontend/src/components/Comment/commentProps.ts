// CommentProps.ts
type CommentData = {
    id: number;
    name: string; // Add the 'name' property
    items: any[]; // Define the structure of items as needed
};


type CommentProps = {
    handleInsertNode: (folderId: number, item: any) => void;
    handleEditNode: (folderId: number, value: any) => void;
    handleDeleteNode: (folderId: number) => void;
    comment: CommentData; // Define CommentData type as needed
};

export default CommentProps;

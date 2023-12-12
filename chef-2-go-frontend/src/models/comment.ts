interface Comment {
    id?:string,
    message: string;
    createdAt: string;
    updatedAt: string;
    userId: string;
    recipeId: string;
    parent?: string |null;
    children?: Comment[];
    parentId?:string;
}

export const Comments: Comment[] = [
    {
        "id": "65779737a10df8ad231aff8c",
        "message": "dosa is good",
        "userId": "655c4209029e3dbe13f022d2",
        "recipeId": "655cefa88ac7ca21542f212f",
        "parent": null,
        "children": [],
        "createdAt": "2023-12-11T23:11:51.468Z",
        "updatedAt": "2023-12-11T23:11:51.468Z"
    }
]
export default Comment;
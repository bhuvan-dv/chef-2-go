type CommentItem = {
    id: number;
    name: string;
    items: CommentItem[];
};

type NodeFunctions = {
    insertNode: (tree: CommentItem, commentId: number, item: string) => CommentItem;
    editNode: (tree: CommentItem, commentId: number, value: string) => CommentItem;
    deleteNode: (tree: CommentItem, id: number) => CommentItem;
};

const useNode = (): NodeFunctions => {
    const insertNode = (tree: CommentItem, commentId: number, item: string): CommentItem => {
        if (tree.id === commentId) {
            tree.items.push({
                id: new Date().getTime(),
                name: item,
                items: [],
            });

            return tree;
        }

        let latestNode: CommentItem[] = [];
        latestNode = tree.items.map((ob) => {
            return insertNode(ob, commentId, item);
        });

        return { ...tree, items: latestNode };
    };

    const editNode = (tree: CommentItem, commentId: number, value: string): CommentItem => {
        if (tree.id === commentId) {
            tree.name = value;
            return tree;
        }

        tree.items.forEach((ob) => {
            return editNode(ob, commentId, value);
        });

        return { ...tree };
    };

    const deleteNode = (tree: CommentItem, id: number): CommentItem => {
        for (let i = 0; i < tree.items.length; i++) {
            const currentItem = tree.items[i];
            if (currentItem.id === id) {
                tree.items.splice(i, 1);
                return tree;
            } else {
                deleteNode(currentItem, id);
            }
        }
        return tree;
    };

    return { insertNode, editNode, deleteNode };
};

export default useNode;

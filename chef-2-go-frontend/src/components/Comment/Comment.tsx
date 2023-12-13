import React, { useState, useRef, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
    TextField,
    Box,
    Typography,
    IconButton,
    Button,
} from "@mui/material";
import { ReactComponent as DownArrowIcon } from "./down-arrow.svg";
import { ReactComponent as UpArrowIcon } from "./up-arrow.svg";

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "0",
                    padding: "8px 16px",
                },
            },
        },
    },
    typography: {
        fontSize: 18,
        fontFamily: "Morion",
        button: {
            fontSize: '1rem',
            textTransform: 'none',
        },
    },
    palette: {
        secondary: {
            main: "#38524f",
            light: "hsl(43, 21%, 94%)",
        },
    },
});

type CommentProps = {
    handleInsertNode: (folderId: number, item: string) => void;
    handleEditNode: (folderId: number, value: string) => void;
    handleDeleteNode: (folderId: number) => void;
    comment: {
        id: number;
        name: string;
        items?: any[];
    };
};

const Comment: React.FC<CommentProps> = ({
    handleInsertNode,
    handleEditNode,
    handleDeleteNode,
    comment,
}) => {
    const [input, setInput] = useState("");
    const [editMode, setEditMode] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const [expand, setExpand] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef?.current?.focus();
    }, [editMode]);

    const handleNewComment = () => {
        setExpand(!expand);
        setShowInput(true);
    };

    const onAddComment = () => {
        if (editMode) {
            handleEditNode(comment.id, inputRef?.current?.innerText || "");
        } else {
            setExpand(true);
            handleInsertNode(comment.id, input);
            setShowInput(false);
            setInput("");
        }

        if (editMode) setEditMode(false);
    };

    const handleDelete = () => {
        handleDeleteNode(comment.id);
    };

    return (
        <ThemeProvider theme={theme}>
            <div>
                <div className={comment.id === 1 ? "inputContainer" : "commentContainer"} style={{ backgroundColor:"hsl(43, 21%, 94%)"}}>
                    {comment.id === 1 ? (
                        <>
                            <TextField
                                type="text"
                                className="inputContainer__input first_input"
                                // autoFocus
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="type..."
                                sx={{
                                    color: theme.palette.secondary.main,
                                    backgroundColor: theme.palette.secondary.light,
                                }}
                            />

                            <IconButton onClick={onAddComment} sx={{
                                borderRadius: "0",
                                padding: "8px 16px",
                                fontSize: "14px",
                                color: theme.palette.secondary.main,
                                backgroundColor: theme.palette.secondary.light,
                            }}>
                                COMMENT
                            </IconButton>
                        </>
                    ) : (
                        <>
                            <Typography
                                contentEditable={editMode}
                                suppressContentEditableWarning={editMode}
                                ref={inputRef}
                                style={{ wordWrap: "break-word" }}
                                sx={{
                                    color: theme.palette.secondary.main,
                                    backgroundColor: theme.palette.secondary.light,
                                }}
                            >
                                {comment.name}
                            </Typography>

                            <Box style={{ display: "flex", marginTop: "5px" }}>
                                {editMode ? (
                                    <>
                                            <IconButton onClick={onAddComment} sx={{
                                                borderRadius: "0",
                                                padding: "8px 16px",
                                                fontSize: "14px",
                                                color: theme.palette.secondary.main,
                                                backgroundColor: theme.palette.secondary.light,
                                            }}>
                                            SAVE
                                        </IconButton>
                                        <IconButton
                                            onClick={() => {
                                                if (inputRef.current)
                                                    inputRef.current.innerText = comment.name;
                                                setEditMode(false);
                                            }}
                                                sx={{
                                                    borderRadius: "0",
                                                    padding: "8px 16px",
                                                    fontSize: "14px",
                                                    color: theme.palette.secondary.main,
                                                    backgroundColor: theme.palette.secondary.light,
                                                }}
                                        >
                                            CANCEL
                                        </IconButton>
                                    </>
                                ) : (
                                    <>
                                                <IconButton onClick={handleNewComment} sx={{
                                                    borderRadius: "0",
                                                    padding: "8px 16px",
                                                    fontSize: "14px",
                                                    color: theme.palette.secondary.main,
                                                    backgroundColor: theme.palette.secondary.light,
                                                }}>
                                                    {expand ? <UpArrowIcon style={{ height: "10px", width: "10px" }} /> : <DownArrowIcon style={{ height: "10px", width: "10px" }} />} REPLY
                                        </IconButton>
                                        <IconButton
                                            onClick={() => {
                                                setEditMode(true);
                                            }}
                                                    sx={{
                                                        borderRadius: "0",
                                                        padding: "8px 16px",
                                                        fontSize: "14px",
                                                        color: theme.palette.secondary.main,
                                                        backgroundColor: theme.palette.secondary.light,
                                                    }}
                                        >
                                            EDIT
                                        </IconButton>
                                                <IconButton onClick={handleDelete} sx={{
                                                    borderRadius: "0",
                                                    padding: "8px 16px",
                                                    fontSize: "14px",
                                                    color: theme.palette.secondary.main,
                                                    backgroundColor: theme.palette.secondary.light,
                                                }}>
                                            DELETE
                                        </IconButton>
                                    </>
                                )}
                            </Box>
                        </>
                    )}
                </div>

                <div style={{ display: expand ? "block" : "none", paddingLeft: 25, backgroundColor:"hsl(43, 21%, 94%)"}}>
                    {showInput && (
                        <div className="inputContainer">
                            <TextField
                                type="text"
                                className="inputContainer__input"
                                // autoFocus
                                onChange={(e) => setInput(e.target.value)}
                                sx={{
                                    color: theme.palette.secondary.main,
                                    backgroundColor: theme.palette.secondary.light,
                                }}
                            />
                            <IconButton onClick={onAddComment} sx={{
                                borderRadius: "2px solid #38524f",
                                padding: "8px 16px",
                                fontSize: "14px",
                                color: theme.palette.secondary.main,
                                backgroundColor: theme.palette.secondary.light,
                            }}>
                                REPLY
                            </IconButton>
                            <IconButton
                                onClick={() => {
                                    setShowInput(false);
                                    if (!comment?.items?.length) setExpand(false);
                                }}
                                sx={{
                                    borderRadius: "0",
                                    padding: "8px 16px",
                                    fontSize: "14px",
                                    color: theme.palette.secondary.main,
                                    backgroundColor: theme.palette.secondary.light,
                                }}
                            >
                                CANCEL
                            </IconButton>
                        </div>
                    )}

                    {comment?.items?.map((cmnt, index) => (
                        <Comment
                            key={index}
                            handleInsertNode={handleInsertNode}
                            handleEditNode={handleEditNode}
                            handleDeleteNode={handleDeleteNode}
                            comment={cmnt}
                        />
                    ))}
                </div>
            </div>
        </ThemeProvider>
    );
};

export default Comment;

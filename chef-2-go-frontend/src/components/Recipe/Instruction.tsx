import React from 'react';
import { List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
type RecipeProps = {
    instructions?: string[]
};

const theme = createTheme({
    components: {
        MuiButton: {
        }
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
            dark: "hsl(43, 21%, 94%)",
            light: "hsl(43, 21%, 94%)"
        }
    }
});

const Instruction = (props: RecipeProps) => {
    return (
        <ThemeProvider theme={theme}>
            <Paper elevation={3} style={{ padding: '20px', backgroundColor: "hsl(43, 21%, 94%)" }}>
                <Typography variant="h4" gutterBottom sx={{ fontFamily: "Morion", color: "secondary.main" }}>
                    How to make it
                </Typography>
                <List sx={{ backgroundColor: "secondary.light" }}>
                    {props?.instructions?.map((instruction, index) => (
                        <ListItem key={index}>
                            <ListItemText
                                primary={`Step ${index + 1}`}
                                secondary={instruction}
                                primaryTypographyProps={{ variant: 'overline', fontFamily: "Morion", color: "secondary.main" }} // Customize primary text font size
                                secondaryTypographyProps={{ variant: 'body1', fontFamily: "Morion", color: "secondary.main" }} // Customize secondary text font size
                            />
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </ThemeProvider>
    );
};

export default Instruction;

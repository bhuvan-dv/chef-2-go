import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { RecipeSummary, IngridentsList } from './recipeCss';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button, colors } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { useSpring, animated } from '@react-spring/web';
import DenseTable from './DenseTable';
import Ingredient from '../../models/ingredient';

type IngredientProps = {
    ingredients: Ingredient[];
};

const style = {
    width: '100%',
    font: "Morion"
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
            light:"hsl(43, 21%, 94%)"
        }
    }
});

interface FadeProps {
    children: React.ReactElement;
    in?: boolean;
    onClick?: any;
    onEnter?: (node: HTMLElement, isAppearing: boolean) => void;
    onExited?: (node: HTMLElement, isAppearing: boolean) => void;
    ownerState?: any;
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
    const {
        children,
        in: open,
        onClick,
        onEnter,
        onExited,
        ownerState,
        ...other
    } = props;
    const modalstyle = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter(null as any, true);
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited(null as any, true);
            }
        },
    });

    return (
        <animated.div ref={ref} style={modalstyle} {...other}>
            {React.cloneElement(children, { onClick })}
        </animated.div>
    );
});

const boxstyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'hsl(43, 21%, 94%)',
    border: '2px solid #38524f',
    p: 4,
};

const Ingridents = (props: IngredientProps) => {
    const [secondary, setSecondary] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const ingredientElements = props.ingredients.map((ingredient, index) => (
        <ListItem key={index} style={IngridentsList} sx={{ fontFamily: 'Morion', fontWeight: 'medium' }}>
            <ListItemText primary={`${ingredient.name}`} secondary={secondary ? `${ingredient.quantity}-${ingredient.unitType}` : null} />
        </ListItem>
    ));

    return (
        <>
        <ThemeProvider theme={theme}>
            <div className='p-20'>
                <div className='flex justify-between'>
                    <h4 className='font-Morion text-3xl font-semibold' style={RecipeSummary}>Ingredients (serves four)</h4>
                    <Button variant="text" endIcon={<AddShoppingCartIcon />} sx={{ color: `secondary.main`, maxWidth: 'fit' }} onClick={handleOpen}>
                    </Button>
                </div>
                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={secondary}
                                onChange={(event) => setSecondary(event.target.checked)}
                                sx={{
                                    color: "secondary.main",
                                    '&.Mui-checked': {
                                        color: "secondary.main",
                                    },
                                }}
                            />
                        }
                        label="See Quanity"
                    />
                </FormGroup>
                <List sx={style} component="nav" aria-label="mailbox folders" >
                    {ingredientElements}
                </List>
            </div>
            <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        TransitionComponent: Fade,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={boxstyle}>
                        <Typography id="spring-modal-title" variant="h6" component="h2" sx={{textAlign:"center"}}>
                            Find Ingridents for this Recipe from local Retailers
                        </Typography>
                        <Typography id="spring-modal-description" sx={{ mt: 2, textAlign:"center"}}>
                                <DenseTable ></DenseTable>
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </ThemeProvider>
        </>);

}

export default Ingridents;
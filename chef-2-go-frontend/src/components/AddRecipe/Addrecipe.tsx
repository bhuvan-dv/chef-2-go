import React from 'react';
import { Button, Modal, Box, Paper, ThemeProvider, createTheme, Card, Typography, CardContent, CardActions } from '@mui/material';
import Recipe from '../../models/Recipe';
import WomenCook from '../loader/WomenCook';
import { recipes } from '../../models/Recipe';
import { useNavigate } from 'react-router-dom';
import RecipeLoader from './RecipeLoader';
import { BorderAllOutlined } from '@mui/icons-material';
import { useSpring, animated } from '@react-spring/web';
import Backdrop from '@mui/material/Backdrop';
import RecipeForm from './RecipeForm';

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
  const style = useSpring({
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
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  );
});

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "80vw",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          textTransform: 'none',
        },
      },
    },
  },
  typography: {
    fontSize: 18,
    fontFamily: 'Morion',
  },
  palette: {
    secondary: {
      main: '#38524f',
      dark: 'hsl(43, 21%, 94%)',
      light: 'hsl(43, 21%, 94%)',
    },
  },
});

const Addrecipe = () => {
  //states for new recipe
  const [apiData, setApiData] = React.useState<Recipe | undefined>(undefined);
  const [chef, setChef] = React.useState();
  const navigate = useNavigate();

  //states for modals
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let token = localStorage.getItem('token');
  let userData = localStorage.getItem('User');

  let isChef: boolean = false;

  //todo Logic to parse user data
  let parseUserData = { role: 'chef' };

  if (parseUserData.role === 'chef') {
    //todo Add your logic for chef here
    isChef = true;
  }

  const handleClick = () => {
    navigate("/searchrecipe")
  }


  React.useEffect(() => {
    //todo APi Call
    return () => {
      // Clean up logic if needed
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div style={{ width: "100%" }}>
        <Paper elevation={3} sx={{ height: "75vh", width: "75vw", display: "flex", flexDirection: "row", margin: "5vh auto", flexBasis: "80%", bgcolor: "hsl(43, 21%, 94%)", justifyContent: "space-around" }}>
          <RecipeLoader />
          <div className='flex'>
            <Paper elevation={0} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", bgcolor: "hsl(43, 21%, 94%)" }}>
              <Card sx={{ minWidth: 400, backgroundColor: "secondary.dark" }} elevation={0}>
                <CardContent>
                  {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    
                  </Typography> */}
                  <Typography variant="body1" component="div" sx={{ display: "flex", alignContent: "center", justifyContent: "center" }}>
                    Inspire Someone to Cook today
                  </Typography>
                </CardContent>
                <CardActions sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  {isChef ?
                    <div className='flex justify-center align-middle'>
                      <Button variant="text" color="secondary" size="large" onClick={handleOpen} sx={{
                        bgcolor: theme.palette.secondary.main, color: theme.palette.secondary.dark,
                        border: '1px solid transparent', // Initial border style
                        transition: 'border-color 0.3s ease', // Smooth transition on hover
                        '&:hover': {
                          backgroundColor: theme.palette.secondary.dark,
                          cursor: 'pointer',
                          color: theme.palette.secondary.main,
                          borderColor: theme.palette.secondary.main,
                        },
                      }}>
                        Add Recipe
                      </Button>
                    </div>
                    :
                    <>
                      <Button variant="text" color="secondary" size="large" onClick={handleClick} sx={{}}>
                        Checkout other Delicious recipes?
                      </Button>
                    </>
                  }
                </CardActions>
              </Card>
            </Paper>
          </div>
        </Paper>
        <div>
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
              <Box sx={style}>
                <Typography id="spring-modal-title" variant="h5" component="h2" sx={{ textAlign: "center" }} gutterBottom>
                  Create Recipe
                </Typography>
                <RecipeForm onSubmit={function (recipe: Recipe): void {
                  throw new Error('Function not implemented.');
                }} />
              </Box>
            </Fade>
          </Modal>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Addrecipe;

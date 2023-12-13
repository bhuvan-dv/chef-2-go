import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from '../../store/slice/user-slice';
import { AppState } from '../../store/index';
import { Modal, Button, Box, TextField, Alert, Snackbar, Paper, Avatar, ThemeProvider, createTheme, Typography, Card, CardContent } from '@mui/material';
import { RegisterUser, deleteProfile, loginUserService, updateUserDetails } from '../../services/UserAPI';
import User from '../../models/user';
import storage from '../../Firebase/firebase'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from 'react-router-dom';
import Recipe from '../../models/Recipe';
import { get } from 'http';
import { getRecipesByChefId } from '../../services/recipe';
import ProfileLoader from '../../components/Profile/ProfileLoader';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { useSpring, animated } from '@react-spring/web';
import Backdrop from '@mui/material/Backdrop';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Loader from '../../components/loader/Loader';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../../components/Header/Header';
import SidebarNav from '../../components/SideBarNav/SidebarNav';
// import { v4} from 'uuid';

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
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ProfilePage = () => {
  const currentUser:any = useSelector((state: AppState) => state.users.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  // const [loader, setLoader] = useState(false);
  const [editedUser, setEditedUser] = useState(currentUser);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null | undefined>(null);
  const [newEmail, setNewEmail] = useState<string>(currentUser?.email || '');
  const [newUsername, setNewUsername] = useState<string>(currentUser?.username || '');
  const [newName, setNewName] = useState<string>(currentUser?.name || '');
  const [password, setPassword] = useState<string>('');
  const [open, setOpen] = React.useState(false);
  const [showPasswordRequired, setShowPasswordRequired] = useState(false);
  const [ChefRecipes, setChefRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    setEditedUser(currentUser);
  }, [currentUser]);

  useEffect(() => {
    if (currentUser?.role === 'chef') {
      console.log(`currentUser: ${currentUser?._id}`);

      getRecipesByChefId(currentUser?._id).then((response: any) => {
        console.log(`response: ${response.data}`);

        if (response) {
          setChefRecipes(response.data);
        }
      }
      );
    }
  }, []);
  const openEditModal = () => {
    setIsEditing(true);
  };

  const closeEditModal = () => {
    setIsEditing(false);
  };

  const openUploadModal = () => {
    setIsUploadModalOpen(true);
  };

  const closeUploadModal = () => {
    setIsUploadModalOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const handleSaveClick = async () => {
    try {
      if (password === '') {
        setShowPasswordRequired(true);
        return;
      }
      else {
        setShowPasswordRequired(false);
      }
      const newUserData: RegisterUser = {
        email: newEmail,
        username: newUsername,
        name: newName,
        password: password,
        role: "customer",
        _id: currentUser?._id || '',
        token: localStorage.getItem('token') || '',
        isVerified: true,

      }

      const updatedUser = await updateUserDetails(currentUser?._id, newUserData.token, newUserData);
      dispatch(setCurrentUser(updatedUser.data));
      setOpen(true);

      setIsEditing(false);
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setSelectedFile(file);
  };

  const handleUploadPhoto = async () => {
    try {
      // Your upload logic here...
      if (selectedFile === null || selectedFile === undefined) {
        return;
      }
      // setLoader(true);
      const storageRef = ref(storage, `profile/${selectedFile?.name}`);
      const response = await uploadBytesResumable(storageRef, selectedFile as Blob);
      const url = await getDownloadURL(ref(storage, `profile/${selectedFile?.name}`));
      console.log(url);
      const newUserData: RegisterUser = {
        email: currentUser?.email || '',
        username: currentUser?.username || '',
        name: currentUser?.name || '',
        password: currentUser?.password || '',
        role: currentUser?.role || 'customer',
        _id: currentUser?._id || '',
        token: localStorage.getItem('token') || '',
        isVerified: true,
        imageUrl: url
      }
      const updatedUser = await updateUserDetails(currentUser?._id, newUserData.token, newUserData);
      dispatch(setCurrentUser(updatedUser.data));

      setOpen(true);


      // setLoader(false);
      setIsUploadModalOpen(false);
    } catch (error) {
      console.error('Error uploading photo:', error);
    }
  }

  const handleAccountDelete = async () => {
    try {
      // alert('Are you sure you want to delete your account?');
      toast.warn('Are you sure you want to delete your account?', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      const id = currentUser?._id || '';
      const response = await deleteProfile(id);
      console.log(response);
      localStorage.removeItem('token');
      dispatch(setCurrentUser(null));
      navigate('/');
    } catch (error) {
      console.error('Error deleting account:', error);
    }
  }

  const handleAddRecipe = () => {
    navigate('/addrecipe');
  }
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

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  let [menuState, setMenuState] = React.useState(false);

  return (
    <ThemeProvider theme={theme}>
            <Header menuState={menuState} setMenuState={setMenuState}/>
        <SidebarNav menuState={menuState} setMenuState={setMenuState}/>
      <Paper className="border p-4 my-4 rounded-md bg-gray-100" sx={{ marginTop: "10vh", marginLeft: "10vw", marginRight: "10vw", }}>
        <Typography className="block" variant="h4" sx={{ textAlign: "center", paddingTop: 2 }} gutterBottom>
          Profile Management Hub
        </Typography>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            This is a success message!
          </Alert>
        </Snackbar>
        {/* <>
          {
            loader ? <Loader /> : <></>
          }
        </> */}
        <Box sx={{ display: "flex", justifyContent: "space-around", width: "80vw", margin: "auto auto", height: "70vh" }}>
          <ProfileLoader />
          <Paper className="" elevation={3}
            sx={{
              display: 'flex',
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              margin: "2em",
              border: "2px solid hsl(43, 21%, 94%)",
              transition: "border-color 0.2s ease-in-out",
              '&:hover': {
                borderColor: "hsl(43, 21%, 74%)",
              },
              width: "24em",
            }}>
            <Avatar
              className="w-16 h-16 rounded-full mb-4"
              src={currentUser?.imageUrl || 'default-profile-image-url'}
              alt="Profile"
              sx={{ width: 80, height: 80 }}
            />
            <Typography gutterBottom color={theme.palette.secondary.main} sx={{ fontFamily: "Morion", textAlign: "center" }}>
              <>Email:</> <>{currentUser?.email || 'N/A'}</>
            </Typography>
            <Typography>
              <>Username:</> <>{currentUser?.username || 'N/A'}</>
            </Typography>
            <Typography>
              <>Name:</> <>{currentUser?.name || 'N/A'}</>
            </Typography>
            <Button
              variant="contained"
              color="primary"
              className="mr-2"
              onClick={openEditModal}
              sx={{
                width: "12em",
                '&:hover': {
                },
              }}
            >
              Edit Details &nbsp; <EditNoteIcon />
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={openUploadModal}
              sx={{ width: "12em", }}
            >
              Upload Photo &nbsp;<UploadFileIcon />
            </Button>
            <Button
              variant='contained'
              color='error'
              sx={{ width: "12em", }}
              onClick={handleAccountDelete}>
              Delete Account &nbsp;<DeleteForeverIcon />
            </Button>
          </Paper>
        </Box>

        {/* Edit Details Modal */}
        <Modal
          open={isEditing}
          onClose={closeEditModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              TransitionComponent: Fade,
            },
          }}
        // sx={{height:"30%", width:"30%"}}
        >
          <Fade in={isEditing}>
            <Box sx={style}>
              <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <Typography sx={{ margin: 2 }} variant='h5'>Edit Your Details</Typography>
                <TextField
                  label="New Email"
                  variant="outlined"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  sx={{ margin: 2 }}
                />
                <TextField
                  label="New Username"
                  variant="outlined"
                  value={newUsername}
                  onChange={(e) => setNewUsername(e.target.value)}
                  sx={{ margin: 2 }}
                />
                <TextField
                  label="New Name"
                  variant="outlined"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  sx={{ margin: 2 }}
                />
                <TextField
                  label="Password"
                  variant="outlined"
                  type='password'
                  value={password}
                  required={true}
                  onChange={(e) => setPassword(e.target.value)}
                  error={showPasswordRequired}
                  helperText={showPasswordRequired ? 'Password is required' : ''}
                  sx={{
                    margin: 2,
                    '&:focus': {
                      borderColor: theme.palette.secondary.main,
                    },
                  }}
                />
              </Box>
              <Box sx={{ mt: 2, display: 'flex', justifyContent: "center", }}>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ mr: 2 }}
                  onClick={handleSaveClick}
                >
                  Save
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={closeEditModal}
                >
                  Cancel
                </Button>
              </Box>
            </Box>
          </Fade>
        </Modal>

        {/* Upload Photo Modal */}
        <Modal
          open={isUploadModalOpen}
          onClose={closeUploadModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              TransitionComponent: Fade,
            },
          }}

        >
          <Fade in={isUploadModalOpen}>
            <Box sx={style}>
              <Box sx={{ m: 2, display: 'flex', flexDirection: "column" }}>
                <Typography className="block" variant="body1" sx={{ textAlign: "center", margin: 4 }} gutterBottom>
                  Update Profile Picture
                </Typography>
                <Button component="label" variant="contained" startIcon={<CloudUploadIcon />} sx={{ margin: 2 }}>
                  Select Your Profile Picture
                  <VisuallyHiddenInput type="file" />
                </Button>
              </Box>
              <Box sx={{ m: 2, display: "flex", justifyContent: "space-evenly" }}>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ mr: 2 }}
                  onClick={handleUploadPhoto}
                >
                  Save
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={closeUploadModal}
                >
                  Cancel
                </Button>
              </Box>
            </Box>
          </Fade>
        </Modal>


        {/* Recipes specifically for chef */}
        <>
          {currentUser?.role === "chef" ?
            <Box>
              <Box>
                <Button onClick={handleAddRecipe}>Add Recipe</Button>
              </Box>
              <Paper>
                {currentUser?.role === 'chef' &&
                  <div>
                    <Typography variant='h6'>Recipes:</Typography>
                    {ChefRecipes && ChefRecipes.map((recipe: Recipe) => (
                      <Card key={recipe._id}>
                        <img src={recipe.imageUrl} alt="imgURl" />
                        <CardContent>Name: {recipe.name}</CardContent>
                        <CardContent>Summary: {recipe.summary}</CardContent>
                      </Card>
                    ))}
                  </div>
                }
              </Paper>
            </Box>
            :
            <></>
          }
        </>
      </Paper>
    </ThemeProvider>
  );
};

export default ProfilePage;

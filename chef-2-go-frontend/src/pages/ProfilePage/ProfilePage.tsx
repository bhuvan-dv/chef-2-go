import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from '../../store/slice/user-slice';
import { AppState } from '../../store/index';
import { Modal, Button, Box, TextField, Alert, Snackbar } from '@mui/material';
import { RegisterUser, updateUserDetails } from '../../services/UserAPI';
import User from '../../models/user';
import storage from '../../Firebase/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { v4} from 'uuid';

const ProfilePage: React.FC = () => {
  const currentUser = useSelector((state: AppState) => state.users.currentUser);
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(currentUser);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null | undefined>(null);
  const [newEmail, setNewEmail] = useState<string>(currentUser?.email || '');
  const [newUsername, setNewUsername] = useState<string>(currentUser?.username || '');
  const [newName, setNewName] = useState<string>(currentUser?.name || '');
  const [password, setPassword] = useState<string>('');
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setEditedUser(currentUser);
  }, [currentUser]);

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
        const newUserData : RegisterUser = {
            email: newEmail,
            username: newUsername,
            name: newName,
            password: password,
            role: "customer",
            _id: currentUser?._id || '',
            token: localStorage.getItem('token') || '',
            isVerified: true,

        }
        const updatedUser = await updateUserDetails(currentUser?._id,newUserData.token,newUserData);
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
      const storageRef = ref(storage, `profile/${selectedFile?.name}`);
      const response = await uploadBytesResumable(storageRef, selectedFile as Blob);
      const url = await getDownloadURL(ref(storage, `profile/${selectedFile?.name}`));
      console.log(url);
      const newUserData : RegisterUser = {
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
      const updatedUser = await updateUserDetails(currentUser?._id,newUserData.token,newUserData);
      dispatch(setCurrentUser(updatedUser.data));
      
      setOpen(true);

      

      setIsUploadModalOpen(false);
    } catch (error) {
      console.error('Error uploading photo:', error);
    }
  }

  return (
    <div className="border p-4 my-4 rounded-md bg-gray-100">
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
      <div className="flex flex-col items-center">
        <img
          className="w-16 h-16 rounded-full mb-4"
          src={currentUser?.imageUrl || 'default-profile-image-url'}
          alt="Profile"
        />
        <div className="flex mb-4">
          <Button
            variant="contained"
            color="primary"
            className="mr-2"
            onClick={openEditModal}
          >
            Edit Details
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={openUploadModal}
          >
            Upload Photo
          </Button>
        </div>
        <div>
          <strong>Email:</strong> {currentUser?.email}
        </div>
        <div>
          <strong>Username:</strong> {currentUser?.username}
        </div>
        <div>
          <strong>Name:</strong> {currentUser?.name || 'N/A'}
        </div>
      </div>

      {/* Edit Details Modal */}
      <Modal
        open={isEditing}
        onClose={closeEditModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{backgroundColor:"yellow"}}>
          <TextField
            label="New Email"
            variant="outlined"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
            <TextField
                label="New Username"
                variant="outlined"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
            />
            <TextField
                label="New Name"
                variant="outlined"
                value={newName}
                onChange={ (e) => setNewName(e.target.value)}
            />
            <TextField
                label="Password"
                variant="outlined"
                value={password}
                onChange={ (e) => setPassword(e.target.value)}
            />
          <div className="mt-4">
            <Button
              variant="contained"
              color="success"
              className="mr-2"
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
          </div>
        </Box>
      </Modal>

      {/* Upload Photo Modal */}
      <Modal
        open={isUploadModalOpen}
        onClose={closeUploadModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{backgroundColor:"yellow"}}>
          <label className="block">
            Upload Photo:
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
          </label>
          <div className="mt-4">
            <Button
              variant="contained"
              color="success"
              className="mr-2"
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
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ProfilePage;

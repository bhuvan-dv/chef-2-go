import React from 'react'
import { useSelector } from 'react-redux';
import { AppState } from '../../store';
import User from '../../models/user';

const ProfilePage = () => {
    const currentUser: User | undefined | null = useSelector((state: AppState) => state.users.currentUser);
    
  return (
    <div>
      <p>Name: {currentUser?.name}</p>
        <p>Email: {currentUser?.email}</p>
        <p>Username: {currentUser?.username}</p>
        
    </div>
  )
}

export default ProfilePage

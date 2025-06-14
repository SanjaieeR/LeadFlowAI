import React from 'react';
import { Typography, Box } from '@mui/material';
import { useAuth } from '../context/AuthContext';

const ProfilePage = () => {
  const { user } = useAuth();
  
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4">My Profile</Typography>
      <Typography variant="body1">Welcome, {user?.name}</Typography>
      {/* Add your profile content here */}
    </Box>
  );
};

export default ProfilePage;


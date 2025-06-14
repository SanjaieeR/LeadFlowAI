import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ textAlign: 'center', mt: 10 }}>
      <Typography variant="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h4" gutterBottom>
        Page Not Found
      </Typography>
      <Typography paragraph>
        The page you are looking for doesn't exist or has been moved.
      </Typography>
      <Button 
        variant="contained" 
        onClick={() => navigate('/')}
        sx={{ mt: 3 }}
      >
        Go to Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;
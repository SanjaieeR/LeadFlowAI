import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Alert } from '@mui/material';

const SupportPage = () => {
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the message to your support system
    console.log('Support message:', message);
    setSubmitted(true);
    setMessage('');
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Contact Support
      </Typography>
      {submitted && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Your message has been submitted. We'll get back to you soon.
        </Alert>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Your Message"
          multiline
          rows={4}
          fullWidth
          variant="outlined"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          sx={{ mb: 2 }}
          required
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default SupportPage;
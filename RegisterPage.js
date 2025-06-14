// import React, { useState } from 'react';
// import { TextField, Button, Container, Typography, Link } from '@mui/material';
// import { useAuth } from '../context/AuthContext';
// import { useNavigate } from 'react-router-dom';

// const RegisterPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     phone: '',
//     company: ''
//   });
//   const { register } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await register(formData);
//       navigate('/home');
//     } catch (error) {
//       alert('Registration failed: ' + error.message);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <Container maxWidth="sm" sx={{ mt: 8 }}>
//       <Typography variant="h4" gutterBottom>
//         Register
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <TextField
//           name="name"
//           label="Full Name"
//           fullWidth
//           margin="normal"
//           required
//           value={formData.name}
//           onChange={handleChange}
//         />
//         <TextField
//           name="email"
//           label="Email"
//           type="email"
//           fullWidth
//           margin="normal"
//           required
//           value={formData.email}
//           onChange={handleChange}
//         />
//         <TextField
//           name="password"
//           label="Password"
//           type="password"
//           fullWidth
//           margin="normal"
//           required
//           value={formData.password}
//           onChange={handleChange}
//         />
//         <TextField
//           name="phone"
//           label="Phone Number"
//           fullWidth
//           margin="normal"
//           value={formData.phone}
//           onChange={handleChange}
//         />
//         <TextField
//           name="company"
//           label="Company"
//           fullWidth
//           margin="normal"
//           value={formData.company}
//           onChange={handleChange}
//         />
//         <Button
//           type="submit"
//           variant="contained"
//           fullWidth
//           sx={{ mt: 3, mb: 2 }}
//         >
//           Register
//         </Button>
//       </form>
//       <Typography>
//         Already have an account? <Link href="/login">Login here</Link>
//       </Typography>
//     </Container>
//   );
// };

// export default RegisterPage;




// import React, { useState, useEffect } from 'react';
// import { TextField, Button, Container, Typography, Link } from '@mui/material';
// import { useAuth } from '../context/AuthContext';
// import { useNavigate, useLocation } from 'react-router-dom';

// const RegisterPage = () => {
//   const location = useLocation();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     phone: '',
//     company: ''
//   });
//   const { register } = useAuth();
//   const navigate = useNavigate();
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   useEffect(() => {
//     // Pre-fill form if coming from landing page
//     if (location.state?.leadData) {
//       setFormData(prev => ({
//         ...prev,
//         name: location.state.leadData.name || '',
//         email: location.state.leadData.email || '',
//         phone: location.state.leadData.phone || ''
//       }));
//     }
//   }, [location.state]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     try {
//       // Basic validation
//       if (formData.password.length < 6) {
//         throw new Error('Password must be at least 6 characters');
//       }

//       await register(formData);
//       navigate('/home');
//     } catch (error) {
//       alert('Registration failed: ' + error.message);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <Container maxWidth="sm" sx={{ mt: 8 }}>
//       <Typography variant="h4" gutterBottom>
//         Register
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <TextField
//           name="name"
//           label="Full Name"
//           fullWidth
//           margin="normal"
//           required
//           value={formData.name}
//           onChange={handleChange}
//         />
//         <TextField
//           name="email"
//           label="Email"
//           type="email"
//           fullWidth
//           margin="normal"
//           required
//           value={formData.email}
//           onChange={handleChange}
//         />
//         <TextField
//           name="password"
//           label="Password"
//           type="password"
//           fullWidth
//           margin="normal"
//           required
//           value={formData.password}
//           onChange={handleChange}
//           inputProps={{ minLength: 6 }}
//         />
//         <TextField
//           name="phone"
//           label="Phone Number"
//           fullWidth
//           margin="normal"
//           value={formData.phone}
//           onChange={handleChange}
//         />
//         <TextField
//           name="company"
//           label="Company"
//           fullWidth
//           margin="normal"
//           value={formData.company}
//           onChange={handleChange}
//         />
//         <Button
//           type="submit"
//           variant="contained"
//           fullWidth
//           sx={{ mt: 3, mb: 2 }}
//           disabled={isSubmitting}
//         >
//           {isSubmitting ? 'Registering...' : 'Register'}
//         </Button>
//       </form>
//       <Typography>
//         Already have an account? <Link href="/login">Login here</Link>
//       </Typography>
//     </Container>
//   );
// };

// export default RegisterPage;




import React, { useState, useEffect } from 'react';
import { 
  TextField, 
  Button, 
  Container, 
  Typography, 
  Link,
  Alert,
  CircularProgress,
  Box
} from '@mui/material';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';

const RegisterPage = () => {
  const location = useLocation();
  const { register } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    company: ''
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Pre-fill form if coming from landing page
    if (location.state?.leadData) {
      setFormData(prev => ({
        ...prev,
        name: location.state.leadData.name || '',
        email: location.state.leadData.email || '',
        phone: location.state.leadData.phone || ''
      }));
    }
  }, [location.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      // Basic validation
      if (formData.password.length < 6) {
        throw new Error('Password must be at least 6 characters');
      }

      // Debug: Log what's being sent to the API
      console.log('Submitting registration:', formData);

      await register(formData);
      
      // Debug: Log successful registration
      console.log('Registration successful');
      navigate('/home');
      
    } catch (error) {
      console.error('Registration error:', error);
      setError(error.message || 'Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Register
      </Typography>
      
      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          label="Full Name"
          fullWidth
          margin="normal"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          name="email"
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          required
          value={formData.password}
          onChange={handleChange}
          inputProps={{ minLength: 6 }}
        />
        <TextField
          name="phone"
          label="Phone Number"
          fullWidth
          margin="normal"
          value={formData.phone}
          onChange={handleChange}
        />
        <TextField
          name="company"
          label="Company"
          fullWidth
          margin="normal"
          value={formData.company}
          onChange={handleChange}
        />
        
        <Box sx={{ position: 'relative' }}>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 3, mb: 2 }}
            disabled={isSubmitting}
          >
            Register
          </Button>
          {isSubmitting && (
            <CircularProgress
              size={24}
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginTop: '-12px',
                marginLeft: '-12px',
              }}
            />
          )}
        </Box>
      </form>

      <Typography>
        Already have an account? <Link href="/login">Login here</Link>
      </Typography>
    </Container>
  );
};

export default RegisterPage;




// import React, { useState, useEffect } from 'react';
// import { 
//   TextField, 
//   Button, 
//   Container, 
//   Typography, 
//   Link,
//   Alert,
//   CircularProgress,
//   Snackbar
// } from '@mui/material';
// import { useAuth } from '../context/AuthContext';
// import { useNavigate, useLocation } from 'react-router-dom';

// const RegisterPage = () => {
//   const location = useLocation();
//   const { register } = useAuth();
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     phone: '',
//     company: ''
//   });
//   const [error, setError] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [openSnackbar, setOpenSnackbar] = useState(false);

//   useEffect(() => {
//     if (location.state?.leadData) {
//       setFormData(prev => ({
//         ...prev,
//         name: location.state.leadData.name || '',
//         email: location.state.leadData.email || '',
//         phone: location.state.leadData.phone || ''
//       }));
//     }
//   }, [location.state]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setIsSubmitting(true);

//     try {
//       // Basic validation
//       if (!formData.name || !formData.email || !formData.password) {
//         throw new Error('Please fill in all required fields');
//       }
//       if (formData.password.length < 6) {
//         throw new Error('Password must be at least 6 characters');
//       }

//       console.log('Attempting registration with:', formData);
      
//       const response = await register(formData);
//       console.log('Registration response:', response);

//       setOpenSnackbar(true);
//       setTimeout(() => navigate('/home'), 1000); // Small delay for user feedback
      
//     } catch (error) {
//       console.error('Registration error:', error);
//       setError(error.message || 'Registration failed. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleCloseSnackbar = () => {
//     setOpenSnackbar(false);
//   };

//   return (
//     <Container maxWidth="sm" sx={{ mt: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         Register
//       </Typography>
      
//       {error && (
//         <Alert severity="error" sx={{ mb: 3 }}>
//           {error}
//         </Alert>
//       )}

//       <form onSubmit={handleSubmit}>
//         <TextField
//           name="name"
//           label="Full Name"
//           fullWidth
//           margin="normal"
//           required
//           value={formData.name}
//           onChange={handleChange}
//         />
//         <TextField
//           name="email"
//           label="Email"
//           type="email"
//           fullWidth
//           margin="normal"
//           required
//           value={formData.email}
//           onChange={handleChange}
//         />
//         <TextField
//           name="password"
//           label="Password"
//           type="password"
//           fullWidth
//           margin="normal"
//           required
//           value={formData.password}
//           onChange={handleChange}
//           inputProps={{ minLength: 6 }}
//         />
//         <TextField
//           name="phone"
//           label="Phone Number"
//           fullWidth
//           margin="normal"
//           value={formData.phone}
//           onChange={handleChange}
//         />
//         <TextField
//           name="company"
//           label="Company"
//           fullWidth
//           margin="normal"
//           value={formData.company}
//           onChange={handleChange}
//         />
        
//         <Button
//           type="submit"
//           variant="contained"
//           fullWidth
//           sx={{ mt: 3, mb: 2 }}
//           disabled={isSubmitting}
//         >
//           {isSubmitting ? <CircularProgress size={24} /> : 'Register'}
//         </Button>
//       </form>

//       <Typography>
//         Already have an account? <Link href="/login">Login here</Link>
//       </Typography>

//       <Snackbar
//         open={openSnackbar}
//         autoHideDuration={3000}
//         onClose={handleCloseSnackbar}
//         message="Registration successful! Redirecting..."
//       />
//     </Container>
//   );
// };

// export default RegisterPage;



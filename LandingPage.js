// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Box, Typography, Button, Container, Grid, Paper, TextField, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { purple } from '@mui/material/colors';
// import Header from '../components/Header';
// import AccountCircle from '@mui/icons-material/AccountCircle';

// const ColorButton = styled(Button)(({ theme }) => ({
//   color: theme.palette.getContrastText(purple[300]),
//   backgroundColor: purple[300],
//   '&:hover': {
//     backgroundColor: purple[300],
//   },
// }));

// const services = [
//   'Human resources',
//   'Retail',
//   'Accounting',
//   'Sales',
//   'Market',
//   'Real estate',
//   'Insurance',
//   'Financing'
// ];

// const features = [
//   {
//     title: 'AI-Powered Lead Management',
//     description: 'Our advanced AI algorithms analyze and score leads based on multiple factors to prioritize your follow-ups and maximize conversions.'
//   },
//   {
//     title: 'Instant Booking System',
//     description: 'Clients can book appointments directly through your website, with automatic scheduling and reminders to reduce no-shows.'
//   },
//   {
//     title: 'Real-Time Analytics',
//     description: 'Get actionable insights with our comprehensive dashboard showing lead sources, conversion rates, and performance metrics.'
//   },
//   {
//     title: 'Automated Follow-ups',
//     description: 'Our system automatically sends personalized follow-ups based on lead behavior and engagement levels.'
//   }
// ];

// const LandingPage = () => {
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);
//   const [loginOpen, setLoginOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     serviceType: '',
//     message: ''
//   });
//   const [loginData, setLoginData] = useState({
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleLoginChange = (e) => {
//     const { name, value } = e.target;
//     setLoginData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('/api/leads', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
//       if (response.ok) {
//         setOpen(false);
//         navigate('/register', { state: formData });
//       }
//     } catch (error) {
//       console.error('Error submitting lead:', error);
//     }
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       // Mock login - in a real app, you would call your authentication API
//       console.log('Login attempt with:', loginData);
      
//       // For demo purposes, we'll simulate a successful login
//       localStorage.setItem('isAuthenticated', 'true');
//       setLoginOpen(false);
      
//       // Navigate to homepage (current page) and reload to see changes
//       navigate('/');
//       window.location.reload();
//     } catch (error) {
//       console.error('Login error:', error);
//     }
//   };

//   return (
//     <Box sx={{ pt: 8 }}>
//       {/* Big centered title */}
//       <Box sx={{
//         textAlign: 'center',
//         py: 4,
//         position: 'relative'
//       }}>
//         <Typography variant="h1" sx={{
//           fontWeight: 'bold',
//           color: purple[500],
//           fontSize: '4rem',
//           textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
//         }}>
//           LeadFlowAI
//         </Typography>
        
//         {/* Login button positioned at top-right */}
//         <Button 
//           variant="outlined"
//           startIcon={<AccountCircle />}
//           onClick={() => setLoginOpen(true)}
//           sx={{
//             position: 'absolute',
//             right: 20,
//             top: '50%',
//             transform: 'translateY(-50%)',
//             color: purple[500],
//             borderColor: purple[500],
//             '&:hover': {
//               backgroundColor: purple[50],
//               borderColor: purple[700]
//             }
//           }}
//         >
//           Login
//         </Button>
//       </Box>

//       <Header showProfile={false} />
//       <Box sx={{
//         background: 'linear-gradient(135deg, #4a148c 0%, #7b1fa2 100%)',
//         color: 'white',
//         py: 10,
//         textAlign: 'center'
//       }}>
//         <Container maxWidth="md">
//           <Typography variant="h2" gutterBottom>
//             Smart Lead Management for Service Businesses
//           </Typography>
//           <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
//             Convert more leads with AI-powered automation and intelligent follow-ups
//           </Typography>
//           <ColorButton
//             variant="contained"
//             size="large"
//             onClick={() => setOpen(true)}
//             sx={{
//               mt: 4,
//               px: 6,
//               py: 1.5,
//               fontSize: '1.1rem',
//               backgroundColor: 'white',
//               color: 'primary.main',
//               '&:hover': {
//                 backgroundColor: '#f5f5f5',
//                 transform: 'translateY(-2px)'
//               },
//               transition: 'all 0.3s ease'
//             }}
//           >
//            Get Started
//           </ColorButton>
//         </Container>
//       </Box>

//       <Container maxWidth="lg" sx={{ py: 8 }}>
//         <Typography variant="h4" align="center" gutterBottom>
//           Why Choose LeadFlow AI?
//         </Typography>
//         <Grid container spacing={4} sx={{ mt: 4 }}>
//           {features.map((feature, index) => (
//             <Grid item xs={12} md={6} key={index}>
//               <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
//                 <Typography variant="h6" gutterBottom>
//                   {feature.title}
//                 </Typography>
//                 <Typography>
//                   {feature.description}
//                 </Typography>
//               </Paper>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>

//       <Box sx={{ 
//         backgroundColor: '#f5f5f5',
//         py: 8
//       }}>
//         <Container maxWidth="md">
//           <Typography variant="h4" align="center" gutterBottom>
//             About LeadFlow AI
//           </Typography>
//           <Typography paragraph>
//             LeadFlow AI is a comprehensive lead management platform designed specifically for service-based businesses. 
//             Our system helps you capture, track, and convert leads more efficiently using artificial intelligence and automation.
//           </Typography>
//           <Typography paragraph>
//             With features like intelligent lead scoring, automated follow-ups, and real-time analytics, you'll never miss 
//             an opportunity to grow your business. Whether you're in home services, professional services, or any other 
//             service industry, LeadFlow AI adapts to your workflow to maximize conversions.
//           </Typography>
//         </Container>
//       </Box>

//       <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
//         <DialogTitle>Get Started with LeadFlow AI</DialogTitle>
//         <DialogContent>
//           <form onSubmit={handleSubmit}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               label="Name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               label="Email"
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               label="Phone"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               select
//               label="Service Type"
//               name="serviceType"
//               value={formData.serviceType}
//               onChange={handleChange}
//             >
//               {services.map((service) => (
//                 <MenuItem key={service} value={service}>
//                   {service}
//                 </MenuItem>
//               ))}
//             </TextField>
//             <TextField
//               margin="normal"
//               fullWidth
//               multiline
//               rows={4}
//               label="Message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//             />
//           </form>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setOpen(false)}>Cancel</Button>
//           <Button onClick={handleSubmit} color="primary" variant="contained">
//             Submit
//           </Button>
//         </DialogActions>
//       </Dialog>

//       {/* Login Dialog */}
//       <Dialog open={loginOpen} onClose={() => setLoginOpen(false)} maxWidth="xs" fullWidth>
//         <DialogTitle>Login to LeadFlowAI</DialogTitle>
//         <DialogContent>
//           <form onSubmit={handleLogin}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               label="Email Address"
//               name="email"
//               type="email"
//               value={loginData.email}
//               onChange={handleLoginChange}
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               label="Password"
//               name="password"
//               type="password"
//               value={loginData.password}
//               onChange={handleLoginChange}
//             />
//           </form>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setLoginOpen(false)}>Cancel</Button>
//           <Button onClick={handleLogin} color="primary" variant="contained">
//             Login
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default LandingPage;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Box, Typography, Button, Container, Grid, Paper, TextField, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { purple } from '@mui/material/colors';
// import Header from '../components/Header';
// import AccountCircle from '@mui/icons-material/AccountCircle';

// const ColorButton = styled(Button)(({ theme }) => ({
//   color: theme.palette.getContrastText(purple[300]),
//   backgroundColor: purple[300],
//   '&:hover': {
//     backgroundColor: purple[300],
//   },
// }));

// const services = [
//   'Human resources',
//   'Retail',
//   'Accounting',
//   'Sales',
//   'Market',
//   'Real estate',
//   'Insurance',
//   'Financing'
// ];

// const features = [
//   {
//     title: 'AI-Powered Lead Management',
//     description: 'Our advanced AI algorithms analyze and score leads based on multiple factors to prioritize your follow-ups and maximize conversions.'
//   },
//   {
//     title: 'Instant Booking System',
//     description: 'Clients can book appointments directly through your website, with automatic scheduling and reminders to reduce no-shows.'
//   },
//   {
//     title: 'Real-Time Analytics',
//     description: 'Get actionable insights with our comprehensive dashboard showing lead sources, conversion rates, and performance metrics.'
//   },
//   {
//     title: 'Automated Follow-ups',
//     description: 'Our system automatically sends personalized follow-ups based on lead behavior and engagement levels.'
//   }
// ];

// const LandingPage = () => {
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);
//   const [loginOpen, setLoginOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     serviceType: '',
//     message: ''
//   });
//   const [loginData, setLoginData] = useState({
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleLoginChange = (e) => {
//     const { name, value } = e.target;
//     setLoginData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('/api/leads', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
//       if (response.ok) {
//         setOpen(false);
//         navigate('/register', { state: formData });
//       }
//     } catch (error) {
//       console.error('Error submitting lead:', error);
//     }
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       // Here you would call your actual authentication API
//       console.log('Login attempt with:', loginData);
      
//       // For demo purposes, simulate successful login
//       localStorage.setItem('authToken', 'demo-token-123');
//       localStorage.setItem('userEmail', loginData.email);
      
//       // Close the dialog and navigate to home
//       setLoginOpen(false);
//       navigate('/');
      
//     } catch (error) {
//       console.error('Login error:', error);
//       alert('Login failed. Please try again.');
//     }
//   };

//   return (
//     <Box sx={{ pt: 8 }}>
//       {/* Big centered title with login button */}
//       <Box sx={{ 
//         textAlign: 'center', 
//         py: 4,
//         position: 'relative' 
//       }}>
//         <Typography variant="h1" sx={{ 
//           fontWeight: 'bold', 
//           color: purple[500],
//           fontSize: '4rem',
//           textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
//         }}>
//           LeadFlowAI
//         </Typography>
        
//         {/* Login button positioned at top-right */}
//         <Button 
//           variant="outlined" 
//           startIcon={<AccountCircle />}
//           onClick={() => setLoginOpen(true)}
//           sx={{
//             position: 'absolute',
//             right: 20,
//             top: '50%',
//             transform: 'translateY(-50%)',
//             color: purple[500],
//             borderColor: purple[500],
//             '&:hover': {
//               backgroundColor: purple[50],
//               borderColor: purple[700]
//             }
//           }}
//         >
//           Login
//         </Button>
//       </Box>

//       <Header showProfile={false} />
//       <Box sx={{
//         background: 'linear-gradient(135deg, #4a148c 0%, #7b1fa2 100%)',
//         color: 'white',
//         py: 10,
//         textAlign: 'center'
//       }}>
//         <Container maxWidth="md">
//           <Typography variant="h2" gutterBottom>
//             Smart Lead Management for Service Businesses
//           </Typography>
//           <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
//             Convert more leads with AI-powered automation and intelligent follow-ups
//           </Typography>
//           <ColorButton
//             variant="contained"
//             size="large"
//             onClick={() => setOpen(true)}
//             sx={{
//               mt: 4,
//               px: 6,
//               py: 1.5,
//               fontSize: '1.1rem',
//               backgroundColor: 'white',
//               color: 'primary.main',
//               '&:hover': {
//                 backgroundColor: '#f5f5f5',
//                 transform: 'translateY(-2px)'
//               },
//               transition: 'all 0.3s ease'
//             }}
//           >
//            Get Started
//           </ColorButton>
//         </Container>
//       </Box>

//       <Container maxWidth="lg" sx={{ py: 8 }}>
//         <Typography variant="h4" align="center" gutterBottom>
//           Why Choose LeadFlow AI?
//         </Typography>
//         <Grid container spacing={4} sx={{ mt: 4 }}>
//           {features.map((feature, index) => (
//             <Grid item xs={12} md={6} key={index}>
//               <Paper elevation={3} sx={{ p: 3, height: '100%', textAlign: 'center' }}>
//                 <Typography variant="h6" gutterBottom>
//                   {feature.title}
//                 </Typography>
//                 <Typography>
//                   {feature.description}
//                 </Typography>
//               </Paper>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>

//       <Box sx={{ 
//         backgroundColor: '#f5f5f5',
//         py: 8
//       }}>
//         <Container maxWidth="md">
//           <Typography variant="h4" align="center" gutterBottom>
//             About LeadFlow AI
//           </Typography>
//           <Typography paragraph sx={{ textAlign: 'center' }}>
//             LeadFlow AI is a comprehensive lead management platform designed specifically for service-based businesses. 
//             Our system helps you capture, track, and convert leads more efficiently using artificial intelligence and automation.
//           </Typography>
//           <Typography paragraph sx={{ textAlign: 'center' }}>
//             With features like intelligent lead scoring, automated follow-ups, and real-time analytics, you'll never miss 
//             an opportunity to grow your business. Whether you're in home services, professional services, or any other 
//             service industry, LeadFlow AI adapts to your workflow to maximize conversions.
//           </Typography>
//         </Container>
//       </Box>

//       {/* Get Started Dialog */}
//       <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
//         <DialogTitle sx={{ textAlign: 'center' }}>Get Started with LeadFlow AI</DialogTitle>
//         <DialogContent>
//           <form onSubmit={handleSubmit}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               label="Name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               label="Email"
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               label="Phone"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               select
//               label="Service Type"
//               name="serviceType"
//               value={formData.serviceType}
//               onChange={handleChange}
//             >
//               {services.map((service) => (
//                 <MenuItem key={service} value={service}>
//                   {service}
//                 </MenuItem>
//               ))}
//             </TextField>
//             <TextField
//               margin="normal"
//               fullWidth
//               multiline
//               rows={4}
//               label="Message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//             />
//           </form>
//         </DialogContent>
//         <DialogActions sx={{ justifyContent: 'center' }}>
//           <Button onClick={() => setOpen(false)}>Cancel</Button>
//           <Button onClick={handleSubmit} color="primary" variant="contained">
//             Submit
//           </Button>
//         </DialogActions>
//       </Dialog>

//       {/* Login Dialog - Now properly working */}
//       <Dialog 
//         open={loginOpen} 
//         onClose={() => setLoginOpen(false)} 
//         maxWidth="xs" 
//         fullWidth
//         component="form"
//         onSubmit={handleLogin}
//       >
//         <DialogTitle sx={{ textAlign: 'center' }}>Login to LeadFlowAI</DialogTitle>
//         <DialogContent>
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             label="Email Address"
//             name="email"
//             type="email"
//             value={loginData.email}
//             onChange={handleLoginChange}
//             autoFocus
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             label="Password"
//             name="password"
//             type="password"
//             value={loginData.password}
//             onChange={handleLoginChange}
//           />
//         </DialogContent>
//         <DialogActions sx={{ justifyContent: 'center', pb: 2 }}>
//           <Button onClick={() => setLoginOpen(false)}>Cancel</Button>
//           <Button 
//             type="submit"
//             color="primary" 
//             variant="contained"
//             sx={{ 
//               backgroundColor: purple[500],
//               '&:hover': {
//                 backgroundColor: purple[700]
//               }
//             }}
//           >
//             Login
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default LandingPage;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Box, Typography, Button, Container, Grid, Paper, TextField, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { purple } from '@mui/material/colors';
// import Header from '../components/Header';
// import AccountCircle from '@mui/icons-material/AccountCircle';

// const ColorButton = styled(Button)(({ theme }) => ({
//   color: theme.palette.getContrastText(purple[300]),
//   backgroundColor: purple[300],
//   '&:hover': {
//     backgroundColor: purple[300],
//   },
// }));

// const services = [
//   'Human resources',
//   'Retail',
//   'Accounting',
//   'Sales',
//   'Market',
//   'Real estate',
//   'Insurance',
//   'Financing'
// ];

// const features = [
//   {
//     title: 'AI-Powered Lead Management',
//     description: 'Our advanced AI algorithms analyze and score leads based on multiple factors to prioritize your follow-ups and maximize conversions.'
//   },
//   {
//     title: 'Instant Booking System',
//     description: 'Clients can book appointments directly through your website, with automatic scheduling and reminders to reduce no-shows.'
//   },
//   {
//     title: 'Real-Time Analytics',
//     description: 'Get actionable insights with our comprehensive dashboard showing lead sources, conversion rates, and performance metrics.'
//   },
//   {
//     title: 'Automated Follow-ups',
//     description: 'Our system automatically sends personalized follow-ups based on lead behavior and engagement levels.'
//   }
// ];

// const LandingPage = () => {
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);
//   const [loginOpen, setLoginOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     serviceType: '',
//     message: ''
//   });
//   const [loginData, setLoginData] = useState({
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleLoginChange = (e) => {
//     const { name, value } = e.target;
//     setLoginData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('/api/leads', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
//       if (response.ok) {
//         setOpen(false);
//         navigate('/register', { state: formData });
//       }
//     } catch (error) {
//       console.error('Error submitting lead:', error);
//     }
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       // Here you would call your actual authentication API
//       console.log('Login attempt with:', loginData);
      
//       // For demo purposes, simulate successful login
//       localStorage.setItem('authToken', 'demo-token-123');
//       localStorage.setItem('userEmail', loginData.email);
      
//       // Close the dialog and navigate to home
//       setLoginOpen(false);
//       navigate('/home'); // Changed from '/' to '/home'
      
//     } catch (error) {
//       console.error('Login error:', error);
//       alert('Login failed. Please try again.');
//     }
//   };

//   return (
//     <Box sx={{ pt: 8 }}>
//       {/* Big centered title with login button */}
//       <Box sx={{ 
//         textAlign: 'center', 
//         py: 4,
//         position: 'relative' 
//       }}>
//         <Typography variant="h1" sx={{ 
//           fontWeight: 'bold', 
//           color: purple[500],
//           fontSize: '4rem',
//           textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
//         }}>
//           LeadFlowAI
//         </Typography>
        
//         {/* Login button positioned at top-right */}
//         <Button 
//           variant="outlined" 
//           startIcon={<AccountCircle />}
//           onClick={() => setLoginOpen(true)}
//           sx={{
//             position: 'absolute',
//             right: 20,
//             top: '50%',
//             transform: 'translateY(-50%)',
//             color: purple[500],
//             borderColor: purple[500],
//             '&:hover': {
//               backgroundColor: purple[50],
//               borderColor: purple[700]
//             }
//           }}
//         >
//           Login
//         </Button>
//       </Box>

//       <Header showProfile={false} />
//       <Box sx={{
//         background: 'linear-gradient(135deg, #4a148c 0%, #7b1fa2 100%)',
//         color: 'white',
//         py: 10,
//         textAlign: 'center'
//       }}>
//         <Container maxWidth="md">
//           <Typography variant="h2" gutterBottom>
//             Smart Lead Management for Service Businesses
//           </Typography>
//           <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
//             Convert more leads with AI-powered automation and intelligent follow-ups
//           </Typography>
//           <ColorButton
//             variant="contained"
//             size="large"
//             onClick={() => setOpen(true)}
//             sx={{
//               mt: 4,
//               px: 6,
//               py: 1.5,
//               fontSize: '1.1rem',
//               backgroundColor: 'white',
//               color: 'primary.main',
//               '&:hover': {
//                 backgroundColor: '#f5f5f5',
//                 transform: 'translateY(-2px)'
//               },
//               transition: 'all 0.3s ease'
//             }}
//           >
//            Get Started
//           </ColorButton>
//         </Container>
//       </Box>

//       <Container maxWidth="lg" sx={{ py: 8 }}>
//         <Typography variant="h4" align="center" gutterBottom>
//           Why Choose LeadFlow AI?
//         </Typography>
//         <Grid container spacing={4} sx={{ mt: 4 }}>
//           {features.map((feature, index) => (
//             <Grid item xs={12} md={6} key={index}>
//               <Paper elevation={3} sx={{ p: 3, height: '100%', textAlign: 'center' }}>
//                 <Typography variant="h6" gutterBottom>
//                   {feature.title}
//                 </Typography>
//                 <Typography>
//                   {feature.description}
//                 </Typography>
//               </Paper>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>

//       <Box sx={{ 
//         backgroundColor: '#f5f5f5',
//         py: 8
//       }}>
//         <Container maxWidth="md">
//           <Typography variant="h4" align="center" gutterBottom>
//             About LeadFlow AI
//           </Typography>
//           <Typography paragraph sx={{ textAlign: 'center' }}>
//             LeadFlow AI is a comprehensive lead management platform designed specifically for service-based businesses. 
//             Our system helps you capture, track, and convert leads more efficiently using artificial intelligence and automation.
//           </Typography>
//           <Typography paragraph sx={{ textAlign: 'center' }}>
//             With features like intelligent lead scoring, automated follow-ups, and real-time analytics, you'll never miss 
//             an opportunity to grow your business. Whether you're in home services, professional services, or any other 
//             service industry, LeadFlow AI adapts to your workflow to maximize conversions.
//           </Typography>
//         </Container>
//       </Box>

//       <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
//         <DialogTitle sx={{ textAlign: 'center' }}>Get Started with LeadFlow AI</DialogTitle>
//         <DialogContent>
//           <form onSubmit={handleSubmit}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               label="Name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               label="Email"
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               label="Phone"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               select
//               label="Service Type"
//               name="serviceType"
//               value={formData.serviceType}
//               onChange={handleChange}
//             >
//               {services.map((service) => (
//                 <MenuItem key={service} value={service}>
//                   {service}
//                 </MenuItem>
//               ))}
//             </TextField>
//             <TextField
//               margin="normal"
//               fullWidth
//               multiline
//               rows={4}
//               label="Message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//             />
//           </form>
//         </DialogContent>
//         <DialogActions sx={{ justifyContent: 'center' }}>
//           <Button onClick={() => setOpen(false)}>Cancel</Button>
//           <Button onClick={handleSubmit} color="primary" variant="contained">
//             Submit
//           </Button>
//         </DialogActions>
//       </Dialog>

//       <Dialog 
//         open={loginOpen} 
//         onClose={() => setLoginOpen(false)} 
//         maxWidth="xs" 
//         fullWidth
//         component="form"
//         onSubmit={handleLogin}
//       >
//         <DialogTitle sx={{ textAlign: 'center' }}>Login to LeadFlowAI</DialogTitle>
//         <DialogContent>
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             label="Email Address"
//             name="email"
//             type="email"
//             value={loginData.email}
//             onChange={handleLoginChange}
//             autoFocus
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             label="Password"
//             name="password"
//             type="password"
//             value={loginData.password}
//             onChange={handleLoginChange}
//           />
//         </DialogContent>
//         <DialogActions sx={{ justifyContent: 'center', pb: 2 }}>
//           <Button onClick={() => setLoginOpen(false)}>Cancel</Button>
//           <Button 
//             type="submit"
//             color="primary" 
//             variant="contained"
//             sx={{ 
//               backgroundColor: purple[500],
//               '&:hover': {
//                 backgroundColor: purple[700]
//               }
//             }}
//           >
//             Login
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default LandingPage;





import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Container, Grid, Paper, TextField, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Header from '../components/Header';
import AccountCircle from '@mui/icons-material/AccountCircle';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[300]),
  backgroundColor: purple[300],
  '&:hover': {
    backgroundColor: purple[300],
  },
}));

const services = [
  'Human resources',
  'Retail',
  'Accounting',
  'Sales',
  'Market',
  'Real estate',
  'Insurance',
  'Financing'
];

const features = [
  {
    title: 'AI-Powered Lead Management',
    description: 'Our advanced AI algorithms analyze and score leads based on multiple factors to prioritize your follow-ups and maximize conversions.'
  },
  {
    title: 'Instant Booking System',
    description: 'Clients can book appointments directly through your website, with automatic scheduling and reminders to reduce no-shows.'
  },
  {
    title: 'Real-Time Analytics',
    description: 'Get actionable insights with our comprehensive dashboard showing lead sources, conversion rates, and performance metrics.'
  },
  {
    title: 'Automated Follow-ups',
    description: 'Our system automatically sends personalized follow-ups based on lead behavior and engagement levels.'
  }
];

const LandingPage = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: ''
  });
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Basic validation
      if (!formData.name || !formData.email || !formData.phone || !formData.serviceType) {
        alert('Please fill in all required fields');
        return;
      }

      // Mock API call - replace with your actual API endpoint
      const mockApiResponse = await new Promise(resolve => {
        setTimeout(() => {
          resolve({
            ok: true,
            json: () => Promise.resolve({ leadId: `mock-${Date.now()}` })
          });
        }, 1000);
      });

      if (mockApiResponse.ok) {
        const result = await mockApiResponse.json();
        console.log('Lead submitted successfully:', result);
        setOpen(false);
        navigate('/register', { 
          state: { 
            ...formData,
            leadId: result.leadId
          } 
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          serviceType: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error submitting lead:', error);
      alert('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log('Login attempt with:', loginData);
      localStorage.setItem('authToken', 'demo-token-123');
      localStorage.setItem('userEmail', loginData.email);
      setLoginOpen(false);
      navigate('/home');
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please try again.');
    }
  };

  return (
    <Box sx={{ pt: 8 }}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', py: 4, position: 'relative' }}>
        <Typography variant="h1" sx={{ 
          fontWeight: 'bold', 
          color: purple[500],
          fontSize: '4rem',
          textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
        }}>
          LeadFlowAI
        </Typography>
        
        <Button 
          variant="outlined" 
          startIcon={<AccountCircle />}
          onClick={() => setLoginOpen(true)}
          sx={{
            position: 'absolute',
            right: 20,
            top: '50%',
            transform: 'translateY(-50%)',
            color: purple[500],
            borderColor: purple[500],
            '&:hover': {
              backgroundColor: purple[50],
              borderColor: purple[700]
            }
          }}
        >
          Login
        </Button>
      </Box>

      <Header showProfile={false} />
      
      {/* Hero Section */}
      <Box sx={{
        background: 'linear-gradient(135deg, #4a148c 0%, #7b1fa2 100%)',
        color: 'white',
        py: 10,
        textAlign: 'center'
      }}>
        <Container maxWidth="md">
          <Typography variant="h2" gutterBottom>
            Smart Lead Management for Service Businesses
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
            Convert more leads with AI-powered automation and intelligent follow-ups
          </Typography>
          <ColorButton
            variant="contained"
            size="large"
            onClick={() => setOpen(true)}
            sx={{
              mt: 4,
              px: 6,
              py: 1.5,
              fontSize: '1.1rem',
              backgroundColor: 'white',
              color: 'primary.main',
              '&:hover': {
                backgroundColor: '#f5f5f5',
                transform: 'translateY(-2px)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            Get Started
          </ColorButton>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Why Choose LeadFlow AI?
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper elevation={3} sx={{ p: 3, height: '100%', textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography>
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* About Section */}
      <Box sx={{ backgroundColor: '#f5f5f5', py: 8 }}>
        <Container maxWidth="md">
          <Typography variant="h4" align="center" gutterBottom>
            About LeadFlow AI
          </Typography>
          <Typography paragraph sx={{ textAlign: 'center' }}>
            LeadFlow AI is a comprehensive lead management platform designed specifically for service-based businesses. 
            Our system helps you capture, track, and convert leads more efficiently using artificial intelligence and automation.
          </Typography>
          <Typography paragraph sx={{ textAlign: 'center' }}>
            With features like intelligent lead scoring, automated follow-ups, and real-time analytics, you'll never miss 
            an opportunity to grow your business. Whether you're in home services, professional services, or any other 
            service industry, LeadFlow AI adapts to your workflow to maximize conversions.
          </Typography>
        </Container>
      </Box>

      {/* Get Started Dialog */}
      <Dialog 
        open={open} 
        onClose={() => !isSubmitting && setOpen(false)}
        maxWidth="sm" 
        fullWidth
      >
        <DialogTitle sx={{ textAlign: 'center' }}>Get Started with LeadFlow AI</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              select
              label="Service Type"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              disabled={isSubmitting}
            >
              {services.map((service) => (
                <MenuItem key={service} value={service}>
                  {service}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              margin="normal"
              fullWidth
              multiline
              rows={4}
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </form>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center' }}>
          <Button 
            onClick={() => setOpen(false)} 
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleSubmit} 
            color="primary" 
            variant="contained"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Login Dialog */}
      <Dialog 
        open={loginOpen} 
        onClose={() => setLoginOpen(false)} 
        maxWidth="xs" 
        fullWidth
        component="form"
        onSubmit={handleLogin}
      >
        <DialogTitle sx={{ textAlign: 'center' }}>Login to LeadFlowAI</DialogTitle>
        <DialogContent>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            type="email"
            value={loginData.email}
            onChange={handleLoginChange}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={loginData.password}
            onChange={handleLoginChange}
          />
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', pb: 2 }}>
          <Button onClick={() => setLoginOpen(false)}>Cancel</Button>
          <Button 
            type="submit"
            color="primary" 
            variant="contained"
            sx={{ 
              backgroundColor: purple[500],
              '&:hover': {
                backgroundColor: purple[700]
              }
            }}
          >
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default LandingPage;
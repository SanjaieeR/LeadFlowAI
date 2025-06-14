
import React, { useState } from 'react';
import { 
  Box, Typography, Button, Grid, Card, CardContent, 
  CardActions, TextField, MenuItem, Avatar, IconButton, Badge 
} from '@mui/material';
import { 
  CalendarToday, Person, Dashboard, Assessment, Support, Notifications 
} from '@mui/icons-material';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import ServiceModal from '../components/ServiceModal';
import ProfileMenu from '../components/ProfileMenu';
import api from '../api';

const services = [
  {
    id: 1,
    name: 'HR Consulting',
    category: 'Human resources',
    description: 'Comprehensive HR solutions including recruitment, training, and compliance management.',
    price: 199,
    duration: 60
  },,
  {
    id: 2,
    name: 'Retail Strategy',
    category: 'Retail',
    description: 'Optimize your retail operations with our data-driven strategy and analytics.',
    price: 299,
    duration: 90
  },
  {
    id: 3,
    name: 'Tax Planning',
    category: 'Accounting',
    description: 'Expert tax planning and preparation services for businesses of all sizes.',
    price: 249,
    duration: 60
  },
  {
    id: 4,
    name: 'Sales Training',
    category: 'Sales',
    description: 'Boost your sales team performance with our proven training programs.',
    price: 349,
    duration: 120
  },
  {
    id: 5,
    name: 'Market Research',
    category: 'Market',
    description: 'Get actionable insights with our comprehensive market research services.',
    price: 399,
    duration: 90
  },
  {
    id: 6,
    name: 'Property Valuation',
    category: 'Real estate',
    description: 'Accurate property valuations for residential and commercial properties.',
    price: 299,
    duration: 60
  },
  {
    id: 7,
    name: 'Insurance Review',
    category: 'Insurance',
    description: 'Ensure you have the right coverage with our professional insurance review.',
    price: 199,
    duration: 60
  },
  {
    id: 8,
    name: 'Business Financing',
    category: 'Financing',
    description: 'Access the capital you need with our business financing solutions.',
    price: 0,
    duration: 30
  }
  // ... (keep all your other service objects)
];

const HomePage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [filter, setFilter] = useState('all');
  const [anchorEl, setAnchorEl] = useState(null);
  const [loadingStates, setLoadingStates] = useState({});
  const [notificationCount, setNotificationCount] = useState(3);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setOpenModal(true);
  };

  const handleCloseModal = () => setOpenModal(false);

  const handleProfileMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleProfileMenuClose = () => setAnchorEl(null);

  const handleNavigation = (path) => navigate(path);

  const handleNotificationClick = async () => {
    try {
      setLoadingStates(prev => ({ ...prev, notifications: true }));
      await api.post('/api/notifications/mark-read');
      setNotificationCount(0);
    } catch (error) {
      console.error('Error handling notifications:', error);
    } finally {
      setLoadingStates(prev => ({ ...prev, notifications: false }));
    }
  };

  const handleBookAppointment = async (appointmentData) => {
    try {
      setLoadingStates(prev => ({ ...prev, booking: true }));
      const response = await api.post('/api/appointments', appointmentData);
      console.log('Appointment booked:', response.data);
      handleCloseModal();
      // Add success notification here if needed
    } catch (error) {
      console.error('Error booking appointment:', error);
      // Handle error (show error message, etc.)
    } finally {
      setLoadingStates(prev => ({ ...prev, booking: false }));
    }
  };

  const filteredServices = filter === 'all' 
    ? services 
    : services.filter(service => service.category === filter);

  return (
    <Box>
      {/* Header */}
      <Box sx={{ 
        backgroundColor: 'primary.main',
        color: 'white',
        p: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Typography variant="h6">LeadFlow AI</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton 
            color="inherit"
            onClick={handleNotificationClick}
            disabled={loadingStates.notifications}
          >
            <Badge badgeContent={notificationCount} color="secondary">
              <Notifications />
            </Badge>
          </IconButton>
          <IconButton color="inherit" onClick={handleProfileMenuOpen}>
            <Avatar sx={{ width: 32, height: 32 }}>{user?.name?.charAt(0)}</Avatar>
          </IconButton>
        </Box>
      </Box>

      {/* Main Content */}
      <Box sx={{ display: 'flex', backgroundColor: '#f5f5f5', minHeight: 'calc(100vh - 64px)' }}>
        {/* Sidebar */}
        <Box sx={{ width: 240, backgroundColor: 'white', p: 2, boxShadow: 1 }}>
          {[
            { icon: <Dashboard />, text: 'Dashboard', path: '/dashboard' },
            { icon: <Person />, text: 'My Profile', path: '/profile' },
            { icon: <CalendarToday />, text: 'Appointments', path: '/appointments' },
            { icon: <Assessment />, text: 'Analytics', path: '/analytics' },
            { icon: <Support />, text: 'Support', path: '/support' }
          ].map((item, index) => (
            <Button
              key={index}
              fullWidth
              startIcon={item.icon}
              sx={{ justifyContent: 'flex-start', mb: index < 4 ? 1 : 0 }}
              onClick={() => handleNavigation(item.path)}
            >
              {item.text}
            </Button>
          ))}
        </Box>

        {/* Services Section */}
        <Box sx={{ flexGrow: 1, p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Typography variant="h4">Our Services</Typography>
            <TextField
              select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              size="small"
              sx={{ minWidth: 200 }}
            >
              <MenuItem value="all">All Services</MenuItem>
              {[...new Set(services.map(service => service.category))].map(category => (
                <MenuItem key={category} value={category}>{category}</MenuItem>
              ))}
            </TextField>
          </Box>

          <Grid container spacing={3}>
            {filteredServices.map((service) => (
              <Grid item xs={12} sm={6} md={4} key={service.id}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="div">
                      {service.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {service.category}
                    </Typography>
                    <Typography variant="body2">
                      {service.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'space-between', p: 2 }}>
                    <Typography variant="h6">
                      {service.price > 0 ? `$${service.price}` : 'Free Consultation'}
                    </Typography>
                    <Button 
                      size="small" 
                      variant="contained"
                      onClick={() => handleServiceClick(service)}
                      disabled={loadingStates.booking}
                    >
                      Book Now
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Modals */}
      <ServiceModal 
        open={openModal} 
        onClose={handleCloseModal} 
        service={selectedService}
        user={user}
        onBook={handleBookAppointment}
        loading={loadingStates.booking}
      />

      <ProfileMenu 
        anchorEl={anchorEl} 
        onClose={handleProfileMenuClose}
        onLogout={logout}
      />
    </Box>
  );
};

export default HomePage;



// import React, { useState } from 'react';
// import { 
//   Box, 
//   Typography, 
//   Button, 
//   Grid, 
//   Card, 
//   CardContent, 
//   CardActions, 
//   TextField, 
//   MenuItem, 
//   Avatar, 
//   IconButton, 
//   Badge 
// } from '@mui/material';
// import { 
//   CalendarToday, 
//   Person, 
//   Dashboard, 
//   Assessment, 
//   Support, 
//   Notifications 
// } from '@mui/icons-material';
// import { useAuth } from '../context/AuthContext';
// import { useNavigate } from 'react-router-dom';
// import ServiceModal from '../components/ServiceModal';
// import ProfileMenu from '../components/ProfileMenu';
// import api from '../api';

// // Array of service objects with complete details
// const services = [
//   {
//     id: 1,
//     name: 'HR Consulting',
//     category: 'Human resources',
//     description: 'Comprehensive HR solutions including recruitment, training, and compliance management.',
//     price: 199,
//     duration: 60
//   },
//   {
//     id: 2,
//     name: 'Retail Strategy',
//     category: 'Retail',
//     description: 'Optimize your retail operations with our data-driven strategy and analytics.',
//     price: 299,
//     duration: 90
//   },
//   {
//     id: 3,
//     name: 'Tax Planning',
//     category: 'Accounting',
//     description: 'Expert tax planning and preparation services for businesses of all sizes.',
//     price: 249,
//     duration: 60
//   },
//   {
//     id: 4,
//     name: 'Sales Training',
//     category: 'Sales',
//     description: 'Boost your sales team performance with our proven training programs.',
//     price: 349,
//     duration: 120
//   },
//   {
//     id: 5,
//     name: 'Market Research',
//     category: 'Market',
//     description: 'Get actionable insights with our comprehensive market research services.',
//     price: 399,
//     duration: 90
//   },
//   {
//     id: 6,
//     name: 'Property Valuation',
//     category: 'Real estate',
//     description: 'Accurate property valuations for residential and commercial properties.',
//     price: 299,
//     duration: 60
//   },
//   {
//     id: 7,
//     name: 'Insurance Review',
//     category: 'Insurance',
//     description: 'Ensure you have the right coverage with our professional insurance review.',
//     price: 199,
//     duration: 60
//   },
//   {
//     id: 8,
//     name: 'Business Financing',
//     category: 'Financing',
//     description: 'Access the capital you need with our business financing solutions.',
//     price: 0,
//     duration: 30
//   }
// ];

// const HomePage = () => {
//   // Authentication context and navigation
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();

//   // State management
//   const [selectedService, setSelectedService] = useState(null);
//   const [openModal, setOpenModal] = useState(false);
//   const [filter, setFilter] = useState('all');
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [loadingStates, setLoadingStates] = useState({
//     notifications: false,
//     booking: false
//   });
//   const [notificationCount, setNotificationCount] = useState(3);

//   // Handler for when a service is clicked
//   const handleServiceClick = (service) => {
//     setSelectedService(service);
//     setOpenModal(true);
//   };

//   // Handler for closing the modal
//   const handleCloseModal = () => {
//     setOpenModal(false);
//   };

//   // Handlers for profile menu
//   const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleProfileMenuClose = () => {
//     setAnchorEl(null);
//   };

//   // Handler for navigation
//   const handleNavigation = (path) => {
//     navigate(path);
//   };

//   // Handler for notification click
//   const handleNotificationClick = async () => {
//     try {
//       setLoadingStates(prev => ({ ...prev, notifications: true }));
//       await api.post('/api/notifications/mark-read');
//       setNotificationCount(0);
//     } catch (error) {
//       console.error('Error handling notifications:', error);
//     } finally {
//       setLoadingStates(prev => ({ ...prev, notifications: false }));
//     }
//   };

//   // Handler for booking appointments
//   const handleBookAppointment = async (appointmentData) => {
//     try {
//       setLoadingStates(prev => ({ ...prev, booking: true }));
//       const response = await api.post('/api/appointments', appointmentData);
//       console.log('Appointment booked:', response.data);
//       handleCloseModal();
//     } catch (error) {
//       console.error('Error booking appointment:', error);
//     } finally {
//       setLoadingStates(prev => ({ ...prev, booking: false }));
//     }
//   };

//   // Filter services based on selected category
//   const filteredServices = filter === 'all' 
//     ? services 
//     : services.filter(service => service.category === filter);

//   return (
//     <Box>
//       {/* Header Section */}
//       <Box sx={{ 
//         backgroundColor: 'primary.main',
//         color: 'white',
//         p: 2,
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center'
//       }}>
//         <Typography variant="h6">LeadFlow AI</Typography>
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           {/* Notification Icon with Badge */}
//           <IconButton 
//             color="inherit"
//             onClick={handleNotificationClick}
//             disabled={loadingStates.notifications}
//           >
//             <Badge badgeContent={notificationCount} color="secondary">
//               <Notifications />
//             </Badge>
//           </IconButton>
          
//           {/* Profile Avatar */}
//           <IconButton color="inherit" onClick={handleProfileMenuOpen}>
//             <Avatar sx={{ width: 32, height: 32 }}>
//               {user?.name?.charAt(0)}
//             </Avatar>
//           </IconButton>
//         </Box>
//       </Box>

//       {/* Main Content Area */}
//       <Box sx={{ 
//         display: 'flex', 
//         backgroundColor: '#f5f5f5', 
//         minHeight: 'calc(100vh - 64px)'
//       }}>
//         {/* Sidebar Navigation */}
//         <Box sx={{ 
//           width: 240, 
//           backgroundColor: 'white', 
//           p: 2, 
//           boxShadow: 1 
//         }}>
//           {[
//             { icon: <Dashboard />, text: 'Dashboard', path: '/dashboard' },
//             { icon: <Person />, text: 'My Profile', path: '/profile' },
//             { icon: <CalendarToday />, text: 'Appointments', path: '/appointments' },
//             { icon: <Assessment />, text: 'Analytics', path: '/analytics' },
//             { icon: <Support />, text: 'Support', path: '/support' }
//           ].map((item, index) => (
//             <Button
//               key={index}
//               fullWidth
//               startIcon={item.icon}
//               sx={{ 
//                 justifyContent: 'flex-start', 
//                 mb: index < 4 ? 1 : 0 
//               }}
//               onClick={() => handleNavigation(item.path)}
//             >
//               {item.text}
//             </Button>
//           ))}
//         </Box>

//         {/* Services Content Section */}
//         <Box sx={{ flexGrow: 1, p: 3 }}>
//           {/* Services Header with Filter */}
//           <Box sx={{ 
//             display: 'flex', 
//             justifyContent: 'space-between', 
//             alignItems: 'center', 
//             mb: 4 
//           }}>
//             <Typography variant="h4">Our Services</Typography>
//             <TextField
//               select
//               value={filter}
//               onChange={(e) => setFilter(e.target.value)}
//               size="small"
//               sx={{ minWidth: 200 }}
//             >
//               <MenuItem value="all">All Services</MenuItem>
//               {[...new Set(services.map(service => service.category))].map(category => (
//                 <MenuItem key={category} value={category}>
//                   {category}
//                 </MenuItem>
//               ))}
//             </TextField>
//           </Box>

//           {/* Services Grid */}
//           <Grid container spacing={3}>
//             {filteredServices.map((service) => (
//               <Grid item xs={12} sm={6} md={4} key={service.id}>
//                 <Card sx={{ 
//                   height: '100%', 
//                   display: 'flex', 
//                   flexDirection: 'column' 
//                 }}>
//                   <CardContent sx={{ flexGrow: 1 }}>
//                     <Typography gutterBottom variant="h5" component="div">
//                       {service.name}
//                     </Typography>
//                     <Typography 
//                       variant="body2" 
//                       color="text.secondary" 
//                       sx={{ mb: 2 }}
//                     >
//                       {service.category}
//                     </Typography>
//                     <Typography variant="body2">
//                       {service.description}
//                     </Typography>
//                   </CardContent>
//                   <CardActions sx={{ 
//                     justifyContent: 'space-between', 
//                     p: 2 
//                   }}>
//                     <Typography variant="h6">
//                       {service.price > 0 ? `$${service.price}` : 'Free Consultation'}
//                     </Typography>
//                     <Button 
//                       size="small" 
//                       variant="contained"
//                       onClick={() => handleServiceClick(service)}
//                       disabled={loadingStates.booking}
//                     >
//                       Book Now
//                     </Button>
//                   </CardActions>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//       </Box>

//       {/* Service Modal */}
//       <ServiceModal 
//         open={openModal} 
//         onClose={handleCloseModal} 
//         service={selectedService}
//         user={user}
//         onBook={handleBookAppointment}
//         loading={loadingStates.booking}
//       />

//       {/* Profile Menu */}
//       <ProfileMenu 
//         anchorEl={anchorEl} 
//         onClose={handleProfileMenuClose}
//         onLogout={logout}
//       />
//     </Box>
//   );
// };

// export default HomePage;

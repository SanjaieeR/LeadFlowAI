// import React, { useState, useEffect } from 'react';
// import { Box, Typography, Container, Grid, Card, CardContent, LinearProgress, Avatar, Button, Chip } from '@mui/material';
// import { useAuth } from '../context/AuthContext';
// import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab';
// import { CalendarToday, Email, Phone, CheckCircle, Warning, Person } from '@mui/icons-material';



// const DashboardPage = () => {
//   const { user } = useAuth();
//   const [leads, setLeads] = useState([]);
//   const [appointments, setAppointments] = useState([]);
//   const [stats, setStats] = useState({
//     totalLeads: 0,
//     converted: 0,
//     hotLeads: 0,
//     scheduled: 0
//   });

//   useEffect(() => {
//     // Simulate API calls
//     const fetchData = async () => {
//       try {
//         // Mock leads data
//         const mockLeads = [
//           {
//             id: 1,
//             name: 'John Smith',
//             email: 'john@example.com',
//             phone: '555-123-4567',
//             serviceType: 'Real estate',
//             leadScore: 9,
//             status: 'contacted',
//             lastActivity: '2023-05-15T10:30:00Z'
//           },
//           {
//             id: 2,
//             name: 'Sarah Johnson',
//             email: 'sarah@example.com',
//             phone: '555-987-6543',
//             serviceType: 'Insurance',
//             leadScore: 7,
//             status: 'new',
//             lastActivity: '2023-05-14T14:45:00Z'
//           },
//           {
//             id: 3,
//             name: 'Michael Brown',
//             email: 'michael@example.com',
//             phone: '555-456-7890',
//             serviceType: 'Financing',
//             leadScore: 4,
//             status: 'qualified',
//             lastActivity: '2023-05-12T09:15:00Z'
//           }
//         ];

//         // Mock appointments
//         const mockAppointments = [
//           {
//             id: 1,
//             service: 'Property Valuation',
//             date: '2023-05-20',
//             time: '10:00 AM',
//             status: 'scheduled'
//           },
//           {
//             id: 2,
//             service: 'Insurance Review',
//             date: '2023-05-22',
//             time: '2:30 PM',
//             status: 'pending'
//           }
//         ];

//         setLeads(mockLeads);
//         setAppointments(mockAppointments);
//         setStats({
//           totalLeads: 24,
//           converted: 8,
//           hotLeads: 5,
//           scheduled: 3
//         });
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'new': return 'primary';
//       case 'contacted': return 'info';
//       case 'qualified': return 'warning';
//       case 'converted': return 'success';
//       default: return 'default';
//     }
//   };

//   const getLeadPriority = (score) => {
//     if (score >= 8) return 'Hot';
//     if (score >= 5) return 'Warm';
//     return 'Cold';
//   };

//   const getLeadPriorityColor = (score) => {
//     if (score >= 8) return 'error';
//     if (score >= 5) return 'warning';
//     return 'info';
//   };

//   return (
//     <Container maxWidth="lg" sx={{ py: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         Dashboard
//       </Typography>

//       <Grid container spacing={3} sx={{ mb: 4 }}>
//         <Grid item xs={12} sm={6} md={3}>
//           <Card>
//             <CardContent>
//               <Typography color="text.secondary" gutterBottom>
//                 Total Leads
//               </Typography>
//               <Typography variant="h4">{stats.totalLeads}</Typography>
//               <LinearProgress variant="determinate" value={(stats.totalLeads / 30) * 100} sx={{ mt: 2 }} />
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Card>
//             <CardContent>
//               <Typography color="text.secondary" gutterBottom>
//                 Converted
//               </Typography>
//               <Typography variant="h4">{stats.converted}</Typography>
//               <LinearProgress 
//                 variant="determinate" 
//                 value={(stats.converted / stats.totalLeads) * 100} 
//                 color="success" 
//                 sx={{ mt: 2 }} 
//               />
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Card>
//             <CardContent>
//               <Typography color="text.secondary" gutterBottom>
//                 Hot Leads
//               </Typography>
//               <Typography variant="h4">{stats.hotLeads}</Typography>
//               <LinearProgress 
//                 variant="determinate" 
//                 value={(stats.hotLeads / stats.totalLeads) * 100} 
//                 color="error" 
//                 sx={{ mt: 2 }} 
//               />
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Card>
//             <CardContent>
//               <Typography color="text.secondary" gutterBottom>
//                 Appointments
//               </Typography>
//               <Typography variant="h4">{stats.scheduled}</Typography>
//               <LinearProgress 
//                 variant="determinate" 
//                 value={(stats.scheduled / stats.totalLeads) * 100} 
//                 color="info" 
//                 sx={{ mt: 2 }} 
//               />
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>

//       <Grid container spacing={3}>
//         <Grid item xs={12} md={6}>
//           <Card sx={{ height: '100%' }}>
//             <CardContent>
//               <Typography variant="h6" gutterBottom>
//                 Recent Leads
//               </Typography>
//               <Box sx={{ maxHeight: 400, overflow: 'auto' }}>
//                 {leads.map((lead) => (
//                   <Box 
//                     key={lead.id} 
//                     sx={{ 
//                       display: 'flex', 
//                       alignItems: 'center', 
//                       p: 2, 
//                       borderBottom: '1px solid rgba(0,0,0,0.12)',
//                       '&:last-child': { borderBottom: 'none' }
//                     }}
//                   >
//                     <Avatar sx={{ mr: 2 }}>
//                       {lead.name.charAt(0)}
//                     </Avatar>
//                     <Box sx={{ flexGrow: 1 }}>
//                       <Typography variant="subtitle1">{lead.name}</Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         {lead.serviceType}
//                       </Typography>
//                       <Box sx={{ display: 'flex', mt: 1 }}>
//                         <Chip 
//                           label={getLeadPriority(lead.leadScore)} 
//                           size="small" 
//                           color={getLeadPriorityColor(lead.leadScore)}
//                           sx={{ mr: 1 }}
//                         />
//                         <Chip 
//                           label={`Score: ${lead.leadScore}`} 
//                           size="small" 
//                           variant="outlined"
//                         />
//                       </Box>
//                     </Box>
//                     <Box sx={{ textAlign: 'right' }}>
//                       <Chip 
//                         label={lead.status} 
//                         size="small" 
//                         color={getStatusColor(lead.status)}
//                       />
//                       <Typography variant="caption" display="block" color="text.secondary">
//                         {new Date(lead.lastActivity).toLocaleDateString()}
//                       </Typography>
//                     </Box>
//                   </Box>
//                 ))}
//               </Box>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Card sx={{ height: '100%' }}>
//             <CardContent>
//               <Typography variant="h6" gutterBottom>
//                 Upcoming Appointments
//               </Typography>
//               <Timeline>
//                 {appointments.map((appointment) => (
//                   <TimelineItem key={appointment.id}>
//                     <TimelineSeparator>
//                       <TimelineDot color={appointment.status === 'scheduled' ? 'primary' : 'grey'}>
//                         <CalendarToday fontSize="small" />
//                       </TimelineDot>
//                       <TimelineConnector />
//                     </TimelineSeparator>
//                     <TimelineContent>
//                       <Box sx={{ 
//                         display: 'flex', 
//                         justifyContent: 'space-between',
//                         alignItems: 'center'
//                       }}>
//                         <Box>
//                           <Typography variant="subtitle1">{appointment.service}</Typography>
//                           <Typography variant="body2" color="text.secondary">
//                             {appointment.date} at {appointment.time}
//                           </Typography>
//                         </Box>
//                         <Button size="small" variant="outlined">
//                           Details
//                         </Button>
//                       </Box>
//                     </TimelineContent>
//                   </TimelineItem>
//                 ))}
//                 <TimelineItem>
//                   <TimelineSeparator>
//                     <TimelineDot color="grey">
//                       <Person fontSize="small" />
//                     </TimelineDot>
//                   </TimelineSeparator>
//                   <TimelineContent>
//                     <Typography>No more appointments</Typography>
//                   </TimelineContent>
//                 </TimelineItem>
//               </Timeline>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default DashboardPage;





import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, LinearProgress, Avatar, Button, Chip } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab';
import { CalendarToday, Email, Phone, CheckCircle, Warning, Person } from '@mui/icons-material';
import AIDashboardWidget from '../components/AIDashboardWidget'; // NEW IMPORT

const DashboardPage = () => {
  const { user } = useAuth();
  const [leads, setLeads] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [stats, setStats] = useState({
    totalLeads: 0,
    converted: 0,
    hotLeads: 0,
    scheduled: 0
  });

  useEffect(() => {
    // Simulate API calls
    const fetchData = async () => {
      try {
        // Mock leads data
        const mockLeads = [
          {
            id: 1,
            name: 'John Smith',
            email: 'john@example.com',
            phone: '555-123-4567',
            serviceType: 'Real estate',
            leadScore: 9,
            status: 'contacted',
            lastActivity: '2023-05-15T10:30:00Z'
          },
          {
            id: 2,
            name: 'Sarah Johnson',
            email: 'sarah@example.com',
            phone: '555-987-6543',
            serviceType: 'Insurance',
            leadScore: 7,
            status: 'new',
            lastActivity: '2023-05-14T14:45:00Z'
          },
          {
            id: 3,
            name: 'Michael Brown',
            email: 'michael@example.com',
            phone: '555-456-7890',
            serviceType: 'Financing',
            leadScore: 4,
            status: 'qualified',
            lastActivity: '2023-05-12T09:15:00Z'
          }
        ];

        // Mock appointments
        const mockAppointments = [
          {
            id: 1,
            service: 'Property Valuation',
            date: '2023-05-20',
            time: '10:00 AM',
            status: 'scheduled'
          },
          {
            id: 2,
            service: 'Insurance Review',
            date: '2023-05-22',
            time: '2:30 PM',
            status: 'pending'
          }
        ];

        setLeads(mockLeads);
        setAppointments(mockAppointments);
        setStats({
          totalLeads: 24,
          converted: 8,
          hotLeads: 5,
          scheduled: 3
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'new': return 'primary';
      case 'contacted': return 'info';
      case 'qualified': return 'warning';
      case 'converted': return 'success';
      default: return 'default';
    }
  };

  const getLeadPriority = (score) => {
    if (score >= 8) return 'Hot';
    if (score >= 5) return 'Warm';
    return 'Cold';
  };

  const getLeadPriorityColor = (score) => {
    if (score >= 8) return 'error';
    if (score >= 5) return 'warning';
    return 'info';
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      {/* NEW: AI Dashboard Widget - Add at the top */}
      <AIDashboardWidget sx={{ mb: 4 }} />

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="text.secondary" gutterBottom>
                Total Leads
              </Typography>
              <Typography variant="h4">{stats.totalLeads}</Typography>
              <LinearProgress variant="determinate" value={(stats.totalLeads / 30) * 100} sx={{ mt: 2 }} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="text.secondary" gutterBottom>
                Converted
              </Typography>
              <Typography variant="h4">{stats.converted}</Typography>
              <LinearProgress 
                variant="determinate" 
                value={(stats.converted / stats.totalLeads) * 100} 
                color="success" 
                sx={{ mt: 2 }} 
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="text.secondary" gutterBottom>
                Hot Leads
              </Typography>
              <Typography variant="h4">{stats.hotLeads}</Typography>
              <LinearProgress 
                variant="determinate" 
                value={(stats.hotLeads / stats.totalLeads) * 100} 
                color="error" 
                sx={{ mt: 2 }} 
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="text.secondary" gutterBottom>
                Appointments
              </Typography>
              <Typography variant="h4">{stats.scheduled}</Typography>
              <LinearProgress 
                variant="determinate" 
                value={(stats.scheduled / stats.totalLeads) * 100} 
                color="info" 
                sx={{ mt: 2 }} 
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Recent Leads
              </Typography>
              <Box sx={{ maxHeight: 400, overflow: 'auto' }}>
                {leads.map((lead) => (
                  <Box 
                    key={lead.id} 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      p: 2, 
                      borderBottom: '1px solid rgba(0,0,0,0.12)',
                      '&:last-child': { borderBottom: 'none' }
                    }}
                  >
                    <Avatar sx={{ mr: 2 }}>
                      {lead.name.charAt(0)}
                    </Avatar>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="subtitle1">{lead.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {lead.serviceType}
                      </Typography>
                      <Box sx={{ display: 'flex', mt: 1 }}>
                        <Chip 
                          label={getLeadPriority(lead.leadScore)} 
                          size="small" 
                          color={getLeadPriorityColor(lead.leadScore)}
                          sx={{ mr: 1 }}
                        />
                        <Chip 
                          label={`Score: ${lead.leadScore}`} 
                          size="small" 
                          variant="outlined"
                        />
                      </Box>
                    </Box>
                    <Box sx={{ textAlign: 'right' }}>
                      <Chip 
                        label={lead.status} 
                        size="small" 
                        color={getStatusColor(lead.status)}
                      />
                      <Typography variant="caption" display="block" color="text.secondary">
                        {new Date(lead.lastActivity).toLocaleDateString()}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Upcoming Appointments
              </Typography>
              <Timeline>
                {appointments.map((appointment) => (
                  <TimelineItem key={appointment.id}>
                    <TimelineSeparator>
                      <TimelineDot color={appointment.status === 'scheduled' ? 'primary' : 'grey'}>
                        <CalendarToday fontSize="small" />
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}>
                        <Box>
                          <Typography variant="subtitle1">{appointment.service}</Typography>
                          <Typography variant="body2" color="text.secondary">
                            {appointment.date} at {appointment.time}
                          </Typography>
                        </Box>
                        <Button size="small" variant="outlined">
                          Details
                        </Button>
                      </Box>
                    </TimelineContent>
                  </TimelineItem>
                ))}
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color="grey">
                      <Person fontSize="small" />
                    </TimelineDot>
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography>No more appointments</Typography>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DashboardPage;
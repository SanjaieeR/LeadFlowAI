import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Chip, IconButton, TextField, MenuItem } from '@mui/material';
import { CheckCircle, Cancel, Email, Phone, MoreVert } from '@mui/icons-material';
import { useAuth } from '../context/AuthContext';

const AdminDashboard = () => {
  const { user } = useAuth();
  const [leads, setLeads] = useState([]);
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('newest');

  useEffect(() => {
    // Simulate API call
    const fetchLeads = async () => {
      try {
        // Mock data
        const mockLeads = [
          {
            id: 1,
            name: 'John Smith',
            email: 'john@example.com',
            phone: '555-123-4567',
            serviceType: 'Real estate',
            leadScore: 9,
            status: 'new',
            source: 'website',
            lastActivity: '2023-05-15T10:30:00Z',
            notes: 'Interested in property valuation'
          },
          {
            id: 2,
            name: 'Sarah Johnson',
            email: 'sarah@example.com',
            phone: '555-987-6543',
            serviceType: 'Insurance',
            leadScore: 7,
            status: 'contacted',
            source: 'referral',
            lastActivity: '2023-05-14T14:45:00Z',
            notes: 'Follow up next week'
          },
          {
            id: 3,
            name: 'Michael Brown',
            email: 'michael@example.com',
            phone: '555-456-7890',
            serviceType: 'Financing',
            leadScore: 4,
            status: 'qualified',
            source: 'instagram',
            lastActivity: '2023-05-12T09:15:00Z',
            notes: 'Requested more information'
          },
          {
            id: 4,
            name: 'Emily Davis',
            email: 'emily@example.com',
            phone: '555-789-0123',
            serviceType: 'Human resources',
            leadScore: 8,
            status: 'converted',
            source: 'website',
            lastActivity: '2023-05-10T16:20:00Z',
            notes: 'Signed up for service'
          },
          {
            id: 5,
            name: 'David Wilson',
            email: 'david@example.com',
            phone: '555-234-5678',
            serviceType: 'Retail',
            leadScore: 6,
            status: 'lost',
            source: 'website',
            lastActivity: '2023-05-08T11:10:00Z',
            notes: 'Went with competitor'
          }
        ];

        setLeads(mockLeads);
      } catch (error) {
        console.error('Error fetching leads:', error);
      }
    };

    fetchLeads();
  }, []);

  const filteredLeads = leads.filter(lead => {
    if (filter === 'all') return true;
    return lead.status === filter;
  });

  const sortedLeads = [...filteredLeads].sort((a, b) => {
    if (sort === 'newest') {
      return new Date(b.lastActivity) - new Date(a.lastActivity);
    } else {
      return new Date(a.lastActivity) - new Date(b.lastActivity);
    }
  });

  const handleStatusChange = (leadId, newStatus) => {
    setLeads(leads.map(lead =>
      lead.id === leadId ? { ...lead, status: newStatus } : lead
    ));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'new': return 'primary';
      case 'contacted': return 'info';
      case 'qualified': return 'warning';
      case 'converted': return 'success';
      case 'lost': return 'error';
      default: return 'default';
    }
  };

  const getPriorityColor = (score) => {
    if (score >= 8) return 'error';
    if (score >= 5) return 'warning';
    return 'info';
  };

  const getPriorityLabel = (score) => {
    if (score >= 8) return 'Hot';
    if (score >= 5) return 'Warm';
    return 'Cold';
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Lead Management Dashboard
      </Typography>

      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            select
            fullWidth
            label="Filter by Status"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <MenuItem value="all">All Leads</MenuItem>
            <MenuItem value="new">New</MenuItem>
            <MenuItem value="contacted">Contacted</MenuItem>
            <MenuItem value="qualified">Qualified</MenuItem>
            <MenuItem value="converted">Converted</MenuItem>
            <MenuItem value="lost">Lost</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            select
            fullWidth
            label="Sort by Date"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <MenuItem value="newest">Newest First</MenuItem>
            <MenuItem value="oldest">Oldest First</MenuItem>
          </TextField>
        </Grid>
      </Grid>

      <Card>
        <CardContent>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Lead</TableCell>
                  <TableCell>Service</TableCell>
                  <TableCell>Source</TableCell>
                  <TableCell>Priority</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Last Activity</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sortedLeads.map((lead) => (
                  <TableRow key={lead.id}>
                    <TableCell>
                      <Typography fontWeight="bold">{lead.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {lead.email}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {lead.phone}
                      </Typography>
                    </TableCell>
                    <TableCell>{lead.serviceType}</TableCell>
                    <TableCell>{lead.source}</TableCell>
                    <TableCell>
                      <Chip 
                        label={`${getPriorityLabel(lead.leadScore)} (${lead.leadScore})`} 
                        color={getPriorityColor(lead.leadScore)}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>
                      <Chip 
                        label={lead.status} 
                        color={getStatusColor(lead.status)}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>
                      {new Date(lead.lastActivity).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <IconButton size="small" title="Send Email">
                          <Email fontSize="small" />
                        </IconButton>
                        <IconButton size="small" title="Call">
                          <Phone fontSize="small" />
                        </IconButton>
                        {lead.status !== 'converted' && lead.status !== 'lost' && (
                          <Button
                            variant="outlined"
                            size="small"
                            color="success"
                            startIcon={<CheckCircle />}
                            onClick={() => handleStatusChange(lead.id, 'converted')}
                          >
                            Convert
                          </Button>
                        )}
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AdminDashboard;
import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, TextField, MenuItem } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { useAuth } from '../context/AuthContext';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const AnalyticsPage = () => {
  const { user } = useAuth();
  const [timeRange, setTimeRange] = useState('month');
  const [leadData, setLeadData] = useState(null);

  useEffect(() => {
    // Simulate API call
    const fetchAnalytics = async () => {
      try {
        // Mock data
        const mockData = {
          sources: [
            { name: 'Website', value: 45 },
            { name: 'Referral', value: 25 },
            { name: 'Instagram', value: 15 },
            { name: 'Facebook', value: 10 },
            { name: 'Other', value: 5 }
          ],
          conversions: [
            { name: 'Jan', converted: 4, lost: 2 },
            { name: 'Feb', converted: 6, lost: 1 },
            { name: 'Mar', converted: 8, lost: 3 },
            { name: 'Apr', converted: 5, lost: 2 },
            { name: 'May', converted: 9, lost: 1 }
          ],
          leadStatus: [
            { name: 'Hot', value: 5 },
            { name: 'Warm', value: 12 },
            { name: 'Cold', value: 7 }
          ],
          totalLeads: 24,
          converted: 8,
          conversionRate: 33.3,
          avgResponseTime: '2.5 hours'
        };

        setLeadData(mockData);
      } catch (error) {
        console.error('Error fetching analytics:', error);
      }
    };

    fetchAnalytics();
  }, [timeRange]);

  if (!leadData) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          Loading Analytics...
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4">Analytics Dashboard</Typography>
        <TextField
          select
          size="small"
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          sx={{ minWidth: 120 }}
        >
          <MenuItem value="week">Last Week</MenuItem>
          <MenuItem value="month">Last Month</MenuItem>
          <MenuItem value="quarter">Last Quarter</MenuItem>
          <MenuItem value="year">Last Year</MenuItem>
        </TextField>
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="text.secondary">Total Leads</Typography>
              <Typography variant="h4">{leadData.totalLeads}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="text.secondary">Converted</Typography>
              <Typography variant="h4">{leadData.converted}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="text.secondary">Conversion Rate</Typography>
              <Typography variant="h4">{leadData.conversionRate}%</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="text.secondary">Avg Response Time</Typography>
              <Typography variant="h4">{leadData.avgResponseTime}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Lead Sources
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={leadData.sources}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="name"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {leadData.sources.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Lead Priority
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={leadData.leadStatus}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="name"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {leadData.leadStatus.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Monthly Conversions
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={leadData.conversions}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="converted" fill="#4CAF50" name="Converted" />
                  <Bar dataKey="lost" fill="#F44336" name="Lost" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AnalyticsPage;
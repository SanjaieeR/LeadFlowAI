import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material';

const services = [
  {
    id: 1,
    title: 'HR Consulting',
    description: 'Comprehensive HR solutions including recruitment, training, and compliance management.',
    price: '$199/hr'
  },
  {
    id: 2,
    title: 'Retail Strategy',
    description: 'Optimize your retail operations with our data-driven strategy and analytics.',
    price: '$299/hr'
  },
  {
    id: 3,
    title: 'Tax Planning',
    description: 'Expert tax planning and preparation services for businesses of all sizes.',
    price: '$249/hr'
  }
];

const ServicesPage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Our Services
      </Typography>
      <Grid container spacing={3}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {service.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {service.price}
                </Typography>
                <Typography variant="body2">
                  {service.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained">
                  Book Service
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesPage;
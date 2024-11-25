import React from 'react';
import { Box, Grid, Typography, Card, CardContent, Button } from '@mui/material';

const plans = [
  {
    title: 'Free',
    price: '$0',
    features: [
      'Capture ideas and find them quickly',
      'Sync unlimited devices',
      '10 GB monthly uploads',
      '200 MB max. note size',
      'Customize Home dashboard and access extra widgets',
      'Connect primary Google Calendar account',
      'Add due dates, reminders, and notifications to your tasks',
    ],
    highlight: false,
  },
  {
    title: 'Personal',
    price: '$11.99',
    features: [
      'Keep home and family on track',
      'Sync unlimited devices',
      '10 GB monthly uploads',
      '200 MB max. note size',
      'Customize Home dashboard and access extra widgets',
      'Connect primary Google Calendar account',
      'Add due dates, reminders, and notifications to your tasks',
    ],
    highlight: true,
  },
  {
    title: 'Organization',
    price: '$49.99',
    features: [
      'Capture ideas and find them quickly',
      'Sync unlimited devices',
      '10 GB monthly uploads',
      '200 MB max. note size',
      'Customize Home dashboard and access extra widgets',
      'Connect primary Google Calendar account',
      'Add due dates, reminders, and notifications to your tasks',
    ],
    highlight: false,
  },
];

const Pricing = () => (
  <Box
    sx={{
      padding: '4rem 2rem',
      backgroundColor: '#f9f9f9',
      textAlign: 'center',
    }}
  >
    {/* Header */}
    <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
      Choose <span style={{ color: '#FFD700' }}>Your Plan</span>
    </Typography>
    <Typography
      variant="body1"
      sx={{ maxWidth: '700px', margin: '0 auto', marginBottom: '3rem', color: '#555' }}
    >
      Whether you want to get organized, keep your personal life on track, or boost workplace
      productivity, Evernote has the right plan for you.
    </Typography>

    {/* Plans */}
    <Grid container spacing={4} justifyContent="center">
      {plans.map((plan, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card
            sx={{
              padding: '1.5rem',
              border: plan.highlight ? '2px solid #002147' : '1px solid #ddd',
              backgroundColor: plan.highlight ? '#002147' : '#fff',
              color: plan.highlight ? '#fff' : '#000',
              boxShadow: plan.highlight ? '0px 8px 16px rgba(0,0,0,0.2)' : 'none',
              textAlign: 'left',
              borderRadius: '8px',
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  color: plan.highlight ? '#FFD700' : '#000',
                }}
              >
                {plan.title}
              </Typography>
              <Typography
                variant="h4"
                sx={{ fontWeight: 'bold', marginBottom: '1rem', color: plan.highlight ? '#fff' : '#002147' }}
              >
                {plan.price}
              </Typography>
              <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <Typography variant="body2" sx={{ color: plan.highlight ? '#ddd' : '#555' }}>
                      ✓ {feature}
                    </Typography>
                  </li>
                ))}
              </ul>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: plan.highlight ? '#FFD700' : '#002147',
                  color: plan.highlight ? '#002147' : '#fff',
                  marginTop: '2rem',
                  textTransform: 'none',
                }}
              >
                Get Started
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Pricing;

import React from 'react';
import heroImage from '../assets/images/Practical Task/Image-container.png'
import { Box, Typography, Button, Grid } from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(4, 56, 115, 1)', // Deep blue background
        color: '#FFFFFF',
        padding: '40px 80px',
        height: '100vh',
        backgroundImage: `url('/path-to-wave-pattern.svg')`, // Optional wave pattern background
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {/* Left Section: Text Content */}
      <Box sx={{ maxWidth: '600px' }}>
        <Typography variant="h2" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
          Get More Done with <span style={{ color: '#FFFFFF' }}>whitepace</span>
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '30px' }}>
          Project management software that enables your teams to collaborate, plan,
          analyze, and manage everyday tasks.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#1E88E5', // Blue color
            color: '#FFFFFF',
            padding: '10px 20px',
            fontSize: '16px',
            fontWeight: 'bold',
            borderRadius: '8px',
            textTransform: 'none',
            '&:hover': { backgroundColor: '#1565C0' },
          }}
        >
          Try Whitepace Free →
        </Button>
      </Box>

      {/* Right Section: Illustration */}
      <Box>
        <img
          src={heroImage}
          alt="Team collaboration"
          style={{ maxWidth: '500px', height: 'auto' }}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;

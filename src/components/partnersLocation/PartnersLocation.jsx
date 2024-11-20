import React from 'react';
import { Box, Typography } from '@mui/material';

const PartnersLocations = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#00C853',
        minHeight: '500px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        color: '#ffffff',
      }}
    >
      {/* Text Section */}
      <Box sx={{ textAlign: 'center', marginBottom: '20px' }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 'bold', marginBottom: '10px' }}
        >
          Our partners' locations
        </Typography>
        <Typography variant="h6">
          We cooperate with over <strong>20,000 affiliates</strong> around the
          world on great terms
        </Typography>
      </Box>

      {/* Map Image */}
      <Box
        component="img"
        src="https://via.placeholder.com/1200x500.png?text=World+Map" // Replace with your actual map image URL
        alt="World Map"
        sx={{
          maxWidth: '100%',
          height: 'auto',
          margin: '0 auto',
        }}
      />
     
    </Box>
  );
};

export default PartnersLocations;
 
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const AffiliateSection = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        py: 4,
        backgroundColor: 'white',
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
        Become an affiliate of{' '}
        <Typography
          component="span"
          sx={{ color: 'green', fontWeight: 'bold' ,fontSize:'1em'}}
        >
          Linebet
        </Typography>
      </Typography>
      <Link  to="/sign-up" >
      <Button
        variant="contained"
        sx={{
          backgroundColor: 'green',
          color: 'white',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          px: 4,
          py: 1.5,
          '&:hover': {
            backgroundColor: 'darkgreen',
          },
        }}
       
      >
        Become an Affiliate
      </Button></Link>
     
    </Box>
  );
};

export default AffiliateSection;

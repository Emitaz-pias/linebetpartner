import React from 'react';
import { Box, Typography, Button, Select, MenuItem } from '@mui/material';
import Grid from '@mui/material/Grid2';

const TermsOfCooperation = () => {
  const [country, setCountry] = React.useState('Bangladesh');

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <Box
      sx={{
        background: 'linear-gradient(145deg, #00c9a7, #00c853)',
        color: '#fff',
        padding: '50px 20px',
      }}
    >
      {/* Section Title and Join Our Team Button */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '30px',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '24px', md: '36px' },
          }}
        >
          Terms of Cooperation
        </Typography>       
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {/* Left Section */}
        <Grid  size={{xs:12,md:6}}>

          <Box
            sx={{
              backgroundColor: '#fff',
              color: '#000',
              borderRadius: '16px',
              padding: '20px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Box sx={{display:'flex',justifyContent:'space-between'}}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 'bold', marginBottom: '10px' }}
            >
              Revenue Share
            </Typography>
            <Button
          variant="contained"
          sx={{
            backgroundColor: '#00C853',
            color: '#fff',
            borderRadius: '8px',
            textTransform: 'none',
            padding: '10px 20px',
            ':hover': {
              backgroundColor: '#00943c',
            },
          }}
        >
          Join Our Team
        </Button>
            </Box>
            <Typography variant="body2" sx={{ marginBottom: '20px' }}>
              Get a lifetime percentage of the net income from every customer
              you refer
            </Typography>

            <Box              
            >
              <Select
                value={country}
                onChange={handleCountryChange}
                variant="outlined"
                sx={{
                  width: '50%',
                  borderRadius: '8px',
                  backgroundColor: '#f5f5f5',
                }}
              >
                <MenuItem value="Bangladesh">Bangladesh</MenuItem>
                <MenuItem value="India">India</MenuItem>
                <MenuItem value="USA">USA</MenuItem>
              </Select>
              <Box>
                
              </Box>
            <Box  sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#F5F5F5',
                padding: '20px',
                borderRadius: '8px',
              }}>
            <Typography
                variant="h4"
                sx={{ fontWeight: 'bold', color: '#00C853' }}
              >
                From 25%
              </Typography>
            </Box>
            </Box>

            {/* Contact Us Section */}
            <Box
              sx={{               
                backgroundColor: '#F5F5F5',
                padding: '20px',
                borderRadius: '8px',
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  marginBottom: '10px',
                  textAlign: 'center',
                  fontSize: '14px',
                }}
              >
                Contact us to learn more about the terms for this country
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#00C853',
                  color: '#fff',
                  borderRadius: '8px',
                  textTransform: 'none',
                  padding: '10px 20px',
                  ':hover': {
                    backgroundColor: '#00943c',
                  },
                }}
              >
                Contact Us
              </Button>
            </Box>
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid size={{xs:12,md:6}}>
          <Grid container spacing={2}>
            {/* CPA Card */}
            <Grid size={{xs:12,md:6}}>
              <Box
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  padding: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#fff',
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  CPA
                </Typography>
                <Typography variant="body2" sx={{ marginTop: '10px' }}>
                  Earn bonuses when customers referred by you complete key
                  actions
                </Typography>
                <Button
                  variant="outlined"
                  sx={{
                    marginTop: '10px',
                    color: '#fff',
                    borderColor: '#fff',
                    borderRadius: '8px',
                    textTransform: 'none',
                    ':hover': { backgroundColor: '#00C853', color: '#fff' },
                  }}
                >
                  Upon Request
                </Button>
              </Box>
            </Grid>

            {/* Hybrid Card */}
            <Grid size={{xs:12,md:6}}>
              <Box
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  padding: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#fff',
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Hybrid
                </Typography>
                <Typography variant="body2" sx={{ marginTop: '10px' }}>
                  Maximize your benefits with two types of partnership
                </Typography>
                <Button
                  variant="outlined"
                  sx={{
                    marginTop: '10px',
                    color: '#fff',
                    borderColor: '#fff',
                    borderRadius: '8px',
                    textTransform: 'none',
                    ':hover': { backgroundColor: '#00C853', color: '#fff' },
                  }}
                >
                  Upon Request
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TermsOfCooperation;

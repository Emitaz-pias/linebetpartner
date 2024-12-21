import React from 'react';
import { Box, Typography, Button, Select, MenuItem } from '@mui/material';
import Grid from '@mui/material/Grid2';
import termnsBg from '../../images/terms--coop-bg.png'

const TermsOfCooperation = () => {
  const [country, setCountry] = React.useState('Bangladesh');

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <Box
    sx={{
      background: `url(${termnsBg}), linear-gradient(145deg, #00c9a7, #00c853)`,
      color: '#fff',
      padding: '50px 20px',    
      backgroundSize: 'contain',
      backgroundPosition: 'left bottom',
      backgroundRepeat: 'no-repeat'
  }}
    >
      {/* Section Title and Join Our Team Button */}
      <Box
        sx={{
         textAlign:'center'
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

      <Grid container spacing={4} justifyContent="center" >
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
            <Box sx={{display:{md:'flex'},justifyContent:'space-between'}}>
              <Typography variant='h6' fontWeight={'bold'}>
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
            <Typography variant="p" sx={{ marginBottom: '20px' }}>
              Get a lifetime percentage of the net income from every customer
              you refer
            </Typography>

         <Box sx={{display:{md:'flex'},flexDirection:'row' }}>
       <Grid spacing={1} margin='0.5em'  size={{md:8}}>
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
                  margin:'0.5em'
                }}
              >
               <MenuItem value="Afghanistan">Afghanistan</MenuItem>
<MenuItem value="Algeria">Algeria</MenuItem>
<MenuItem value="Argentina">Argentina</MenuItem>
<MenuItem value="Australia">Australia</MenuItem>
<MenuItem value="Austria">Austria</MenuItem>
<MenuItem value="Bangladesh">Bangladesh</MenuItem>
<MenuItem value="Belgium">Belgium</MenuItem>
<MenuItem value="Brazil">Brazil</MenuItem>
<MenuItem value="Canada">Canada</MenuItem>
<MenuItem value="Chile">Chile</MenuItem>
<MenuItem value="China">China</MenuItem>
<MenuItem value="Colombia">Colombia</MenuItem>
<MenuItem value="Denmark">Denmark</MenuItem>
<MenuItem value="Egypt">Egypt</MenuItem>
<MenuItem value="Finland">Finland</MenuItem>
<MenuItem value="France">France</MenuItem>
<MenuItem value="Germany">Germany</MenuItem>
<MenuItem value="Greece">Greece</MenuItem>
<MenuItem value="India">India</MenuItem>
<MenuItem value="Indonesia">Indonesia</MenuItem>
<MenuItem value="Iran">Iran</MenuItem>
<MenuItem value="Iraq">Iraq</MenuItem>
<MenuItem value="Italy">Italy</MenuItem>
<MenuItem value="Japan">Japan</MenuItem>
<MenuItem value="Kenya">Kenya</MenuItem>
<MenuItem value="Malaysia">Malaysia</MenuItem>
<MenuItem value="Mexico">Mexico</MenuItem>
<MenuItem value="Morocco">Morocco</MenuItem>
<MenuItem value="Netherlands">Netherlands</MenuItem>
<MenuItem value="New Zealand">New Zealand</MenuItem>
<MenuItem value="Nigeria">Nigeria</MenuItem>
<MenuItem value="Norway">Norway</MenuItem>
<MenuItem value="Pakistan">Pakistan</MenuItem>
<MenuItem value="Philippines">Philippines</MenuItem>
<MenuItem value="Poland">Poland</MenuItem>
<MenuItem value="Portugal">Portugal</MenuItem>
<MenuItem value="Russia">Russia</MenuItem>
<MenuItem value="Saudi Arabia">Saudi Arabia</MenuItem>
<MenuItem value="South Africa">South Africa</MenuItem>
<MenuItem value="South Korea">South Korea</MenuItem>
<MenuItem value="Spain">Spain</MenuItem>
<MenuItem value="Sweden">Sweden</MenuItem>
<MenuItem value="Switzerland">Switzerland</MenuItem>
<MenuItem value="Thailand">Thailand</MenuItem>
<MenuItem value="Turkey">Turkey</MenuItem>
<MenuItem value="United Arab Emirates">United Arab Emirates</MenuItem>
<MenuItem value="United Kingdom">United Kingdom</MenuItem>
<MenuItem value="USA">USA</MenuItem>
<MenuItem value="Vietnam">Vietnam</MenuItem>
<MenuItem value="Zimbabwe">Zimbabwe</MenuItem>

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
                From 8%
              </Typography>
            </Box>
            </Box>
       </Grid>

            {/* Contact Us Section */}
        <Grid>    <Box
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
            </Box></Grid>
         </Box>
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid margin='0.5em'size={{xs:12,md:6}}>
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

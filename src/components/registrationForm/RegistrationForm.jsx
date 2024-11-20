import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Grid,
  Stepper,
  Step,
  StepLabel,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

const RegistrationForm = () => {
  const steps = ['Contact details', 'Additional information', 'Login details'];
  const activeStep = 0; // Change this dynamically based on the current step (0 for Step 1)

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        p: 2,
      }}
    >
      <Box
        sx={{
          backgroundColor: 'white',
          width: '90%',
          maxWidth: '900px',
          borderRadius: '10px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          p: 4,
          display: 'flex',
        }}
      >
        {/* Left Side Navigation */}
        <Box
          sx={{
            width: '30%',
            borderRight: '1px solid #e0e0e0',
            pr: 2,
          }}
        >
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Registration
          </Typography>

          {/* Stepper List */}
          <List>
            {steps.map((step, index) => (
              <ListItem key={index} sx={{ mb: 2 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor:
                        index === activeStep ? 'green' : '#e0e0e0',
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                    }}
                  />
                  <ListItemText
                    primary={step}
                    primaryTypographyProps={{
                      fontWeight: index === activeStep ? 'bold' : 'normal',
                      color: index === activeStep ? 'black' : 'gray',
                    }}
                  />
                </Box>
              </ListItem>
            ))}
          </List>

          <Typography variant="body2" color="textSecondary" mt={4}>
            Already have an account?{' '}
            <Button variant="text" color="primary">
              Log in
            </Button>
          </Typography>
        </Box>

        {/* Right Side Form */}
        <Box sx={{ width: '70%', pl: 3 }}>
          {/* Step Indicator */}
          <Box display="flex" alignItems="center" gap={2} mb={4}>
            <Box
              sx={{
                position: 'relative',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                border: '3px solid green',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '18px',
                color: 'green',
              }}
            >
              {activeStep + 1}/3
              {/* Progress Circle */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  border: '3px solid #e0e0e0',
                  clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)',
                }}
              />
            </Box>
            <Typography variant="h6" fontWeight="bold">
              Step {activeStep + 1}: Enter your contact information
            </Typography>
          </Box>

          <Typography variant="body2" color="textSecondary" mb={4}>
            *Fields marked with an asterisk are compulsory
          </Typography>

          {/* Form Section */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First name*"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last name*"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email*"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="messenger-label">Messenger*</InputLabel>
                <Select
                  labelId="messenger-label"
                  label="Messenger*"
                  defaultValue=""
                >
                  <MenuItem value="WhatsApp">WhatsApp</MenuItem>
                  <MenuItem value="Telegram">Telegram</MenuItem>
                  <MenuItem value="Viber">Viber</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Messenger username*"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Phone*"
                variant="outlined"
                required
                InputProps={{
                  startAdornment: (
                    <Box
                      component="span"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        mr: 1,
                      }}
                    >
                        {/* Country Flag */}
                      <img
                        src="https://flagcdn.com/w40/bd.png"
                        alt="Bangladesh flag"
                        style={{ width: '24px', height: '16px' }}
                      />
                      +880
                    </Box>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="country-label">Country*</InputLabel>
                <Select
                  labelId="country-label"
                  label="Country*"
                  defaultValue="Bangladesh"
                >
                  <MenuItem value="Bangladesh">Bangladesh</MenuItem>
                  <MenuItem value="India">India</MenuItem>
                  <MenuItem value="United States">United States</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          {/* Continue Button */}
          <Box mt={4} display="flex" justifyContent="flex-end">
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'green',
                color: 'white',
                textTransform: 'uppercase',
                px: 4,
                py: 1.5,
                '&:hover': {
                  backgroundColor: 'darkgreen',
                },
              }}
            >
              Continue
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RegistrationForm;

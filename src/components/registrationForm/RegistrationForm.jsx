import React, { useState } from 'react';
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
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

const RegistrationForm = () => {
  const { register, reset, control,handleSubmit, formState: { errors } } = useForm();
  const [success,setSuccess] = useState(false)

  const createSheetData = (data) => {
    console.log(data)
    fetch('https://sheetdb.io/api/v1/jyj8dqbcyv126', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: [
          {
            'name': data.fullName,
            "email": data.email,
            "country": data.country,          
            "phone": data.phone,            
            "nickname": data.nickname,
          }
        ]
      })
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.created === 1) {
          setSuccess(true)
          reset();
        }
      });
  };

  const onSubmit = async data => {
    try {
      createSheetData(data);
    } catch (error) {
      alert(error.message);
    }
  };
  
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
        <Box sx={{ width: '70%', pl: 3 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="fullName"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Full Name"
                      variant="outlined"
                      required
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Email"
                      variant="outlined"
                      required
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="country"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Country"
                      variant="outlined"
                      required
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="phone"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Phone Number"
                      variant="outlined"
                      required
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="telegram"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <FormControl fullWidth>
                      <InputLabel id="telegram-label">Telegram</InputLabel>
                      <Select
                        {...field}
                        labelId="messenger-label"
                        label="Messenger"
                      >
                        <MenuItem value="Telegram">Telegram</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                      </Select>
                    </FormControl>
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="nickname"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Telegram Username"
                      variant="outlined"
                      required
                    />
                  )}
                />
              </Grid>
            </Grid>

            <Box mt={4} display="flex" justifyContent="flex-end">
              <Button
                type="submit"
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
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default RegistrationForm;

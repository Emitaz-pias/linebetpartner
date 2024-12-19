import React from 'react';
import { Box, Typography, Paper, Grid, Link } from '@mui/material';
import { Telegram, Email, Instagram, LinkedIn,  } from '@mui/icons-material';

const ContactsPage = () => {
  const contacts = [
    // {
    //   icon: <Telegram color="success" />,
    //   title: 'Telegram',
    //   detail: '@Linebet_Partners_bot',
    // },
    {
      icon: <Email color="success" />,
      title: 'Email',
      detail: 'manager@linebetagentship.com',
    },
    {
      icon: <Instagram color="success" />,
      title: 'Instagram',
      detail: '@linebet.agentship',
    },
    {
      icon: <LinkedIn color="success" />,
      title: 'LinkedIn',
      detail: 'Linebet',
    },
    {
      icon: <Email color="success" />,
      title: 'Skype',
      detail: 'manager@linebetagentship.com',
    },
  ];

  return (
    <Box sx={{ maxWidth: 1000, mx: 'auto', my: 4, textAlign: 'center' }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Contacts
      </Typography>
      <Grid container spacing={3}>
        {contacts.map((contact, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              sx={{
                p: 3,
                borderRadius: 2,
                textAlign: 'center',
                boxShadow: 2,
                backgroundColor: '#f8fafa',
              }}
            >
              <Box sx={{ fontSize: 40, mb: 2 }}>{contact.icon}</Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                {contact.title}
              </Typography>
              <Link href="#" color="inherit" underline="hover">
                {contact.detail}
              </Link>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ContactsPage;

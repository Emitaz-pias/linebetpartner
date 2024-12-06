import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import icon1 from '../../images/icon1.png';
import icon2 from '../../images/icon2.png';
import icon3 from '../../images/icon3.png';
import icon4 from '../../images/icon4.png';
import icon5 from '../../images/icon5.png';
import icon6 from '../../images/icon6.png';


const AffiliateSteps = () => {
  // Steps data (updated to six cards)
  const steps = [
    {
      id: 1,
      title: 'Sign up for the affiliate program',
      description: '',
      imgSrc: icon1,
    },
    {
      id: 2,
      title: 'Receive a confirmation email',
      description:
        '*The email will arrive within 48 hours of your application being submitted.',
      imgSrc: icon2,
    },
    {
      id: 3,
      title: 'Contact your personal manager',
      description: 'Use the details mentioned in the email to get in touch.',
      imgSrc: icon3,
    },
    {
      id: 4,
      title: 'Start earning!',
      description:
        'Get recommendations from our managers and begin earning effectively.',
      imgSrc: icon4,
    },
    {
      id: 5,
      title: 'Optimize your campaigns',
      description:
        'Work with your manager to improve campaign performance over time.',
      imgSrc: icon5,
    },
    {
      id: 6,
      title: 'Reap the rewards',
      description:
        'Enjoy ongoing commissions as your campaigns succeed.',
      imgSrc: icon6,
    },
  ];

  // Slider settings
  const settings = {
    dots: false,
    arrows: false,
    autoplay: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ padding: '40px 20px', marginLeft: '1em', textAlign: 'center' }}>
      {/* Title */}
      <Typography
        variant="h4"
        sx={{ fontWeight: 'bold', marginBottom: '30px' }}
      >
        How do I become an Affiliate?
      </Typography>

      {/* Slider */}
      <Slider {...settings}>
        {steps.map((step) => (
         <Box sx={{padding:'10px'}}>
           <Box
            key={step.id}
            sx={{
              padding: '20px',
              background: '#ffffff',
              boxShadow:'gray 0.1em 0.1em 0.1em ',
              borderRadius: '10px',
              textAlign: 'center', 
              margin:'10px'

            }}
          >
            <Box sx={{display:{md:'flex'}, padding: '20px',}}>
            <Box  sx={{textAlign:'center'}}>
              {/* Step Number */}
              <Box
                sx={{
                  backgroundColor: '#ECF6F0',
                  color: '#00c853',
                  width: '2.5em',
                  height: '2.5em',
                  borderRadius: '10%',                
                  fontSize: '18px',
                  marginBottom: '10px',
                 display:'flex',
                 alignItems:'center',
                 justifyContent:'center'
                }}
              >
                {step.id}
              </Box>

              {/* Step Title */}
              <Typography
                variant="p"
              sx={{textAlign:'start'}}
              >
                {step.title}
              </Typography></Box>
            {/* Step image */}
            <Box
          
              component="img"
              src={step.imgSrc}
              alt={`altext ${step.id}`}
              sx={{
                width: "50%",
                height: '50%',
                marginBottom: '20px',
                objectFit: 'contain',
              }}
            />      
              </Box>     
          </Box>
         </Box>

        ))}
      </Slider>
    </Box>
  );
};

export default AffiliateSteps;

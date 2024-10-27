import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Button } from '@mui/material';
import './Advantage.css'; // Add your custom CSS here

const AdvantagesSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust for desktop
    slidesToScroll: 1,
    nextArrow: <Button variant="outlined">Next</Button>,
    prevArrow: <Button variant="outlined">Prev</Button>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Data for the slides
  const cardData = [
    {
      image: 'assets/cross-platform.svg', // Update with the correct path
      title: "Cross-platform support",
      description: "Our cross-platform system supports all types of devices which allows us to reach the widest audience."
    },
    {
      image: 'assets/commissions.svg', // Update with the correct path
      title: "High commission rates",
      description: "A flexible program that allows you to earn 25% commission or more from customers."
    },
    {
      image: 'assets/providers.svg', // Update with the correct path
      title: "Game providers",
      description: "We partner with over 100 game providers, and this number is constantly growing."
    },
    {
      image: 'assets/bonus-program.svg', // Update with the correct path
      title: "Bonus program",
      description: "Our bonus programs are developed with all potential risks taken into account and our software can be adapted to suit our affiliates' requirements."
    },
    {
      image: 'assets/regular-payments.svg', // Update with the correct path
      title: "Regular payouts",
      description: "Get paid every week."
    },
    {
      image: 'assets/support.svg', // Update with the correct path
      title: "Excellent support",
      description: "Each affiliate is assigned a personal manager."
    },
  ];

  return (
    <Box id="advantages" className='bYroLG' sx={{ padding: '60px 0' }}>
      <Typography variant="h2" className="Heading" align="center">
        What do we offer?
      </Typography>
      <Box className="CardList" sx={{ marginTop: 4 }}>
        <Slider {...settings}>
          {cardData.map((card, index) => (
            <Box key={index} sx={{ padding: 2 }}>
              <Box
                className="Card"
                sx={{
                  border: '1px solid #e0e0e0',
                  borderRadius: 2,
                  padding: 2,
                  textAlign: 'center',
                }}
              >
                <img src={card.image} alt={card.title} className="Img" style={{ width: '100px', height: '100px' }} />
                <Typography variant="h5" className="Title" sx={{ marginTop: 2 }}>
                  {card.title}
                </Typography>
                <Typography className="Text" sx={{ marginTop: 1 }}>
                  {card.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default AdvantagesSlider;

import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import './Advantage.css';
import crossPlatform from '../../images/cross-platform.svg'
import commissions from '../../images/commissions.svg'
import providers from '../../images/providers.svg'
import bonusProgramm from '../../images/bonus-program.svg'
import regularPayments from '../../images/regular-payments.svg'
import support from '../../images/support.svg'
import Grid from '@mui/material/Grid2';
const AdvantagesSlider = () => {
  const [circleSize, setCircleSize] = useState(0); // Initial size for green background
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
    afterChange: (currentSlide) => {
      setCircleSize(0 + currentSlide * 140); // Change circle size based on the slide index
    }
  };

  const cardData = [
    { image: crossPlatform, title: "Cross-platform support", description: "Our cross-platform system supports all types of devices which allows us to reach the widest audience." },
    { image: commissions, title: "High commission rates", description: "A flexible program that allows you to earn 25% commission or more from customers." },
    { image: providers, title: "Game providers", description: "We partner with over 100 game providers, and this number is constantly growing." },
    { image: bonusProgramm, title: "Bonus program", description: "Our bonus programs are developed with all potential risks taken into account and our software can be adapted to suit our affiliates' requirements." },
    { image: regularPayments, title: "Regular payouts", description: "Get paid every week." },
    { image: support, title: "Excellent support", description: "Each affiliate is assigned a personal manager." },
  ];

  const handleWheel = (event) => {
    event.preventDefault();
    if (event.deltaY > 0) {
      sliderRef.current.slickNext();
    } else {
      sliderRef.current.slickPrev();
    }
  };

  useEffect(() => {
    const sliderElement = document.getElementById("advantages");
    sliderElement.addEventListener("wheel", handleWheel);
    return () => sliderElement.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <Box id="advantages"
      ref={sectionRef} className="bYroLG" sx={{ padding: '60px 0', position: 'relative', overflow: 'hidden' }}>

      {/* Heading and Slider */}
      <Typography variant="h4" className="Heading" align="center">
        What do we offer?
      </Typography>
      <div

        className="background-circle"
        style={{
          width: circleSize >= 600 ? '100%' : `${circleSize}px`, // Full width at max size
          height: circleSize >= 600 ? '100%' : `${circleSize}px`, // Cover entire section at max size
          position: 'absolute',
          top: '80%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#00C853',
          borderRadius: circleSize >= 600 ? '0' : '50%', // Remove border-radius at max size
          clipPath: circleSize >= 600 ? 'none' : 'inset(0% 0 50% 0)', // Remove half-circle at max size
          zIndex: -1,
          transition: 'width 0.3s ease, height 0.3s ease',
        }}
      />
      <Grid container  className="CardList" border='1px solid red' sx={{ marginTop: 4 }}>
       <Grid size={{sm:10,xs:10}}>
       <Slider ref={sliderRef} {...settings}>
          {cardData.map((card, index) => (
            <Box key={index} sx={{ padding: 2 }}>
              <Box
                className="Card"
                sx={{
                  border: '1px solid #e0e0e0',
                  borderRadius: 2,
                  padding: 2,
                  textAlign: 'center',
                  display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'
                }}
              >
                <Box component='img' src={card.image} alt={card.title} className="Img"  style={{ width: '50px', height: '50px', }} />
                <Typography variant="h5" color='#60c589' className="Title" sx={{ marginTop: 2 }}>
                  {card.title}
                </Typography>
                <Typography className="Text" sx={{ marginTop: 1 }}>
                  {card.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Slider>
       </Grid>
      </Grid>
    </Box>
  );
};

export default AdvantagesSlider;

import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import './Advantage.css';

const AdvantagesSlider = () => {
  const [circleSize, setCircleSize] = useState(0);
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);
  const [ , setIsInView] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const cardData = [
    { image: 'assets/cross-platform.svg', title: "Cross-platform support", description: "Our cross-platform system supports all types of devices which allows us to reach the widest audience." },
    { image: 'assets/commissions.svg', title: "High commission rates", description: "A flexible program that allows you to earn 25% commission or more from customers." },
    { image: 'assets/providers.svg', title: "Game providers", description: "We partner with over 100 game providers, and this number is constantly growing." },
    { image: 'assets/bonus-program.svg', title: "Bonus program", description: "Our bonus programs are developed with all potential risks taken into account and our software can be adapted to suit our affiliates' requirements." },
    { image: 'assets/regular-payments.svg', title: "Regular payouts", description: "Get paid every week." },
    { image: 'assets/support.svg', title: "Excellent support", description: "Each affiliate is assigned a personal manager." },
  ];

  const handleWheel = (event) => {
    event.preventDefault();
    if (event.deltaY > 0) {
      sliderRef.current.slickNext();
      setCircleSize((prev) => Math.min(prev + 50, 600)); // Increment size on scroll down
    } else {
      sliderRef.current.slickPrev();
      setCircleSize((prev) => Math.max(prev - 50, 0)); // Decrement size on scroll up
    }
  };

  useEffect(() => {
    const sliderElement = document.getElementById("advantages");
    sliderElement.addEventListener("wheel", handleWheel);
    return () => sliderElement.removeEventListener("wheel", handleWheel);
  }, []);

  useEffect(() => {
    // Detect if section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsInView(entry.isIntersecting));
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    // return () => {
    //   if (sectionRef.current) observer.unobserve(sectionRef.current);
    // };
  }, []);

  return (
    <Box id="advantages" ref={sectionRef} className="bYroLG" sx={{ padding: '60px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Background Circle positioned behind the cards */}
      <div
        className="background-circle"
        style={{
          width: `${circleSize}px`,
          height: `${circleSize}px`,
          position: 'absolute',
          top: '80%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#00C853',
          borderRadius: '50%', // Full circle shape
          clipPath: 'inset(00% 0 50% 0)', // Show only the top half
          zIndex: -1,
          transition: 'width 0.1s ease, height 0.1s ease',
        }}
      />

      {/* Heading and Slider */}
      <Typography variant="h2" className="Heading" align="center">
        What do we offer?
      </Typography>
      <Box className="CardList" sx={{ marginTop: 4 }}>
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

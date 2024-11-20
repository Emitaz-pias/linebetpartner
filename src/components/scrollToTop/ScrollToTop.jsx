import React, { useState, useEffect } from 'react';
import { Fab, Typography } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrolled = window.scrollY > 300; // Adjust threshold as needed
    setIsVisible(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    isVisible && (
      <Fab        
        size="medium"
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          zIndex: 1000,
        }}
      >
          <Typography
          sx={{
            fontSize: '24px',
            color: '#00C853',
            fontWeight: 'bold',
          }}
        >
          ↑
        </Typography>
      </Fab>
    )
  );
};

export default ScrollToTopButton;

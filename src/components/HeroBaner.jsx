import React, { useRef , useEffect, useState} from 'react';
import { Box, Typography, Button, useMediaQuery, useTheme, IconButton } from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';

const HeroBanner = ({ slides }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const carouselRef = useRef();
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // Handle Next Slide
  const handleNext = () => {
    setActiveSlideIndex((prev) => Math.min(prev + 1, slides.length - 1));
  };

  // Handle Previous Slide
  const handlePrev = () => {
    setActiveSlideIndex((prev) => Math.max(prev - 1, 0));
  };



  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      const slideWidth = carousel.offsetWidth;
      carousel.scrollTo({
        left: slideWidth * activeSlideIndex,
        behavior: 'smooth',
      });
    }
  }, [activeSlideIndex]);


  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      <Box
        ref={carouselRef}
        sx={{
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth',
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              minWidth: '100%',
              height: { xs: '250px', sm: '400px', md: '500px' },
              position: 'relative',
              scrollSnapAlign: 'start',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              backgroundColor: 'black', // Fallback while image loads
            }}
          >
            {/* Lazy loaded Image */}
            <Box
              component="img"
              src={slide.image}
              alt={slide.title}
              loading="lazy"
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                zIndex: 0,
              }}
            />

            {/* Overlay Content */}
            <Box
              sx={{
                position: 'relative',
                zIndex: 1,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                p: 2,
                borderRadius: 2,
                textAlign: 'center',
                maxWidth: '80%',
              }}
            >
              <Typography variant={isMobile ? 'h6' : 'h4'} gutterBottom>
                {slide.title}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {slide.subtitle}
              </Typography>
              {slide.buttonText && (
                <Button variant="contained" color="primary" href={slide.buttonLink}>
                  {slide.buttonText}
                </Button>
              )}
            </Box>
          </Box>
        ))}
      </Box>

      {/* Navigation Arrows (Optional, shown only on desktop) */}
      {!isMobile && (
        <>
          <IconButton
            onClick={() => handlePrev()}
            sx={{
              position: 'absolute',
              top: '50%',
              left: 16,
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0,0,0,0.5)',
              color: 'white',
              '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' },
            }}
          >
            <ArrowBackIosNew />
          </IconButton>

          <IconButton
            onClick={() => handleNext()}
            sx={{
              position: 'absolute',
              top: '50%',
              right: 16,
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0,0,0,0.5)',
              color: 'white',
              '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' },
            }}
          >
            <ArrowForwardIos />
          </IconButton>
        </>
      )}
    </Box>
  );
};

export default HeroBanner;

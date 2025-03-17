import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid2, Button } from '@mui/material';
import LazyLoad from 'react-lazyload';
import RaceCard from '../components/RaceCard';
import VideoCard from '../components/VideoCard';
import Notification from '../components/Notification';
import { useTranslation } from 'react-i18next';
import {racesData} from "../data/racesData";
import HeroBanner from '../components/HeroBaner';

import {slides} from "../data/racesData";

const Home = () => {
  const [races, setRaces] = useState(racesData);
  const [showNotification, setShowNotification] = useState(false);
  const { t } = useTranslation();


useEffect(() => {
    setTimeout(() => setShowNotification(true), 2000);
}, [showNotification]);   



  const handleClose = () => {
    setShowNotification(false);
  };

  return (
    <Container  >
      <Typography variant="h5" gutterBottom>
        {t('title')}
      </Typography>
      <Notification
        open={showNotification}
        message=  {t('message')}
        severity="success" 
        onClose={handleClose}
      />
       <HeroBanner slides={slides} />
       <Typography variant="h6">
         {t('heading')}
          </Typography>
      <Grid2 container spacing={4} justifyContent="center">

        {races.map(race => (
          <Grid2 item key={race.id}>
            <LazyLoad height={200} offset={100}>
              <RaceCard race={race} />
            </LazyLoad>

            <LazyLoad height={200} offset={100}>
              <VideoCard videoId={race.videoUrl} />
            </LazyLoad>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default Home;

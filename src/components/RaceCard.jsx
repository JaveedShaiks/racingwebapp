import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, CardActionArea } from '@mui/material';
import { useTranslation } from 'react-i18next';

const RaceCard = ({ race }) => {
  const { t } = useTranslation();

  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={race.name}
          height="140"
          image={race.imageUrl}
          title={race.name}
        />
        <CardContent>
          <Typography variant="h6" component="div">
            {race.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {race.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ marginTop: 1 }}
      >
        {t('view Details')}
      </Button>
    </Card>
  );
};

export default RaceCard;

import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, CardActionArea } from '@mui/material';
import { useTranslation } from 'react-i18next';
import YouTube from 'react-youtube';

const VideoCard = ({ videoId }) => {
  const { t } = useTranslation();

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  }

  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardActionArea>
        <CardMedia
          component="div"
          
          height="200"
          sx={{ height: 200 }}
        >
                <YouTube
          videoId={videoId}
          opts={opts}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '300px',
            height: '200px',
            borderRadius: '8px',
          }}
          title={"test "}
        />
      </CardMedia>
        <CardContent>
          <Typography variant="h6" component="div">
          video test title
          </Typography>
        </CardContent>
      </CardActionArea>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ marginTop: 1 }}
       
      >
        {t('view Video')}
      </Button>
    </Card>
  );
};

export default VideoCard;

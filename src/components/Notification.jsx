import React, { useState, useEffect } from 'react';
import { Snackbar, Alert, Slide } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Notification = ({ open, message, severity, onClose }) => {
  const { t } = useTranslation();

  
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [open, onClose]);

  const transition = (props) => <Slide {...props} direction="up" />;

  return (
    <Snackbar
      open={open}
      autoHideDuration={2000}
      onClose={onClose}
      TransitionComponent={transition}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert
        onClose={onClose}
        severity={severity || 'info'}
        sx={{ width: '100%' }}
        variant="filled"
      >
        {t(message)}
      </Alert>
    </Snackbar>
  );
};

export default Notification;

import React, { useEffect, useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';
import './App.css';


function App() {
  const [theme, setTheme] = useState(createTheme({
    palette: {
      mode: 'light',
    }
  }));

  const { t } = useTranslation();

  useEffect(() => {
    const getUserLocation = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          if (latitude < 0) {
          
            setTheme(createTheme({
              palette: {
                mode: 'dark',
              }
            }));
            i18n.changeLanguage('es'); 
          } else {
      
            setTheme(createTheme({
              palette: {
                mode: 'light',
              }
            }));
            i18n.changeLanguage('en'); 
          }
        });
      }
    };

    getUserLocation();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

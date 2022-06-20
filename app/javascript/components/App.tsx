import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Typography } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import Home from './Home';
import Header from './Header';
import './App.css';
import SignInForm from './SignInForm';

const App = () => {
  const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
    typography: {
      fontFamily: [
        'Roboto',
        'Noto Sans JP',
        'Helvetica',
        'Arial',
        'sans-serif',
      ].join(','),
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path='/*' element={<Home />} />
        <Route path='/sign_in' element={<SignInForm />} />
      </Routes>
      <ToastContainer />
    </ThemeProvider>
  )
};

export default App;

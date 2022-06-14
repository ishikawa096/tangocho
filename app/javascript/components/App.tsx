import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './Home';
import './App.css';

const App = () => (
  <>
    <Routes>
      <Route path='/*' element={<Home />} />
    </Routes>
    <ToastContainer />
  </>
);

export default App;

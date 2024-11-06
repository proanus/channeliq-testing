// src/App.js
import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage.js';
import HomePage from './components/HomePage.js';

const App = () => {
  return (
   
    <GoogleOAuthProvider clientId="596956006843-hudu08glc55k62vpsn597hvn99lf0c0p.apps.googleusercontent.com">
      <BrowserRouter>  {/* This allows routing */}
        <Routes>
          <Route path="/" element={<LoginPage />} />  {/* Login page route */}
          <Route path="/home" element={<HomePage />} />  {/* Home page route */}
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;


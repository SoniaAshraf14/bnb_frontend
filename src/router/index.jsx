import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/LoginComponent/Login';
import Signup from '../pages/SignUpComponent/SignUp';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import HomePage from '../pages/home-page/index';
import Aboutus from '../pages/about-us/index';

export default function RoutesInfo() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<Aboutus />} />
        {/* <Route path="users/*" element={<Users />} /> */}
      </Routes>
    </BrowserRouter>
    );
  }
  
  
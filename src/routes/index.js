import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home-page/index";
import AllExperience from "../pages/all-experience/index";
import ShareAnExperience from "../pages/share-an-experience/index.js";
export default function RoutesInfo() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all-experience" element={<AllExperience />} />
        <Route path="/share-an-experience" element={<ShareAnExperience />} />
        {/* <Route path="users/*" element={<Users />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

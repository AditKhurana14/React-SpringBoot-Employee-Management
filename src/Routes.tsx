import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../src/Pages/HomePage/index.tsx"
import AddnewEmployee from './Pages/RegisterPage/index.tsx'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addEmployee" element={<AddnewEmployee />} />
    </Routes>
  );
};

export default AppRoutes;

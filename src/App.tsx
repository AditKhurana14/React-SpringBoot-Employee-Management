import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes.tsx";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <Router>
      <AppRoutes />
      <ToastContainer/>
    </Router>
  );
};

export default App;

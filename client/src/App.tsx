import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
// import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>

  );
}

export default App;

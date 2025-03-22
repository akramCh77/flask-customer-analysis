import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import DetailedAnalysis from "./pages/DetailedAnalysis";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/detailed-analysis" element={<DetailedAnalysis />} />
    </Routes>
  );
}

export default App;

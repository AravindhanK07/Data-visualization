import React from "react";
import "./App.css";
import LineGraph from "./components/LineGraph";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/api/data" element={<LineGraph />} />
          <Route path="/api/expenses" element={<BarChart />} />
          <Route path="/api/time" element={<PieChart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

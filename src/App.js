import React from "react";
import "./App.css";
// import './Responsive.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bollywood from "./Pages/Bollywood";
import Fitness from "./Pages/Fitness";
import Food from "./Pages/Food";
import Hollywood from "./Pages/Hollywood";
import Home from "./Pages/Home";
import Technology from "./Pages/Technology";
import "bootstrap/dist/css/bootstrap.min.css";
import NextPage from "./Pages/NextPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Bollywood" element={<Bollywood />} />
          <Route path="Technology" element={<Technology />} />
          <Route path="Hollywood" element={<Hollywood />} />
          <Route path="Fitness" element={<Fitness />} />
          <Route path="Food" element={<Food />} />
          <Route path="/nextPage" element={<NextPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

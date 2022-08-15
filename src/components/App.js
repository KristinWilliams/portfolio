import React from "react";
import style from "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Hero";
import Work from "./Work";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/work" element={<Work />}></Route>
      </Routes>
    </Router>
  );
};

export default App;

import React from "react";
import style from "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Skills from "./Skills";
import Work from "./Work";
import Contact from "./Contact";
import { UseThemeProvider } from "./Context";

const App = () => {
  return (
    <Router>
      <UseThemeProvider>
        <Routes>
          <Route path="/" element={<Hero />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/work" element={<Work />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </UseThemeProvider>
    </Router>
  );
};

export default App;

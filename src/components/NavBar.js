import React from "react";
import NavModule from "./css/Navbar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = ({ background }) => {
  return (
    <nav style={{ background }}>
      <img src="img/laptop-icon.svg" alt="logo icon" />
      <ul className={NavModule["nav-list"]}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          <li>skills</li>
        </NavLink>
        <NavLink
          to="/work"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          <li>work</li>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          <li>contact</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;

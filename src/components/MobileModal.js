import React, { useState } from "react";
import NavModule from "./css/Navbar.module.css";
import { NavLink } from "react-router-dom";

const MobileModal = ({ closeModal }) => {
  return (
    <>
      <div
        className={NavModule.overlay}
        onClick={() => closeModal(false)}
      ></div>
      <div className={NavModule.modal}>
        <img
          className={NavModule["menu-icon"]}
          src="img/menu.svg"
          onClick={() => closeModal(false)}
        />
        <ul>
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
            <li>about</li>
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
      </div>
    </>
  );
};

export default MobileModal;

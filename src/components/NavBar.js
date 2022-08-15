import React, { useState } from "react";
import NavModule from "./css/Navbar.module.css";
import { NavLink } from "react-router-dom";
import MobileModal from "./MobileModal";

const NavBar = ({ background }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className={NavModule.container} style={{ background }}>
      {openModal ? <MobileModal closeModal={setOpenModal} /> : null}
      <div className={NavModule["mobile-menu-container"]}>
        <img
          className={NavModule["mobile-menu"]}
          src="img/menu.svg"
          onClick={() => setOpenModal(true)}
        />
      </div>
      <nav>
        <div>
          <img src="img/laptop-icon.svg" alt="logo icon" />
        </div>
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
      </nav>
    </div>
  );
};

export default NavBar;

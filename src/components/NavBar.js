import React, { useState } from "react";
import NavModule from "./css/Navbar.module.css";
import { NavLink } from "react-router-dom";
import MobileModal from "./MobileModal";

const NavBar = ({
  display,
  justifyContent,
  marginRight,
  width,
  minWidth,
  marginLeft,
}) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className={NavModule.container}>
      {openModal ? <MobileModal closeModal={setOpenModal} /> : null}
      <div className={NavModule["mobile-menu-container"]}>
        <img
          className={NavModule["mobile-menu"]}
          src="img/menu.svg"
          onClick={() => setOpenModal(true)}
        />
      </div>
      <nav style={{ width }}>
        <div>
          <img src="img/laptop-icon.svg" alt="logo icon" />
        </div>
        <ul className={NavModule["nav-list"]} style={{ justifyContent }}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <li style={{ marginRight, marginLeft }}>Home</li>
          </NavLink>

          <li
            onClick={() => {
              const scroll = document.querySelector("#about");
              scroll.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
            style={{ display }}
          >
            about
          </li>

          <NavLink
            to="/work"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <li>work</li>
          </NavLink>

          <li
            onClick={() => {
              const scroll = document.querySelector("#contact");
              scroll.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
            style={{ display }}
          >
            contact
          </li>
        </ul>
        <div style={{ minWidth }}></div>
      </nav>
    </div>
  );
};

export default NavBar;

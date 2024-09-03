import React, { useState, useEffect } from "react";
import "../style/header.css";
import logo from "../img/navbar/vama.png";
import { NavLink } from "react-router-dom";
import DropdownProd from "./DropdownProd";
import DropdownSupport from "./DropdownSupport";
import Post from "./Post";

export default function Header({ sidebar, showSidebar }) {
  const [dropdown, setDropdown] = useState(false);
  const [dropdownSpt, setDropdownSpt] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [showLinkedIn, setShowLinkedIn] = useState(false);

  function resetActiveStates() {
    document.getElementById("service").classList.remove("active");
    document.getElementById("product").classList.remove("active");
  }

  useEffect(() => {
    if (four) {
      document.getElementById("product").classList.add("active");
      document.getElementById("service").classList.remove("active");
    } else if (three) {
      document.getElementById("service").classList.add("active");
      document.getElementById("product").classList.remove("active");
    } else {
      resetActiveStates();
    }
  }, [three, four]);

  function handleNavLinkClick() {
    setShowLinkedIn(false); // Ensure LinkedIn posts are hidden when navigating to other pages
    resetActiveStates();
  }

  function handlePostClick() {
    setShowLinkedIn(!showLinkedIn); // Toggle LinkedIn visibility
    resetActiveStates();
  }

  return (
    <>
      <div className="header">
        <div className="icon">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>

        <div className="nav-lists">
          <div className="nav-list">
            <NavLink
              id="about-us"
              to="/about-us"
              activeClassName="colorBlue"
              onClick={handleNavLinkClick}
            >
              ABOUT US
            </NavLink>
          </div>
          <div
            className={dropdownSpt ? "nav-list colorBlue" : "nav-list"}
            onMouseEnter={() => {
              setDropdownSpt(true);
            }}
            onMouseLeave={() => {
              setDropdownSpt(false);
            }}
          >
            <NavLink
              id="service"
              className={
                three ? "side-listContainer active" : "side-listContainer"
              }
            >
              SUPPORT & SERVICES{" "}
              <span className="material-symbols-outlined arrow-down">
                arrow_drop_down
              </span>
            </NavLink>
            <DropdownSupport
              dropdownSpt={dropdownSpt}
              setThree={setThree}
              setFour={setFour}
            />
          </div>
          <div
            className={dropdown ? "nav-list colorBlue" : "nav-list"}
            onMouseEnter={() => {
              setDropdown(true);
            }}
            onMouseLeave={() => {
              setDropdown(false);
            }}
          >
            <NavLink
              id="product"
              className={
                four ? "side-listContainer active" : "side-listContainer"
              }
            >
              PRODUCTS{" "}
              <span className="material-symbols-outlined arrow-down">
                arrow_drop_down
              </span>
            </NavLink>

            <DropdownProd
              dropdown={dropdown}
              setThree={setThree}
              setFour={setFour}
            />
          </div>
          <div className="nav-list">
            <NavLink
              id="home"
              to="/articles-and-events"
              activeClassName="colorBlue"
              exact
              onClick={handleNavLinkClick}
            >
              ARTICLES & EVENTS
            </NavLink>
          </div>

          <div className="nav-list">
            <NavLink
              id="training"
              to="/training"
              activeClassName="colorBlue"
              onClick={handleNavLinkClick}
            >
              TRAINING
            </NavLink>
          </div>

          <div className="nav-list">
            <NavLink
              id="rtpo"
              to="/rpto"
              activeClassName="colorBlue"
              onClick={handleNavLinkClick}
            >
              RPTO
            </NavLink>
          </div>
          <div className="nav-list">
            <NavLink
              id="post"
              to="/post"
              onClick={handlePostClick}
              className="side-listContainer"
            >
              POST
            </NavLink>
          </div>

          <NavLink to="/contact">
            <button className="btn-contactUs">CONTACT US</button>
          </NavLink>
        </div>
        <span
          className="material-symbols-outlined hamburger"
          onClick={() => {
            showSidebar(!sidebar);
          }}
        >
          menu
        </span>
      </div>
      {showLinkedIn && <Post />}
    </>
  );
}

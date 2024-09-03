import React from "react";
import "../style/page2/breadcrump.css";
import { Link } from "react-router-dom";

export default function AboutBreadcrump() {
  return (
    <div className="breadcrump">
      <div className="bread-inner">
        <div className="horizontal-line"></div>
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          possimus sapiente non facere maiores deleniti reprehenderit quam
          blanditiis quibusdam, tempora velit nesciunt!
        </p>
        <div className="bread-nav">
          <Link to="/">Home </Link>
          <i class="fa-solid fa-angle-right"></i>
          <Link to="/product" className="active-bread">About</Link>
        </div>
      </div>
    </div>
  );
}

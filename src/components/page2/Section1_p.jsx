import React from "react";
import "../../style/page2/section1_p.css";

export default function Section1_p() {
  return (
    <div className="section1-prod">
      <div className="prod-img">
        <img
          src="https://images.pexels.com/photos/4840134/pexels-photo-4840134.jpeg"
          alt="drone-footage"
        />
      </div>
      <div className="prod-sec1-lists">
        <div className="ps-list">
          <p>General Construction</p>
          <i class="fa-solid fa-angle-right"></i>
        </div>
        <div className="ps-list">
          <p>Drone Management</p>
          <i class="fa-solid fa-angle-right"></i>
        </div>
        <div className="ps-list active-bg active-text">
          <p>Product Management</p>
          <i class="fa-solid fa-angle-right"></i>
        </div>
        <div className="ps-list">
          <p>Customer Management</p>
          <i class="fa-solid fa-angle-right"></i>
        </div>
        <div className="ps-list">
          <p>Design Build</p>
          <i class="fa-solid fa-angle-right"></i>
        </div>
        <div className="ps-list">
          <p>Drone Testing</p>
          <i class="fa-solid fa-angle-right"></i>
        </div>
      </div>
    </div>
  );
}

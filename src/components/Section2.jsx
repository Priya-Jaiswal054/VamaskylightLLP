import React from "react";
import "../style/section2.css";
import Agriculture from "../img/section2/Agriculture-spraying.png";
import Land from "../img/section2/Land-Mapping.png";
import Pilot from "../img/section2/Pilot-training.png";
import { useNavigate } from "react-router-dom";

export default function Section2() {
  const navigate = useNavigate();
  return (
    <div className="section2">
      <div className="s2-top">
        <div className="s2-top-inner">
          <div className="qlt">
            <div>
              <div className="line l-left"></div>
              <p>Services </p>
              <div className="line l-right"></div>
            </div>

            <h2>VAMA Skylight Support & Services</h2>
          </div>
        </div>
      </div>
      <div className="s2-bottom">
        <div className="s2-list">
          <div className="s2-list-icons">
            <img src={Agriculture} alt="lock-img" />
          </div>

          <h2>Agriculture Spraying</h2>
          <p>
            Elevate Crop Health with Precision Spraying for Optimal Yields and
            Sustainable Agriculture Practices. Your Growth, Our Priority.
          </p>

          <div
            className="dual-line"
            onClick={() => {
              navigate("/agriculture-spraying");
            }}
          >
            <div className="line1 "></div>
            <p>Read More</p>
            <div className="line1 "></div>
          </div>
        </div>
        <div className="s2-list">
          <div className="s2-list-icons">
            <img src={Land} alt="medal" />
          </div>
          <h2>Disaster Management</h2>
          <p>
            VAMA Skylight Resilience supports search and rescue operations by
            providing aerial views of affected areas to assess and document the
            extent of damage caused by disasters
          </p>
          <div
            className="dual-line"
            onClick={() => {
              navigate("/disaster-management");
            }}
          >
            <div className="line1 "></div>
            <p>Read More</p>
            <div className="line1 "></div>
          </div>
        </div>
        <div className="s2-list">
          <div className="s2-list-icons">
            <img src={Pilot} alt="diamond-img" />
          </div>

          <h2>Pilot Training</h2>
          <p>
            Vama Skylight Pilot Training elevate Your Skills, Soar with
            Confidence. Premier Pilot Training for a Sky-high Future in Aviation
            Excellence.
          </p>
          <div
            className="dual-line"
            onClick={() => {
              navigate("/pilot-training");
            }}
          >
            <div className="line1 "></div>
            <p>Read More</p>
            <div className="line1 "></div>
          </div>
        </div>
      </div>
    </div>
  );
}

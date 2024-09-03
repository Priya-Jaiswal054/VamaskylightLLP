import React from "react";
import "../style/section5.css";
import img16L from "../img/services-logo-sml/16L.png";
import img10L from "../img/services-logo-sml/10L.png";
import Disaster from "../img/services-logo-sml/Disaster.png";
import surveillance from "../img/services-logo-sml/surveillance.png";
import { useNavigate } from "react-router-dom";

export default function Section5() {
  const navigate = useNavigate();
  return (
    <div className="section5-container">
      <div className="s5-top">
        <h2>Our Products </h2>
        <p>
          Welcome to our FAQ page! We have compiled a list of commonly asked
          questions for you with quick and informative answers.
        </p>
      </div>
      <div className="section5">
        <div className="Section5-card">
          <div className="Sec1-inner">
            <div className="Sec5-img">
              <img src={img16L} alt="" />
            </div>
            <h4>Thea Agriculture Drone 16 Litres</h4>
            <p>
              Autonomous flying and spraying capability with{" "}
              <strong>16L</strong> tank capacity and upto 20 minutes of flying
              time. It has advanced radars for{" "}
              <strong>collision avoidance</strong>.
            </p>
            <div className="dual-line" onClick={()=>{
              navigate("/thea-agriculture-drone-16-litres")
            }}>
              <div className="line1 "></div>
              <p>Read More</p>
              <div className="line1 "></div>
            </div>
          </div>
        </div>

        <div className="Section5-card">
          <div className="Sec1-inner">
            <div className="Sec5-img">
              <img src={img10L} alt="" />
            </div>
            <h4>Thea Agricultural Drone 10 Litres</h4>
            <p>
              Agricultural Drone with a tank capacity of 10L and flying time of
              25 minutes. It has 2.5 acre spraying capacity in single charge.
              Comes with collision avoidance facility.
            </p>
            <div className="dual-line" onClick={()=>{
              navigate("/thea-agriculture-drone-10-litres")
            }}>
              <div className="line1 "></div>
              <p>Read More</p>
              <div className="line1 "></div>
            </div>
          </div>
        </div>

        <div className="Section5-card">
          <div className="Sec1-inner">
            <div className="Sec5-img">
              <img src={Disaster} alt="" />
            </div>
            <h4>Disaster Management Drone</h4>
            <p>
              “NAINA” Disaster management Search and Rescue Drone comes with
              Target Locking and Tracking Mechanism with Four Deploying Drop
              Mechanism.
            </p>
            <div className="dual-line" onClick={()=>{
              navigate("/naina-disaster-management-drone")
            }}>
              <div className="line1 "></div>
              <p>Read More</p>
              <div className="line1 "></div>
            </div>
          </div>
        </div>

        <div className="Section5-card">
          <div className="Sec1-inner">
            <div className="Sec5-img">
              <img src={surveillance} alt="" />
            </div>
            <h4>Surveillance Drone</h4>
            <p>
              Surveillance drones are equipped with various sensors, cameras,
              and other technologies to gather information and monitor specific
              areas.
            </p>
            <div className="dual-line" onClick={()=>{
              navigate("/surveillance-drone")
            }}>
              <div className="line1 "></div>
              <p>Read More</p>
              <div className="line1 "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "../style/section1.css";
import secImg1 from "../img/section1/vama-ab.jpeg";
import secImg2 from "../img/section1/about3.png";
import { Link, useNavigate } from "react-router-dom";

export default function Section1() {
  const navigate = useNavigate();
  return (
    <div className="section1">
      {/* <div className="sectionImg">
        <img src={secImg1} alt="" />
      </div> */}

      <div className="section-left-side">
        <h6 className="who">
          <img
            src="https://devsdesign.net/products/html/konstruk/assets/images/shape-1.png"
            alt="square-pic"
          />{" "}
          WHO WE ARE
        </h6>
        <h2>Vama Skylight</h2>
        <p>
          Vama Skylight is a leading manufacturer of drones, providing
          innovative solutions to the drone industry. Our company is dedicated
          to leveraging the latest technology to help improve operations ,
          reduce costs etc. With a team of experts in the field of unmanned
          aerial systems, we are committed to developing.
        </p>

        <div className="section-left-middle">
          <img className="img-2-sec-1" src={secImg2} alt="" />

          <div className="section-left-left">
            <h5>
              {" "}
              <i class="fa-regular fa-circle-check"></i> Thea Agriculture Drone
              16 Litres
            </h5>
            <h5>
              {" "}
              <i class="fa-regular fa-circle-check"></i> Thea Agricultural Drone
              10 Litres
            </h5>
            <h5>
              {" "}
              <i class="fa-regular fa-circle-check"></i> Naina Disaster
              Management Drone
            </h5>
          </div>
        </div>
        {/* <Link to="/contact">
          {" "}
          <button className="know-more">KNOW MORE</button>
        </Link> */}
      </div>
    </div>
  );
}

import React from "react";
import "../../style/page2/section2_p.css";

export default function Section2_p() {
  return (
    <div className="section2-prod">
      <div className="sec2-prod-left-about">
        <h1>We Ensure Best Service</h1>
        <p>
          Vama Skylight LLP is a technology-driven organization focused on
          utilizing the opportunity that the limitless sky offers by creating
          reliable solutions to the challenges of the present and future.
        </p>
        <ul>
          <li>
            <i class="fa-solid fa-check"></i>Our primary products include UAVs
            for agriculture, photography, mapping, and Remote Pilot Training
            Organization (RPTO).
          </li>
          <li>
            <i class="fa-solid fa-check"></i>Our agricultural drones are
            equipped with sensors and cameras that can be used to monitor crop
            health, optimize fertilizer and water use, and improve yields.
          </li>
          <li>
            <i class="fa-solid fa-check"></i>Our photography drones are designed
            for professional aerial photography and videography.
          </li>
          <li>
            <i class="fa-solid fa-check"></i>We also provide training,
            maintenance, and consulting services to help our clients get the
            most out of their investment.
          </li>
        </ul>
      </div>
      <div className="sec2-prod-right-about">
        <div className="sec2-prod-right-inner-about">
          <span className="tele-icon">
            <i class="fa-solid fa-phone"></i>
          </span>
          <div>
            <p>Have you any Questions?</p>
            <p>
              Call us <span className="ylo">Today!</span>
            </p>
          </div>
          <div className="dotted-line"></div>
          <p className="call-num">
            <a href="tel:+91-8320844583">+91-8320844583</a>
          </p>
        </div>
      </div>
    </div>
  );
}

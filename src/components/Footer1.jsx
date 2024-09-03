import React from "react";
import "../style/footer1.css";
import logo from "../img/footer/vama-footer-logo.png";
import { Link } from "react-router-dom";

export default function Footer1() {
  return (
    <div className="footer1">
      <div className="sub-footer f-1">
        <div className="f-logo">
          <img src={logo} alt="" />
        </div>
        <div className="f1-details">
          <p>
            Vama Skylight is a leading manufacturer of drones, providing
            innovative solutions to the drone industry.
          </p>
          <ul class="footer-social">
            <li>
              <a
                href="https://www.facebook.com/people/Vama-Skylight/100095474376379/"
                target="_blank"
              >
                <span>
                  {" "}
                  <i class="fab fa-facebook-f"></i>{" "}
                </span>
              </a>
            </li>

            <li>
              <a href="https://www.instagram.com/vamaskylight" target="_blank">
                <span>
                  {" "}
                  <i class="fab fa-instagram"></i>{" "}
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://in.linkedin.com/company/vama-skylight"
                target="_blank"
              >
                <span>
                  {" "}
                  <i class="fab fa-linkedin"></i>{" "}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="sub-footer f-3">
        <h2>USEFUL LINKS</h2>
        <div className="f3-details">
          {/* <Link to="/" className="f-hover">
            <i class="fa-solid fa-angle-right"></i> HOME
          </Link> */}
          {/* <Link to="/about-us" className="f-hover">
            <i class="fa-solid fa-angle-right"></i> ABOUT US
          </Link> */}
          {/* <Link to="/" className="f-hover">
            <i class="fa-solid fa-angle-right"></i> SUPPORT & SERVICES
          </Link> */}
          {/* <Link to="/" className="f-hover">
            <i class="fa-solid fa-angle-right"></i> PRODUCTS
          </Link> */}
          <Link to="/legal" className="f-hover">
            <i class="fa-solid fa-angle-right"></i> LEGAL
          </Link>
          <Link to="/dealership" className="f-hover">
            <i class="fa-solid fa-angle-right"></i> DEALERSHIP
          </Link>
          <Link to="/career" className="f-hover">
            <i class="fa-solid fa-angle-right"></i> CAREER
          </Link>

          <Link to="/contact" className="f-hover">
            <i class="fa-solid fa-angle-right"></i> CONTACT US
          </Link>
        </div>
      </div>
      <div className="sub-footer f-2">
        <h2>CONTACT INFO</h2>
        <div className="f2-details">
          <p>
            <i class="fi fi-rr-map-marker-home"></i>Daman Industrial Estate,
            Daman - 396210
          </p>
          <div className="f-hover">
            <p>
              <a href="tel:+91-8320844583">+91-8320844583</a>
            </p>
          </div>
          <div className="f-hover">
            <p>
              <a href="mailto: vamaskylight@gmail.com">
                {" "}
                vamaskylight@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="sub-footer f-4">
        <h2>OUR LOCATION</h2>
        <div className="f4-details">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119631.16820783437!2d72.78092501778825!3d20.445715705246023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0db12a625575b%3A0xf25ca5d34a352572!2sVama%20Skylight%20LLP.!5e0!3m2!1sen!2sin!4v1707742323867!5m2!1sen!2sin"
            width="100%"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

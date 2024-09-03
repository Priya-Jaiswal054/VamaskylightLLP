import React from "react";
import "../style/page2/allSectionP2.css";
import "./giftCityT.css";
import { events } from "./Template/Data";
import ServiceList from "./Template/ServiceList";
import BreadcrumpTemp from "./Template/BreadcrumpTemp";

export default function GiftCityT({ props }) {
  return (
    <div>
      <BreadcrumpTemp bprops={props.breadProp} />
      <div className="all-section-p">
        <div className="asp-left">
          <div className="prod-img">
            <img
              className="firstimg"
              src={require(`../img/events/${props.img}`)}
              alt="drone-footage"
            />
          </div>
          <div className="sec2-prod-left giftcity">
            <h1>{props.title}</h1>
            <p>{props.text1}</p>
          </div>
        </div>
        <div className="asp-right">
          <ServiceList services={events} active={props.breadProp.title} />
          <div className="asp-right-2">
            <div className="sec2-prod-right">
              <div className="sec2-prod-right-inner">
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
            <div className="sec3-p-right">
              <h2>Brochure</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Exercitationem sit ipsa qui commodi numquam.
              </p>
              <div className="s3p-btn-cnt">
                <button>Download</button>
                <span>Or</span>
                <button>Discover</button>
              </div>
            </div>
          </div>
        </div>
        <div className="otherImages">
          {props.otherImages.map((imgName) => {
            return <img src={require(`../img/events/${imgName}`)} alt="" />;
          })}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "../style/articleEvent.css";
import BreadcrumpTemp from "./Template/BreadcrumpTemp";
import { useNavigate } from "react-router-dom";
import vaghai from "../img/events/gr-3.jpeg";
import bag from "../img/events/bag-2.jpeg";
import gift from "../img/events/gft-3.jpeg";
import sakti from "../img/events/sakti-1.jpeg";
import noida from "../img/events/noida-1.jpeg";

export default function ArticleEvent() {
  const navigate = useNavigate();
  const breadProp = {
    title: "Articles & Events",
    text: "Articles and Event details page",
    arr: ["Home", "Articles And Events"],
  };

  return (
    <div>
      <BreadcrumpTemp bprops={breadProp} />

      <div className="art-div-cnt">
        <h3>Articles & Events</h3>
        <div className="event-lists">
          <div className="event-card-t">
            <div
              className="event-card"
              onClick={() => {
                navigate("/vaghai-navsari-agricultural-university,-gujarat");
              }}
            >
              <img src={vaghai} alt="" />
              <p>AT VAGHAI NAVSARI AGRICULTURAL UNIVERSITY, GUJRAT</p>
              <div className="dual-line">
                <div className="line1 "></div>
                <p>Read More</p>
                <div className="line1 "></div>
              </div>
            </div>
          </div>
          <div className="event-card-t">
            <div
              className="event-card"
              onClick={() => {
                navigate("/up-international-trade-show,-noida");
              }}
            >
              <img src={noida} alt="" />
              <p>AT UP INTERNATIONAL TRADE SHOW, NOIDA</p>
              <div className="dual-line">
                <div className="line1 "></div>
                <p>Read More</p>
                <div className="line1 "></div>
              </div>
            </div>
          </div>
          <div className="event-card-t">
            <div
              className="event-card"
              onClick={() => {
                navigate("/bharat-drone-shakti,-ghaziabad");
              }}
            >
              <img src={sakti} alt="" />
              <p>AT BHARAT DRONE SHAKTI, GHAZIABAD</p>
              <div className="dual-line">
                <div className="line1 "></div>
                <p>Read More</p>
                <div className="line1 "></div>
              </div>
            </div>
          </div>
          <div className="event-card-t">
            <div
              className="event-card"
              onClick={() => {
                navigate("/baghpath-kisan-mela");
              }}
            >
              <img src={bag} alt="" />
              <p>AT BAGHPATH KISAN MELA</p>
              <div className="dual-line">
                <div className="line1 "></div>
                <p>Read More</p>
                <div className="line1 "></div>
              </div>
            </div>
          </div>
          <div className="event-card-t">
            <div
              className="event-card"
              onClick={() => {
                navigate("/vibrant-gujarat,-gift-city");
              }}
            >
              <img src={gift} alt="" />
              <p>AT VIBRANT GUJARAT, GIFT CITY</p>
              <div className="dual-line">
                <div className="line1 "></div>
                <p>Read More</p>
                <div className="line1 "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

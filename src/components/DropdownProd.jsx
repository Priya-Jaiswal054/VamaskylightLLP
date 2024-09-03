import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/dropdownProd.css";
import { CSSTransition } from "react-transition-group";

export default function DropdownProd({ dropdown, setFour, setThree }) {
  const navigate = useNavigate();
  return (
    <CSSTransition
      in={dropdown ? true : false}
      timeout={500}
      classNames="fade"
      unmountOnExit={true}
    >
      <div className="dropdownProd">
        <div
          className="dropdown-list"
          onClick={() => {
            navigate("/thea-agriculture-drone-16-litres");
            setFour(true);
            setThree(false);
          }}
        >
          <p>TH16L</p>
        </div>
        <div
          className="dropdown-list"
          onClick={() => {
            navigate("/thea-agriculture-drone-10-litres");
            setFour(true);
            setThree(false);
          }}
        >
          <p>Thea Agriculture Drone 10 Litres</p>
        </div>
        <div
          className="dropdown-list"
          onClick={() => {
            navigate("/naina-disaster-management-drone");
            setFour(true);
            setThree(false);
          }}
        >
          <p>Naina Disaster Management Drone</p>
        </div>
        {/* <div
          className="dropdown-list"
          onClick={() => {
            navigate("/survey-drone");
            setFour(true);
            setThree(false);
          }}
        >
          <p>Survey Drone</p>
        </div> */}
      </div>
    </CSSTransition>
  );
}

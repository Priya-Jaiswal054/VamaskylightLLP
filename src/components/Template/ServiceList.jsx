import React from "react";
import { useNavigate } from "react-router-dom";
import generateLink from "./GenerateLink";

export default function ServiceList(props) {
  const navigate = useNavigate();
  return (
    <div className="prod-sec1-lists">
      {props.services.map((service) => {
        return (
          <div
            className={
              props.active === service
                ? "ps-list active-bg active-text"
                : "ps-list "
            }
            onClick={() => {
              navigate(`/${generateLink(service)}`);
            }}
          >
            <p>{service}</p>
            <i class="fa-solid fa-angle-right"></i>
          </div>
        );
      })}
    </div>
  );
}

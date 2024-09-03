import React from "react";
import "../style/testimonialCard.css";

export default function TestimonialCard(props) {
  return (
    <div className="testimonial-card">
      <div className="profile-pic">
        <img src={props.details.photo} alt="" />
      </div>
      <h2>{props.details.name}</h2>
      <p>{props.details.designation}</p>
      <p>{props.details.para}</p>
    </div>
  );
}

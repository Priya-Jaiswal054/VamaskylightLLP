import React from "react";
import "../style/training.css";

export default function WhyChooseCard(props) {
  return (
    <div className="wcu-card">
      <img src={require(`../img/whyChooseUs/${props.icon}`)} alt="" />
      <div>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

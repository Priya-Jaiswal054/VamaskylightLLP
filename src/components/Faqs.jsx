import React, { useState } from "react";
import "../style/faqs.css";

export default function Faqs() {
  const [ans0, setAns0] = useState(true);
  const [ans1, setAns1] = useState(false);
  const [ans2, setAns2] = useState(false);
  function showAns0() {
    ans0 ? setAns0(false) : setAns0(true);
    setAns1(false);
    setAns2(false);
  }
  function showAns1() {
    ans1 ? setAns1(false) : setAns1(true);
    setAns0(false);
    setAns2(false);
  }
  function showAns2() {
    ans2 ? setAns2(false) : setAns2(true);
    setAns1(false);
    setAns0(false);
  }

  return (
    <div className="faqs  shadow">
      <h2>Frequently Asked Questions </h2>
      <p>
        Welcome to our FAQ page! We have compiled a list of commonly asked
        questions for you with quick and informative answers.
      </p>
      <div className="faq-inner">
        <div className="py-2">
          <h3
            className="my-3"
            onClick={() => {
              showAns0();
            }}
          >
            Q: What does your company specialize in?
          </h3>
          {ans0 && (
            <p>
              We specialize in the development and deployment of drones tailored for architecture, disaster management, and land surveillance purposes.
            </p>
          )}
        </div>
        <div className="py-2">
          <h3
            className="my-3"
            onClick={() => {
              showAns1();
            }}
          >
            Q: What sets your drones apart from others in the market?
          </h3>
          {ans1 && (
            <p>
              Our drones are designed with cutting-edge technology, providing unique features and capabilities specific to architecture, disaster management, and land surveillance applications.
            </p>
          )}
        </div>
        <div className="py-2">
          <h3
            className="my-3"
            onClick={() => {
              showAns2();
            }}
          >
            Q: How do your land surveillance drones contribute to security and monitoring?
          </h3>
          {ans2 && (
            <p>
              Our land surveillance drones offer real-time monitoring, perimeter surveillance, and data collection for security purposes, making them valuable tools for land surveillance.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

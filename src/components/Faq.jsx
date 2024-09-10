import React, { useState } from "react";
// import React from "react";
import "../style/about.css";
import BreadcrumpTemp from "./Template/BreadcrumpTemp";
import "../style/faqs.css";
// import "../style/carrier.css";

export default function Faq() {
  const breadProp = {
    title: "Frequently Asked Questions",
    text: "",
    arr: ["Home", "FAQ"],
  };

  const [ans0, setAns0] = useState(true);
  const [ans1, setAns1] = useState(false);
  const [ans2, setAns2] = useState(false);
  const [ans3, setAns3] = useState(false);
  const [ans4, setAns4] = useState(false);
  const [ans5, setAns5] = useState(false);

  function showAns0() {
    ans0 ? setAns0(false) : setAns0(true);
    setAns1(false);
    setAns2(false);
    setAns3(false);
    setAns4(false);
    setAns5(false);
  }
  function showAns1() {
    ans1 ? setAns1(false) : setAns1(true);
    setAns0(false);
    setAns2(false);
    setAns3(false);
    setAns4(false);
    setAns5(false);
  }
  function showAns2() {
    ans2 ? setAns2(false) : setAns2(true);
    setAns1(false);
    setAns5(false);
    setAns0(false);
    setAns3(false);
    setAns4(false);
  }
  function showAns3() {
    ans3 ? setAns3(false) : setAns3(true);
    setAns2(false);
    setAns5(false);
    setAns1(false);
    setAns0(false);
    setAns4(false);
  }
  function showAns4() {
    ans4 ? setAns4(false) : setAns4(true);
    setAns5(false);
    setAns3(false);
    setAns2(false);
    setAns1(false);
    setAns0(false);
  }
  function showAns5() {
    ans5 ? setAns5(false) : setAns5(true);
    setAns4(false);
    setAns3(false);
    setAns2(false);
    setAns1(false);
    setAns0(false);
  }

  return (
    <div className="about">
      <BreadcrumpTemp bprops={breadProp} />
      <div className="about-inner"></div>

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
                We specialize in the development and deployment of drones
                tailored for architecture, disaster management, and land
                surveillance purposes.
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
                Our drones are designed with cutting-edge technology, providing
                unique features and capabilities specific to architecture,
                disaster management, and land surveillance applications.
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
              Q: How do your land surveillance drones contribute to security and
              monitoring?
            </h3>
            {ans2 && (
              <p>
                Our land surveillance drones offer real-time monitoring,
                perimeter surveillance, and data collection for security
                purposes, making them valuable tools for land surveillance.
              </p>
            )}
          </div>
          <div className="py-2">
            <h3
              className="my-3"
              onClick={() => {
                showAns3();
              }}
            >
              Q: What is UIN?
            </h3>
            {ans3 && (
              <p>
                UIN can be abbreviated as “Unique Identification Number “and is
                issued for registering an unmanned aircraft system in India.
              </p>
            )}
          </div>
          <div className="py-2">
            <h3
              className="my-3"
              onClick={() => {
                showAns4();
              }}
            >
              Q: What is DAN?
            </h3>
            {ans4 && (
              <p>
                “Drone acknowledgement number” means the unique number issued by
                the digital sky platform under the voluntary disclosure scheme
                for unmanned aircraft systems in India
              </p>
            )}
          </div>
          <div className="py-2">
            <h3
              className="my-3"
              onClick={() => {
                setAns5(!ans5);
              }}
            >
              Q: I have a self assembled Drone. How can I obtain the UIN for
              that?
            </h3>
            {ans5 && (
              <p>
                For self assembled drones with all up weight not exceeding 25
                Kg, organisations can now apply for UIN under ‘Model’
                subcategory, subject to compliance with Drone Rules, 2021. This
                does not need a Type Certificate or a DAN.
              </p>
            )}
          </div>
        </div>
        <a
          href="https://wa.me/918320844583" // Replace with your WhatsApp number, including the country code
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-icon"
        >
          <i className="fab fa-whatsapp whats-app "></i>
        </a>
        <style jsx>{`
          .whatsapp-icon {
            position: fixed;
            width: 60px;
            height: 60px;
            bottom: 40px;
            right: 40px;
            background-color: #25d366;
            color: #fff;
            border-radius: 50px;
            text-align: center;
            font-size: 30px;
            box-shadow: 2px 2px 3px #999;
            z-index: 999;
          }
          .whats-app {
            margin-top: 16px;
          }

          /* for mobile */
          @media screen and (max-width: 767px) {
            .whats-app {
              margin-top: 10px;
            }

            .whatsapp-icon {
              width: 40px;
              height: 40px;
              bottom: 20px;
              right: 10px;
              font-size: 22px;
            }
          }
        `}</style>
      </div>
    </div>
  );
}

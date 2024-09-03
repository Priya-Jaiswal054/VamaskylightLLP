import React, { useState, useEffect } from "react";
import "../style/training.css";

export default function () {
  const [sDay1, setDay1] = useState(true);
  const [sDay2, setDay2] = useState(false);
  const [sDay3, setDay3] = useState(false);
  const [sDay4, setDay4] = useState(false);
  const [sDay5, setDay5] = useState(false);

  const [lastActive, setLastActive] = useState("train-id-day1");

  function activateNow(dayNumber) {
    switch (dayNumber) {
      case 1:
        document
          .getElementById("train-id-day1")
          .classList.add("train-day-active");
        document
          .getElementById(lastActive)
          .classList.remove("train-day-active");
        setLastActive("train-id-day1");
        break;
      case 2:
        document
          .getElementById("train-id-day2")
          .classList.add("train-day-active");
        document
          .getElementById(lastActive)
          .classList.remove("train-day-active");
        setLastActive("train-id-day2");
        break;
      case 3:
        document
          .getElementById("train-id-day3")
          .classList.add("train-day-active");
        document
          .getElementById(lastActive)
          .classList.remove("train-day-active");
        setLastActive("train-id-day3");
        break;
      case 4:
        document
          .getElementById("train-id-day4")
          .classList.add("train-day-active");
        document
          .getElementById(lastActive)
          .classList.remove("train-day-active");
        setLastActive("train-id-day4");
        break;
      case 5:
        document
          .getElementById("train-id-day5")
          .classList.add("train-day-active");
        document
          .getElementById(lastActive)
          .classList.remove("train-day-active");
        setLastActive("train-id-day5");
        break;
      default:
    }
  }

  function selectDay(dayNumber) {
    switch (dayNumber) {
      case 1:
        setDay1(true);
        setDay2(false);
        setDay3(false);
        setDay4(false);
        setDay5(false);
        break;
      case 2:
        setDay1(false);
        setDay2(true);
        setDay3(false);
        setDay4(false);
        setDay5(false);
        break;
      case 3:
        setDay1(false);
        setDay2(false);
        setDay3(true);
        setDay4(false);
        setDay5(false);
        break;
      case 4:
        setDay1(false);
        setDay2(false);
        setDay3(false);
        setDay4(true);
        setDay5(false);
        break;
      case 5:
        setDay1(false);
        setDay2(false);
        setDay3(false);
        setDay4(false);
        setDay5(true);
        break;
      default:
    }
  }

  useEffect(() => {
    const trainPtsSpans = document.querySelectorAll(".train-pts");
    trainPtsSpans.forEach((span) => {
      let text = span.textContent.toLowerCase();
      span.textContent = text.charAt(0).toUpperCase() + text.slice(1);
    });
  }, []);

  return (
    <div className="train-details">
      <div className="train-days">
        <p
          onClick={() => {
            selectDay(1);
            activateNow(1);
          }}
          className="train-iday train-day-active"
          id="train-id-day1"
          style={{
            borderRadius: "5px 0 0 0",
          }}
        >
          Day 1
        </p>
        <p
          onClick={() => {
            selectDay(2);
            activateNow(2);
          }}
          className="train-iday"
          id="train-id-day2"
        >
          Day 2
        </p>
        <p
          onClick={() => {
            selectDay(3);
            activateNow(3);
          }}
          className="train-iday"
          id="train-id-day3"
        >
          Day 3
        </p>
        <p
          onClick={() => {
            selectDay(4);
            activateNow(4);
          }}
          className="train-iday"
          id="train-id-day4"
        >
          Day 4
        </p>
        <p
          onClick={() => {
            selectDay(5);
            activateNow(5);
          }}
          className="train-iday"
          id="train-id-day5"
          style={{
            borderRadius: "0 5px  0 0",
          }}
        >
          Day 5
        </p>
      </div>
      <div className="train-day-data-cnt">
        {sDay1 && (
          <div className="train-iday-data">
            <div
              className="train-topic-one"
              style={{
                minWidth: "280px",
                maxWidth: "310px",
                marginRight: ".4rem",
              }}
            >
              <p className="train-act-title">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                STAKEHOLDERS & THEIR LAWS DRONE RULES 2021
              </p>
              {/* <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">
                  INTERNATIONAL RULES, REGULATION, STANDARDS & PRACTICE
                </span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">
                  CLASSIFICATION AND CATERGORIZATION OF DRONES, TYPE CERTIFICATE
                </span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">
                  REGISTRATION, SALE, DE-REGISTRATION OF DRONES
                </span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">
                  OPERATIONS OF DRONES, DOS AND DONTS
                </span>
              </p> */}
            </div>
            <div
              className="train-topic-one"
              style={{
                minWidth: "280px",
                maxWidth: "310px",
                marginRight: ".4rem",
              }}
            >
              <p className="train-act-title">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                BASIC PRINCIPLES OF FLIGHT
              </p>
              {/* <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">FUNDAMENTALS OF FLIGHT</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">AERODYNAMICS</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">TAKE-OFF, FLIGHT AND LANDING</span>
              </p> */}
            </div>
            <div
              className="train-topic-one"
              style={{
                minWidth: "280px",
                maxWidth: "310px",
                marginRight: ".4rem",
              }}
            >
              <p className="train-act-title">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                ATC PROCEDURES & RADIO TELEPHONY
              </p>
              {/* <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">UNDERSTANDING ATC OPERATIONS</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">
                  AIRSPACE STRUCTURE AND AIRSPACE RESTRICTIONS
                </span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">FLIGHT PLANNING PROCEDURES</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">COLLISION AVOIDANCE</span>
              </p> */}
            </div>
            <div
              className="train-topic-one"
              style={{
                minWidth: "280px",
                maxWidth: "310px",
                marginRight: ".4rem",
              }}
            >
              <p className="train-act-title">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                FIXED WING OPERATIONS AND AERODYNAMICS
              </p>
              {/* <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">TYPES OF FIXED WING DRONES</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">
                  OPERATION AND MANEUVERS OF FIXED WING DRONES
                </span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">
                  INTRO TO MISSION PLANNING, GCS, INSTRUMENT FLYING.
                </span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">
                  APPLICATIONS OF FIXED WING UAVs
                </span>
              </p> */}
            </div>
            <div
              className="train-topic-one"
              style={{
                minWidth: "280px",
                maxWidth: "310px",
                marginRight: ".4rem",
              }}
            >
              <p className="train-act-title">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                MULTI- ROTOR OPERATIONS AND AERODYNAMICS
              </p>
              {/* <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">
                  BASIC DRONE TERMINNOLOGY & PARTS
                </span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">TYPES OF DRONES</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">DRONE ANATOMY</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">AVIONICS & C2 LINK</span>
              </p> */}
            </div>
            <div
              className="train-topic-one"
              style={{
                minWidth: "280px",
                maxWidth: "310px",
                marginRight: ".4rem",
              }}
            >
              <p className="train-act-title">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                HYBRID OPERATIONS AND AERODYNAMICS
              </p>
              {/* <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">PRINCIPLES OF AERODYNAMICS</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">
                  TYPES OF HYBRID DRONES & PARTS
                </span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">APLLICATIONS OF HYBRID UAVs</span>
              </p> */}
            </div>
          </div>
        )}
        {sDay2 && (
          <div className="train-iday-data">
            <div
              className="train-topic-one"
              style={{
                minWidth: "280px",
                maxWidth: "310px",
                marginRight: ".4rem",
              }}
            >
              <p className="train-act-title">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                WEATHER AND METEOROLOGY
              </p>
              {/* <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">THE STANDARD ATMOSPHERE</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">MEASURING AIR PRESSURE</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">HEAT AND TEMPERATURE</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">WIND</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">MOISTURE, CLOUD FORMATION</span>
              </p> */}
            </div>
            <div
              className="train-topic-one"
              style={{
                minWidth: "280px",
                maxWidth: "310px",
                marginRight: ".4rem",
              }}
            >
              <p className="train-act-title">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                DRONE EQUIPMENT AND MAINTENANCE
              </p>
              {/* <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">
                  MAINTENANCE OF DRONE FLIGHT CONTROL BOX
                </span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">
                  MAINTENANCE OF GROUND EQUIPMENT, BATTERIES
                </span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">SCHEDULED SERVICING</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">REPAIR OF EQUIPMENT</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">FAULT FINDING</span>
              </p> */}
            </div>
            <div
              className="train-topic-one"
              style={{
                minWidth: "280px",
                maxWidth: "310px",
                marginRight: ".4rem",
              }}
            >
              <p className="train-act-title">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                RISK ASSESSMENT AND ANALYSIS
              </p>
              {/* <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">DRONE EMERGENCY & HANDLING</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">
                  LOSS OF C2 LINK, LOSS OF POWER
                </span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">
                  OTHER EMERGENCIES, CONTROL SUFACE FAILURES
                </span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">HUMAN PERFORMANCE </span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">FAIL-SAFE FEATURES</span>
              </p> */}
            </div>
            <div
              className="train-topic-one"
              style={{
                minWidth: "280px",
                maxWidth: "310px",
                marginRight: ".4rem",
              }}
            >
              <p className="train-act-title">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                PAYLOAD INSTALLATION AND UTILISATION
              </p>
              {/* <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">TYPES OF PAYLOADS</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">PARTS OF PAYLOADS</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">INSTALLATION</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">FEATURES OF PAYLOADS</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">UTILIZATION</span>
              </p> */}
            </div>
            <div
              className="train-topic-one"
              style={{
                minWidth: "280px",
                maxWidth: "310px",
                marginRight: ".4rem",
              }}
            >
              <p className="train-act-title">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                INTRO TO DRONE DATA & ANALYSIS
              </p>
              {/* <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">PRINCIPLES OF OBSERVATION</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">
                  ELEMENTS OF IMAGE & VIDEO INTERPRETATION
                </span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">TYPES OF IMAGE & VIDEO DATA</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">ANALYSIS</span>
              </p> */}
            </div>
          </div>
        )}
        {sDay3 && (
          <div className="train-iday-data">
            <div
              className="train-topic-one"
              style={{
                minWidth: "280px",
                maxWidth: "310px",
                marginRight: ".4rem",
              }}
            >
              <p className="train-act-title">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                FINAL TEST- THEORY
              </p>
              <p className="train-act-others">
                {/* <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span> */}
                <span className="train-pts">WRITTEN TEST</span>
              </p>
            </div>
            <div
              className="train-topic-one"
              style={{
                minWidth: "280px",
                maxWidth: "310px",
                marginRight: ".4rem",
              }}
            >
              <p className="train-act-title">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                PRACTICAL LESSONS IN LAB
              </p>
              {/* <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">ASSEMBLING OF DRONE</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">DE-ASSEMBLING</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">INTEGRATION OF SUB-SECTIONS</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">INTEGRATION OF ENGINE</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">
                  FAULT FINDING AND RECTIFICATION
                </span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">
                  REPAIR, MAINTENANCE AND DOCUMENTATION.
                </span>
              </p> */}
            </div>
            <div
              className="train-topic-one"
              style={{
                minWidth: "280px",
                maxWidth: "310px",
                marginRight: ".4rem",
              }}
            >
              <p className="train-act-title">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                INTRODUCTION TO FLIGHT SIMULATOR AND SIMULATOR FLIGHT TRAINING
              </p>
              {/* <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">
                  BASIC OPERATING FEATURES OF SIMULATOR
                </span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">
                  HOW TO SELECT DIFFERENT AIRCRAFT AND AERODROMES
                </span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">DEMO FLIGHTS</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">
                  PRE-FLIGHT CHECKS AND START UP{" "}
                </span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">
                  PREPARATION CUM COORDINATION FOR FLIGHT
                </span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">TAKE-OFF AND FLIGHT STAGE</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">APPROACH AND LANDING</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">AFTER FLIGHT CHECKS</span>
              </p> */}
            </div>
            <div
              className="train-topic-one"
              style={{
                minWidth: "280px",
                maxWidth: "310px",
                marginRight: ".4rem",
              }}
            >
              <p className="train-act-title">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                PRACTICAL FLYING WITH INSTRUCTOR, TRAINER
              </p>
            </div>
          </div>
        )}
        {sDay4 && (
          <div className="train-iday-data">
            <div
              className="train-topic-one"
              style={{
                minWidth: "280px",
                maxWidth: "310px",
                marginRight: ".4rem",
              }}
            >
              <p className="train-act-title">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                PRACTICAL FLYING WITH INSTRUCTOR, TRAINER
              </p>
              <p className="train-act-others">
                {/* <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span> */}
                <span className="train-pts">
                  PRACTICAL FLYING WITH TRAINER (FULL DAY)
                </span>
              </p>
            </div>
          </div>
        )}
        {sDay5 && (
          <div className="train-iday-data">
            <div
              className="train-topic-one"
              style={{
                minWidth: "280px",
                maxWidth: "310px",
                marginRight: ".4rem",
              }}
            >
              <p className="train-act-title">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                PRACTICAL FLYING
              </p>
              <p className="train-act-others">
                {/* <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span> */}
                <span className="train-pts">PRACTICAL FLYING SOLO</span>
              </p>
            </div>
            <div
              className="train-topic-one"
              style={{
                minWidth: "280px",
                maxWidth: "310px",
                marginRight: ".4rem",
              }}
            >
              <p className="train-act-title">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                PRACTICAL FLYING TEST
              </p>
              {/* <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">PRACTICAL FLYING TEST</span>
              </p> */}
            </div>
            <div
              className="train-topic-one"
              style={{
                minWidth: "280px",
                maxWidth: "310px",
                marginRight: ".4rem",
              }}
            >
              <p className="train-act-title">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                DISTRIBUTION OF CERTIFICATE & CONCLUSION OF TRAINING
              </p>
              {/* <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span className="train-pts">
                  DISTRIBUTION OF CERTIFICATE & CONCLUSION OF TRAINING
                </span>
              </p> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

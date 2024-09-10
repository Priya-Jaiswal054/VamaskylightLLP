import React from "react";
import "../style/training.css";
import TrainingDetails from "./TrainingDetails";
// import downloadIcon from "../img/download-icon.png";
import WhyChooseUs from "./WhyChooseUs";
import caution from "../img/caution.png";

export default function Training() {
  const handleClick = () => {
    const googleFormUrl = "https://forms.gle/j4JizEVE29LMEWpZ8";
    window.open(googleFormUrl, "_blank");
  };
  return (
    <>
      <div className="train-bread">
        <h3 className="train-bread-text">
          Small Category (5 days) – Training Curriculum as per{" "}
          <span style={{ color: "#e97f23" }}>DGCA</span>{" "}
        </h3>
        {/* <button className="train-enroll" > */}
        <button
          onClick={handleClick}
          className="train-enroll"
          // style={{
          //   padding: "10px 20px",
          //   fontSize: "16px",
          //   backgroundColor: "#e1690a",
          // }}
        >
          Enroll Now
        </button>
      </div>
      <div className="train-data">
        <div className="train-idata">
          <p
            style={{
              fontSize: "24px",
              fontWeight: "600",
              lineHeight: "1.34",
            }}
          >
            Duration
          </p>
          <p
            style={{
              fontWeight: "600",
              fontSize: "2.5rem",
              color: "var(--brand-color)",
            }}
          >
            5
          </p>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            DAYS OF TRAINING
          </p>
        </div>
        <div className="train-idata">
          <p
            style={{
              fontSize: "24px",
              fontWeight: "600",
              lineHeight: "1.34",
            }}
          >
            Upto
          </p>
          <p
            style={{
              fontWeight: "600",
              fontSize: "2.5rem",
              color: "var(--brand-color)",
            }}
          >
            25Kg
          </p>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            Weight Category
          </p>
        </div>
        <div className="train-idata">
          <p
            style={{
              fontSize: "24px",
              fontWeight: "600",
              lineHeight: "1.34",
            }}
          >
            Topics
          </p>
          <p
            style={{
              fontWeight: "600",
              fontSize: "2.5rem",
              color: "var(--brand-color)",
            }}
          >
            68
          </p>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            In Curriculum
          </p>
        </div>
      </div>
      <TrainingDetails />
      {/* <div className="train-download">
        <h3>Download the Course Details</h3>
        <button>
          {" "}
          <img
            src={downloadIcon}
            alt="downlod-icon"
            className="download-icon"
          />
          Download Brochure
        </button>
      </div> */}
      <WhyChooseUs />
      <div className="train-requirement">
        <div className="tr-1">
          <img src={caution} alt="caution-icon" />
          <p>
            <span style={{ fontWeight: "500", marginBottom: "1rem" }}>
              Eligibility to Apply:{" "}
            </span>
            <span style={{ fontSize: "1.1rem" }}>
              Minimum 18 years of age & shall have English knowledge and passed
              in 10th class or its equivalent examination.
            </span>
          </p>
        </div>
        <div className="tr-1">
          <img src={caution} alt="caution-icon" />
          <div>
            <p style={{ fontWeight: "500" }}>
              Keep the following items ready before filling out the online
              application form:{" "}
            </p>
            <ul style={{ marginLeft: "2rem", fontSize: "1.1rem" }}>
              <li>Must have a Passport (Required)</li>
              <li>Scanned copy of the Passport size photograph</li>
              <li>Scanned copy of the Aadhar ID</li>
              <li>
                Scanned copy of ID proof (PAN Card / Voter ID / Driving License)
              </li>
              <li>Scanned copy of 10th Pass certificate/mark sheet</li>
              <li>Scanned copy of the Higher Qualification certificate</li>
              <li>
                Scanned copy of College ID card (only for student category)
              </li>
              <li>
                Scanned copy of Bonafide certificate (only for student category)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import WhyChooseCard from "./WhyChooseCard";
import "../style/training.css";

export default function WhyChooseUs() {
  const cardDetails = [
    [
      "location.png",
      "DGCA Approved Organization",
      "We offer Training at India’s First DGCA Approved Drone Training Organization Under UAS Rules – 2021.",
    ],
    [
      "notes.png",
      "Small Category",
      "Only RPTO Offering both Small Category Certified Training Program in India.",
    ],
    [
      "augmented-reality.png",
      "Best Flight Simulators",
      "Best in Class in Flight Simulators, High Quality, Built in NPNT and Make In India Drones.",
    ],
    [
      "star.png",
      "DGCA Approved Instructors",
      "Highly Qualified & DGCA Approved Instructors offering 1 to 1 Flying Lessons for Individual Attention.",
    ],
    [
      "check.png",
      "Accommodation",
      "Affordable Guest House with Catering Facilities Next to the Training Location, MIT Campus.",
    ],
    [
      "certificate.png",
      "DGCA Certified License",
      "DGCA Approved Remote Pilot License with Validity of Maximum 10 years, as per UAS Rules – 2021.",
    ],
  ];

  return (
    <div className="whyChoose">
      <p className="wcu-t1">Why Choose Us ?</p>
      <p className="wcu-t2">
        India’s First{" "}
        <span style={{ color: "var(--brand-color)" }}>
          Remote Pilot Training Organisation
        </span>{" "}
        Under UAS Rules – 2021.
      </p>
      <div className="wcu-cardContainer">
        {cardDetails.map((icard, index) => {
          return (
            <WhyChooseCard
              key={index}
              icon={icard[0]}
              title={icard[1]}
              text={icard[2]}
            />
          );
        })}
      </div>
    </div>
  );
}

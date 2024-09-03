import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Testimonial from "./Testimonial";
import Section3 from "./Section3";
import Faqs from "./Faqs";
import Section4 from "./Section4";
import Section5 from "./Section5";
import CarouselM from "./CarouselM";
import safety from "../img/product/safety.JPG";
import Modal from "./Modal";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Ensure Font Awesome is imported

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Trigger the modal to open when the component mounts
    setIsModalOpen(true);
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="home">
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <Carousel />
      <CarouselM />
      <Section1 />
      <Section2 />
      <Section5 />
      <Section4 />
      <Testimonial />
      <div className="safety">
        <img src={safety} alt="Safety" />
      </div>
      <Faqs />
      <Section3 />

      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/8320844583" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-icon"
      >
        <i className="fab fa-whatsapp"></i>
      </a>

      <style jsx>{`
        .whatsapp-icon {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background-color: #25d366;
          color: white;
          padding: 10px;
          border-radius: 30%;
          font-size: 30px;
          text-align: center;
          cursor: pointer;
          z-index: 1000;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }

        .whatsapp-icon:hover {
          background-color: #128c7e; /* Darker green on hover */
        }
      `}</style>
    </div>
  );
}

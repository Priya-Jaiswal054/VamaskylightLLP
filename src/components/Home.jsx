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
      {/* <Faqs /> */}
      <Section3 />

      {/* WhatsApp Icon */}
      {/* <a
        href="https://wa.me/8320844583" // Replace with your WhatsApp number
        target="_blank"
        // rel="noopener noreferrer"
        className="whatsapp-icon"
      >
        <i className="fab fa-whatsapp"></i>
      </a> */}
      {/* WhatsApp Icon */}
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
  );
}

import React, { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import "../style/modal.css";

export default function Modal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-close-icon" onClick={onClose}>
          <RxCross2 />
        </div>

        <h2 style={{ textAlign: "center" }}>Welcome to VamaSkylight!</h2>

        <div className="modal-images-column">
          <img
            src="/DGCA TYPE CERTIFIED-01.jpg"
            alt="DGCA Type Certified"
            className="modal-image img1"
          />
          <img
            src="/Tc with Frame-01.jpg"
            alt="TC Image"
            className="modal-image img2"
          />
        </div>
      </div>
    </div>
  );
}

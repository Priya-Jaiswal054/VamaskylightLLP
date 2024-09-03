import { useState } from "react";
import React from "react";
import "../style/wsp-gallery.css";

export default function WSPGallery({ galleryImages }) {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModel = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  // Close Modal
  const handleCloseModel = () => {
    setOpenModal(false);
  };

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  // Next Image
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <div>
      {openModal && (
        <div className="sliderWrap">
          <i
            className="fa-solid fa-circle-xmark btnClose"
            onClick={handleCloseModel}
          ></i>
          <i
            className="fa-solid fa-circle-chevron-left btnPrev"
            onClick={prevSlide}
          ></i>
          <i
            className="fa-solid fa-circle-chevron-right btnNext"
            onClick={nextSlide}
          ></i>

          <div className="fullScreenImage">
            {/* galleryImages[slideNumber].img */}
            <img
              src={require(`../img/gallery/${galleryImages[slideNumber].img}`)}
              alt=""
            />
          </div>
        </div>
      )}

      <div className="galleryWrap">
        {galleryImages &&
          galleryImages.map((slide, index) => {
            return (
              <div
                className="single"
                key={index}
                onClick={() => handleOpenModel(index)}
              >
                <img src={require(`../img/gallery/${slide.img}`)} alt="" />
              </div>
            );
          })}
      </div>
    </div>
  );
}

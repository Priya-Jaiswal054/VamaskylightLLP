import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

import "../style/carousel.css";

export default function Carousel() {
  return (
    <div className="carousel">
      <>
        <Swiper
          className="mySwiper"
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          
          modules={[Autoplay]}
        >
          <SwiperSlide className="slides s5">
            <div className="slides-inner">
              
            </div>
          </SwiperSlide>
          <SwiperSlide className="slides s6">
            <div className="slides-inner">
              
            </div>
          </SwiperSlide>
          <SwiperSlide className="slides s7">
            <div className="slides-inner">
              
            </div>
          </SwiperSlide>
          <SwiperSlide className="slides s8">
            <div className="slides-inner">
              
            </div>
          </SwiperSlide>
          <SwiperSlide className="slides s9">
            <div className="slides-inner">
             
            </div>
          </SwiperSlide>
          <SwiperSlide className="slides s4">
            <div className="slides-inner">
              {/* <h2>Slide 4</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p> */}
            </div>
          </SwiperSlide>
          <SwiperSlide className="slides s1">
            <div className="slides-inner">
              {" "}
              
            </div>
          </SwiperSlide>
          <SwiperSlide className="slides s2">
            <div className="slides-inner">
             
            </div>
          </SwiperSlide>
          <SwiperSlide className="slides s3">
            <div className="slides-inner">
              
            </div>
          </SwiperSlide>
          
          
        </Swiper>
      </>
    </div>
  );
}

import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

import "../style/carousel.css";

export default function CarouselM() {
  return (
    <div className='carouselM'>

<Swiper
          className="mySwiper"
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          
          modules={[Autoplay]}
        >
          <SwiperSlide className="slides ms4">
            <div className="slides-inner">
              {/* <h2>Slide 4</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p> */}
            </div>
          </SwiperSlide>
          <SwiperSlide className="slides ms1">
            <div className="slides-inner">
              {" "}
              
            </div>
          </SwiperSlide>
          <SwiperSlide className="slides ms2">
            <div className="slides-inner">
              
            </div>
          </SwiperSlide>
          <SwiperSlide className="slides ms3">
            <div className="slides-inner">
              
            </div>
          </SwiperSlide>
          <SwiperSlide className="slides ms5">
            <div className="slides-inner">
              
            </div>
          </SwiperSlide>
          <SwiperSlide className="slides ms6">
            <div className="slides-inner">
              
            </div>
          </SwiperSlide>
          <SwiperSlide className="slides ms7">
            <div className="slides-inner">
              
            </div>
          </SwiperSlide>
          <SwiperSlide className="slides ms8">
            <div className="slides-inner">
              
            </div>
          </SwiperSlide>
          <SwiperSlide className="slides ms9">
            <div className="slides-inner">
              
            </div>
          </SwiperSlide>
          
          
        </Swiper>
      
    </div>
  )
}

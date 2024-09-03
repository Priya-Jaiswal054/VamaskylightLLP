import React from "react";
import TestimonialCard from "./TestimonialCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "../style/testimonial.css";

export default function Testimonial() {
  const photo = "https://iili.io/JcaR6Ip.jpg";

  const c1 = {
    photo,
    name: "Mr. Manpreet Singh",
    designation: "Customer",
    para: "I am very happy with the drone and the support staff from Vama Skylight. The build quality is exceptional, and the durability of their drones is unmatched. ",
  };
  const c2 = {
    photo,
    name: "Mr. Pradeep Rajesh",
    designation: "Customer",
    para: "I am very happy with the surveillance drone performance and the support staff from Vama Skylight.",
  };
  const c3 = {
    photo,
    name: "Mrs. Sikha ",
    designation: "Customer",
    para: "I recently purchased a drone from Vama Skylight, and I am absolutely thrilled with the quality and performance",
  };
  const c4 = {
    photo,
    name: "Mr Amit ",
    designation: "Customer",
    para: "Vama Skylight has exceeded my expectations, and I'm a proud customer who will continue to choose their products for my aerial endeavors.",
  };
  return (
    <div className="test-container">
      <div className="test-top">
        <h2>Our Testimonials </h2>
        <p>
          Testimonials regarding our products and services from our customers.
        </p>
      </div>
      <div className="carousel-tesimonial">
        <Swiper
          spaceBetween={20}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
          breakpoints={{
            // when window width is >= 320px

            600: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <div className="image">
              <TestimonialCard details={c1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image">
              <TestimonialCard details={c2} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image">
              <TestimonialCard details={c3} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image">
              <TestimonialCard details={c4} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

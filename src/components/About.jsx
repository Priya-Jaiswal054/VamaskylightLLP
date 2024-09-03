import React from "react";
import "../style/about.css";
import ankurImage from "../img/ankur.jpeg";
import niteshImage from "../img/nitesh.jpeg";
import nikunjImage from "../img/nikunj.png";
import abhishekImage from "../img/abhishek.jpeg";

import BreadcrumpTemp from "./Template/BreadcrumpTemp";
import Section1 from "./Section1";
import Section2_p from "./page2/Section2_p";
import Section3 from "./Section3";
import telescope from "../img/telescope.jpg";

import TestimonialCard from "./TestimonialCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "../style/testimonial.css";

export default function About() {
  const breadProp = {
    title: "About Us",
    text: "Join us in building a resilient future with the help of cutting-edge drone technology",
    arr: ["Home", "About Us"],
  };

  const NiteshMundra = {
    photo: niteshImage,
    name: "Nitesh Mundhra",
    designation: "Director and Drone Pilot",
    para: "Nitesh Mundhra's educational background in BBA with a specialization in analytics provides a strong foundation in business administration and data analysis. ",
  };
  const nikunjBajoria = {
    photo: nikunjImage,
    name: "Nikunj Bajoria",
    designation: "Director & co-founder",
    para: "Nikunj Bajoria is a dynamic individual who, at the age of 30, has gained extensive experience in the business world, ranging from trading to manufacturing.",
  };
  const ankurSomani = {
    photo: ankurImage,
    name: "Ankur Somani",
    designation: "Director and co-founder",
    para: "Ankur Somani is a highly skilled professional with a diverse range of qualifications and experience. Holding a bachelor's degree in commerce (Bcom) and a master's degree in business administration (MBA).",
  };
  const abhisheknathani = {
    photo: abhishekImage,
    name: "Abhishek Nathani",
    designation: "CEO",
    para: "Abhishek Nathani leads Vama Skylight with a focus on strategic decision-making and long-term planning. He provides leadership, sets the company's overall direction, and manages stakeholder relationships. His involvement in critical projects or initiatives ensures that the company stays aligned with its goals.",
  };

  return (
    <div className="about">
      <BreadcrumpTemp bprops={breadProp} />
      <div className="about-inner">
        <Section1 />
        <Section2_p />

        <div className="new-vision">
          <div className="v-box">
            <img src={telescope} alt="img" />
            <i className="v-arrow fa-solid fa-chevron-down"></i>
            <div className="vision-t">
              <p className="v-text">1</p>
              <div className="vision">MISSION</div>
            </div>
            <div className="v-hr"></div>
            <div className="vt-2">
              To utilize the opportunity that the limitless sky offers by
              creating a technology-driven organization.
            </div>
          </div>
          <div className="v-box">
            <img src={telescope} alt="img" />
            <i className="v-arrow fa-solid fa-chevron-down"></i>
            <div className="vision-t">
              <p className="v-text">2</p>
              <div className="vision">VISION</div>
            </div>
            <div className="v-hr"></div>
            <div className="vt-2">
              To redefine the sky and make it accessible to businesses and
              organizations of all sizes.
            </div>
          </div>
          <div className="v-box">
            <img src={telescope} alt="img" />
            <i className="v-arrow fa-solid fa-chevron-down"></i>
            <div className="vision-t">
              <p className="v-text">3</p>
              <div className="vision">VALUES</div>
            </div>
            <div className="v-hr"></div>
            <div className="vt-2">
              We are committed to delivering high-quality products and services
              that meet the needs of our clients.
            </div>
          </div>
        </div>
        <div className="our-team">
          <div className="test-top">
            <div className="dual-line">
              <div className="line1 "></div>
              <h2>Our Team </h2>
              <div className="line1 "></div>
            </div>
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
              {/* <SwiperSlide> */}
              {/* <div className="image">
              <TestimonialCard details={NiteshMundra} />
            </div> */}
              {/* </SwiperSlide> */}

              <SwiperSlide>
                {/* <div className="image">
              <TestimonialCard details={nikunjBajoria} />
            </div> */}
                <div className="image">
                  <TestimonialCard details={abhisheknathani} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="image">
                  <TestimonialCard details={ankurSomani} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="image">
                  <TestimonialCard details={NiteshMundra} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="image">
                  <TestimonialCard details={nikunjBajoria} />
                </div>
              </SwiperSlide>
              {/* </SwiperSlide> */}
            </Swiper>
          </div>
        </div>

        <div className="history-container">
          <div className="history">
            <h2>Our History</h2>
            <h3>2022</h3>
            <hr></hr>
            <p>
              Vama Skylight LLP was founded in 2022 by a team of engineers and
              drone enthusiasts who saw the potential for UAVs to transform
              industries. Since then, we have grown into a leading UAV company
              in India, with a purpose of delivering reliable, high-quality
              products and services to our clients.
            </p>
          </div>

          <div className="history">
            <h2>Our Values</h2>
            <hr></hr>
            <p>
              At Vama Skylight LLP, we value innovation, reliability, and
              customer satisfaction. We are committed to delivering high-quality
              products and services that meet the needs of our clients.
            </p>
            <p>
              At Vama Skylight, we are committed to providing our clients with
              high-quality UAV solutions and outstanding customer service. we
              are constantly pushing the boundaries of what is possible with UAV
              technology. Contact us today to learn more about our products and
              services!
            </p>
          </div>
        </div>

        <Section3 />
      </div>
    </div>
  );
}

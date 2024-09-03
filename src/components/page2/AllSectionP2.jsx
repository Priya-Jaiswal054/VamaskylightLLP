import React from "react";
import "../../style/page2/allSectionP2.css";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

export default function AllSectionP2() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once when it comes into view
  });
  function NumberAnimation({ n }) {
    const { number } = useSpring({
      from: { number: 0 },
      reset: !inView, // Reset the animation when not in view
      number: inView ? n : 0, // Start the animation when in view
      delay: 200,
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  }
  return (
    <div className="all-section-p">
      <div className="asp-left">
        <div className="prod-img">
          <img
            src="https://images.pexels.com/photos/4840134/pexels-photo-4840134.jpeg"
            alt="drone-footage"
          />
        </div>
        <div className="sec2-prod-left">
          <h1>We Ensure Best Service</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fuga
            optio, quia hic qui delectus repellat repudiandae unde deleniti
            tenetur exercitationem, accusantium iure laborum ducimus quam
            perferendis a provident in! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Tenetur aspernatur nobis repellendus porro
            accusamus perferendis sequi, veniam saepe?
          </p>
          <ul>
            <li>
              <i class="fa-solid fa-check"></i>Lorem ipsum dolor sit amet
              consectetur adipisicing elit.
            </li>
            <li>
              <i class="fa-solid fa-check"></i>Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Lorem, ipsum dolor.
            </li>
            <li>
              <i class="fa-solid fa-check"></i>Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Lorem ipsum dolor sit.
            </li>
            <li>
              <i class="fa-solid fa-check"></i>Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Lorem, ipsum.
            </li>
            <li>
              <i class="fa-solid fa-check"></i>Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Lorem.
            </li>
          </ul>
        </div>
        <div className="sec3-p-left">
          <div className="s3pl-one" ref={ref}>
            <i class="fa-brands fa-phoenix-squadron"></i>
            <p className="bold">
              {" "}
              <NumberAnimation n={354} inView={inView} /> +
            </p>
            <p>Satisfied clients</p>
          </div>
          <div className="s3pl-two" ref={ref}>
            <i class="fa-brands fa-phoenix-squadron"></i>
            <p className="bold">
              <NumberAnimation n={411} inView={inView} />+
            </p>
            <p>Success of works</p>
          </div>
        </div>
        <div className="s4p-inner">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
            pariatur qui dolore, velit aperiam eius, soluta commodi voluptatem
            fugit sint possimus. Non officia distinctio hic animi possimus,
            nulla et illo obcaecati maxime!
          </p>
          <div className="s4p-img-cnt">
            <img
              src="https://images.unsplash.com/photo-1523678631214-6532a89c96cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHxkcm9uZXxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1533487924410-8792b4f3a661?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="asp-right">
        <div className="prod-sec1-lists">
          <div className="ps-list">
            <p>Drone Management</p>
            <i class="fa-solid fa-angle-right"></i>
          </div>
          <div className="ps-list active-bg active-text">
            <p>Product Management</p>
            <i class="fa-solid fa-angle-right"></i>
          </div>
          <div className="ps-list">
            <p>Customer Management</p>
            <i class="fa-solid fa-angle-right"></i>
          </div>
          <div className="ps-list">
            <p>Design Build</p>
            <i class="fa-solid fa-angle-right"></i>
          </div>
          <div className="ps-list">
            <p>Drone Testing</p>
            <i class="fa-solid fa-angle-right"></i>
          </div>
        </div>
        <div className="asp-right-2">
          <div className="sec2-prod-right">
            <div className="sec2-prod-right-inner">
              <span className="tele-icon">
                <i class="fa-solid fa-phone"></i>
              </span>
              <div>
                <p>Have you any Questions?</p>
                <p>
                  Call us <span className="ylo">Today!</span>
                </p>
              </div>
              <div className="dotted-line"></div>
              <p className="call-num">
                <a href="tel:+91-8320844583">+91-8320844583</a>
              </p>
            </div>
          </div>
          <div className="sec3-p-right">
            <h2>Brochure</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem sit ipsa qui commodi numquam.
            </p>
            <div className="s3p-btn-cnt">
              <button>Download</button>
              <span>Or</span>
              <button>Discover</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

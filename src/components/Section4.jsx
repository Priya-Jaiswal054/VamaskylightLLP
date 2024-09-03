import React from "react";
import "../style/section4.css";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

export default function Section4() {
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
    <div className="section4">
      <div className="section_outer">
        <div className="section_inner">
          <h6 className="contact-who">
            <img src="https://devsdesign.net/products/html/konstruk/assets/images/shape-1.png" />{" "}
            Key Figures VAMA Skylight
          </h6>

          <h1>Providing innovative solutions to the Drone Industry.</h1>
          <p>Delivering high-quality, reliable, and user-friendly drones that meet the needs of everyone.</p>
          <Link to="/contact"> <button>CONTACT NOW</button></Link>
          
          
        </div>

        <div className="sec4_right">
          <div className="Sec4_Card" ref={ref}>
            <h1>
              <p className="bold">
                {" "}
                <NumberAnimation n={500} inView={inView} /> +
              </p>
            </h1>
            <p>Drones Flying</p>
          </div>

          {/* <div className="Sec4_Card" ref={ref}>
            <h1>
              <p className="bold">
                {" "}
                <NumberAnimation n={100} inView={inView} /> +
              </p>
            </h1>
            <p>Pilot Training</p>
          </div> */}

          <div className="Sec4_Card">
            <h1>
              <p className="bold">
                {" "}
                <NumberAnimation n={20} inView={inView} /> +
              </p>
            </h1>
            <p>Vama Team</p>
          </div>

          <div className="Sec4_Card">
            <h1>
              <p className="bold">
                {" "}
                <NumberAnimation n={700} inView={inView} /> +
              </p>
            </h1>
            <p>Acres of Spraying</p>
          </div>
        </div>
      </div>
    </div>
  );
}

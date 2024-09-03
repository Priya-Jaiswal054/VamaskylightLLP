import React from "react";
import "../../style/page2/section3_p.css";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

export default function Section3_P() {
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
    <div className="section3-p">
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
  );
}

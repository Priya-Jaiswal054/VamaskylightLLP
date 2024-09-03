import React from "react";
import "../../style/page2/allSectionP2.css";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import { services, products } from "./Data";
import ServiceList from "./ServiceList";
import BreadcrumpTemp from "../Template/BreadcrumpTemp";
import brochure1 from "../../img/brochure-1.png";
import brochure2 from "../../img/brochure-2.png";
// import dgca from "../../img/Service-Product/DGCA TYPE CERTIFIED-01.jpg";
// import tc from "../../img/Service-Product/tc.jpg";
export default function ServiceTemplate({ props }) {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once when it comes into view
  });
  // const handleDownload = () => {
  //   const link = document.createElement("a");
  //   link.href = "../public/ User Manual.pdf";
  //   link.download = "User Manual.pdf";
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

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
    <div>
      <BreadcrumpTemp bprops={props.breadProp} />
      <div className="all-section-p">
        <div className="asp-left">
          <div className="prod-img">
            <img
              src={require(`../../img/Service-Product/${props.img}`)}
              alt="drone-footage"
            />
          </div>

          <div className="sec2-prod-left">
            <h1>{props.title}</h1>
            <p>{props.text1}</p>
            <ul>
              {props.pointArr.map((curr) => {
                return (
                  <li className="sec-list">
                    <i class="fa-solid fa-check"></i>
                    <p
                      style={{
                        textAlign: "left",
                        maxWidth: "350px",
                      }}
                    >
                      {curr}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="sec3-p-left" style={{ marginTop: "1.5rem" }}>
            <div className="s3pl-one" ref={ref}>
              <i class="fa-brands fa-phoenix-squadron"></i>
              <p className="bold">
                {" "}
                <NumberAnimation n={500} inView={inView} /> +
              </p>
              <p>Drones Flying</p>
            </div>
            <div className="s3pl-two" ref={ref}>
              <i class="fa-brands fa-phoenix-squadron"></i>
              <p className="bold">
                <NumberAnimation n={700} inView={inView} />+
              </p>
              <p>Happy Customers</p>
            </div>
          </div>

          {/* <div className="tc-dgca">
            <img src={dgca} className="imgdgca" /> */}
          {/* <img src={tc} className="imgtc" /> */}
          {/* </div> */}
          <div className="s4p-inner">
            {props.text2 ? <p>{props.text2}</p> : ""}

            <div
              className={
                props.img3 === "" ? "s4p-img-cnt single" : "s4p-img-cnt"
              }
            >
              {props.img3 === "" ? (
                <>
                  <img
                    src={require(`../../img/Service-Product/${props.img2}`)}
                    alt=""
                  />
                </>
              ) : (
                <>
                  <img src={props.img2} alt="" />
                  <img src={props.img2} alt="" />
                </>
              )}
            </div>
          </div>
        </div>
        <div className="asp-right">
          {props.isService ? (
            <ServiceList services={services} active={props.breadProp.title} />
          ) : (
            <ServiceList services={products} active={props.breadProp.title} />
          )}
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
              <img src={brochure1} alt="" />
              <img src={brochure2} alt="" />
              {/* <img src={tc} className="imgtc" alt="" /> */}
            </div>
            {/* <div>
              <button onClick={handleDownload}>Download PDF</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

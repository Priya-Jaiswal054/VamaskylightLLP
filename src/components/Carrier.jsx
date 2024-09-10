import React, { useRef } from "react";
import "../style/page2/allSectionP2.css";
import BreadcrumpTemp from "./Template/BreadcrumpTemp";
import Section4 from "./Section4.jsx";
import "../style/carrier.css";
import carrier from "../img/carrier/drone_pilot.jpg";
import emailjs from "emailjs-com";

export default function Carrier() {
  // const [ans0, setAns0] = useState(true);
  // const [ans1, setAns1] = useState(false);
  // const [ans2, setAns2] = useState(false);
  // const CarrierForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_223oiuf",
        "__ejs-test-mail-service__",
        form.current,
        "email_UbNKIqZpuPyeo3S8Vwr9b6SG"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent Successfully");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to Send Message");
        }
      );
  };

  const breadProp = {
    title: "Career",
    text: "",
    arr: ["Home", "Career"],
  };
  const props = {
    img: "s4.jpg",
    title: "Career",
    text1:
      "Join our nationally recognized, award winning team! Incredible opportunities available now. Competitive salary and benefits available. Most rewarding job in the country! Apply now!",
  };

  return (
    <div>
      <BreadcrumpTemp bprops={breadProp} />
      <div className="all-section-p">
        <div className="asp-left">
          <div className="prod-img">
            <img src={carrier} alt="" className="carrier-image" />
            {/* <form className="carrier-form">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
              />
              <input
                type="Email"
                id="Email"
                name="email"
                placeholder="Your Email"
              />

              <input
                type="Phone Number"
                id="Phone Number"
                name="number"
                placeholder="Your Phone Number"
              />

              <input
                type="Position"
                id="Position"
                name="position"
                placeholder="Your Position"
              />

              <div className="carrier-file">
                <label for="myfile" className="custom-file-upload">
                  <i className="fa fa-cloud-upload"></i> Upload Resume
                </label>
                <input type="file" id="myfile" name="myfile" />
              </div>

              <button type="submit">Submit Now</button>
            </form> */}
            <form ref={form} className="carrier-form" onSubmit={sendEmail}>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                id="Email"
                name="email"
                placeholder="Your Email"
                required
              />
              <input
                type="tel"
                id="Phone Number"
                name="number"
                placeholder="Your Phone Number"
                required
              />
              <input
                type="text"
                id="Position"
                name="position"
                placeholder="Your Position"
                required
              />
              <div className="carrier-file">
                <label htmlFor="myfile" className="custom-file-upload">
                  <i className="fa fa-cloud-upload"></i> Upload Resume
                </label>
                <input type="file" id="myfile" name="myfile" />
              </div>
              <button type="submit">Submit Now</button>
            </form>
          </div>
          <div className="sec2-prod-left">
            <h1>{props.title}</h1>
            <p>{props.text1}</p>
          </div>
        </div>
        <div className="asp-right">
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
            {/* <div className="sec3-p-right">
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
            </div> */}
          </div>
        </div>
      </div>
      <Section4 />
      <a
        href="https://wa.me/918320844583" // Replace with your WhatsApp number, including the country code
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-icon"
      >
        <i className="fab fa-whatsapp whats-app "></i>
      </a>
      <style jsx>{`
        .whatsapp-icon {
          position: fixed;
          width: 60px;
          height: 60px;
          bottom: 40px;
          right: 40px;
          background-color: #25d366;
          color: #fff;
          border-radius: 50px;
          text-align: center;
          font-size: 30px;
          box-shadow: 2px 2px 3px #999;
          z-index: 999;
        }
        .whats-app {
          margin-top: 16px;
        }

        /* for mobile */
        @media screen and (max-width: 767px) {
          .whats-app {
            margin-top: 10px;
          }

          .whatsapp-icon {
            width: 40px;
            height: 40px;
            bottom: 20px;
            right: 10px;
            font-size: 22px;
          }
        }
      `}</style>
      {/* <div className="faqs  shadow">
        <h2>Frequently Asked Questions </h2>
        <p>
          We have compiled answers of commonly asked questions regarding Remote
          Pilot Training Organisation (RTPO).
        </p>
        <div className="faq-inner">
          <div className="py-2">
            <h3
              className="my-3"
              onClick={() => {
                setAns0(!ans0);
              }}
            >
              Q: What is UIN?
            </h3>
            {ans0 && (
              <p>
                UIN can be abbreviated as “Unique Identification Number “and is
                issued for registering an unmanned aircraft system in India.
              </p>
            )}
          </div>
          <div className="py-2">
            <h3
              className="my-3"
              onClick={() => {
                setAns1(!ans1);
              }}
            >
              Q: What is DAN?
            </h3>
            {ans1 && (
              <p>
                “Drone acknowledgement number” means the unique number issued by
                the digital sky platform under the voluntary disclosure scheme
                for unmanned aircraft systems in India
              </p>
            )}
          </div>
          <div className="py-2">
            <h3
              className="my-3"
              onClick={() => {
                setAns2(!ans2);
              }}
            >
              Q: I have a self assembled Drone. How can I obtain the UIN for
              that?
            </h3>
            {ans2 && (
              <p>
                For self assembled drones with all up weight not exceeding 25
                Kg, organisations can now apply for UIN under ‘Model’
                subcategory, subject to compliance with Drone Rules, 2021. This
                does not need a Type Certificate or a DAN.
              </p>
            )}
          </div>
        </div>
      </div> */}
    </div>
  );
}

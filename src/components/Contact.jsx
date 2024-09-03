import React, { useState } from "react";
import "../style/contact.css";
import add from "../img/contact/add.png";
import call from "../img/contact/call.png";
import mail from "../img/contact/mail.png";
import BreadcrumpTemp from "./Template/BreadcrumpTemp";

export default function Contact() {
  const [formState, setFormState] = useState({});

  const changeHandler = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };
  // Username: "hi.abhi@yopmail.com",
  //   Password: "1B7607CD2DBE951938972969C2C19FD35EF3",
  //   Host: "smtp.elasticemail.com",
  //   Port: 2525,

  //---------------
  // Username: "munnabhishek4@gmail.com",
  //   Password: "E0E2DD6F751D2DF208EC67DEBEDF2AA82436",
  //   Host: "smtp.elasticemail.com",
  //   Port: 2525,
  // SecurityToken: "172386fd-6168-4592-94c8-f58442bded51"

  let config = {
    SecureToken: "172386fd-6168-4592-94c8-f58442bded51",
    To: "them@website.com",
    From: "you@isp.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  };
  const submitHandler = (event) => {
    event.preventDefault();
    // const bodyDetail = {
    //   name: formState.name,
    //   "phone-number": formState["phone-number"],
    //   website: formState.website,
    //   UserMessage: formState.message,
    // };
    config = {
      SecureToken: "172386fd-6168-4592-94c8-f58442bded51",
      To: "anuraggreat77@gmail.com",
      From: formState.email,
      Subject: "Vama Skylight Submission",
      Body: `Details of submission is :- \n name:${formState.name},\n phone-number:${formState["phone-number"]},\n website:${formState["website"]},\n user-message:"${formState.message}"`,
    };
    // console.log(config.Body);
    if (window.Email) {
      window.Email.send(config).then((message) => {
        if (message === "OK")
          alert("Your message has been submitted successfully!");
        else alert(message);
        // console.log(message);
      });
    }
  };
  const breadProp = {
    title: "Our Contact",
    text: "Join us in building a resilient future with the help of cutting-edge drone technology",
    arr: ["Home", "Contact"],
  };
  return (
    <div className="contact-outer">
      <BreadcrumpTemp bprops={breadProp} />
      <div className="contact">
        <div className="contact1">
          <h6 className="contact-who">
            <img
              src="https://devsdesign.net/products/html/konstruk/assets/images/shape-1.png"
              alt=""
            />{" "}
            LETS TALK
          </h6>
          <h2>Have an Upcoming Project ?</h2>

          <form className="form" onSubmit={submitHandler}>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formState.name || ""}
              onChange={changeHandler}
            />
            <input
              type="Email"
              id="Email"
              name="email"
              value={formState.email || ""}
              placeholder="Your Email"
              onChange={changeHandler}
            />
            <br />
            <input
              type="Text"
              id="name"
              name="phone-number"
              value={formState["phone-number"] || ""}
              placeholder="Phone Number"
              onChange={changeHandler}
            />
            <input
              type="text"
              id="name"
              name="website"
              value={formState.website || ""}
              placeholder="Your Website"
              onChange={changeHandler}
            />
            <br />
            <textarea
              type="text"
              id="name"
              name="message"
              value={formState.message || ""}
              placeholder="Your Massege Here"
              onChange={changeHandler}
            />
            <br />
            <button type="submit">Submit Now</button>
          </form>
        </div>

        <div className="Contact-Right-Side">
          <div className="card">
            <img src={add} alt="" />
            <div className="card1">
              <h5>Address</h5>
              <p>Daman Industrial Estate</p>
              <p>Daman - 396210</p>
            </div>
          </div>

          <div className="card">
            <img src={mail} alt="" />
            <div className="card1">
              <h5>Email Us</h5>
              <p>
                <a href="mailto: vamaskylight@gmail.com"> vamaskylight@gmail.com</a>
              </p>
              {/* <p>test2@gmail.com</p> */}
            </div>
          </div>

          <div className="card">
            <img src={call} alt="" />
            <div className="card1">
              <h5>Call Us</h5>
              <p>
                <a href="tel:+91-8320844583">+91-8320844583</a>
              </p>
              {/* <p>(+0888) 222-9999</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

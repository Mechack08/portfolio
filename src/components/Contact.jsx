import React from "react";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import {
  MdLocationOn,
  MdMail,
  MdSend,
  MdSubject,
  MdMessage,
} from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact">
      <div className="header">
        <span>Would you like to contact me ?</span>
        <span>Contact</span>
      </div>

      <div className="parts">
        <div className="part-one">
          <div className="content">
            <FaPhoneAlt className="icon" />
            <div className="details">
              <span>+256 752 949 545</span>
              <p>
                For any inquiries feel free to call me at any time. I am at your
                service.
              </p>
            </div>
          </div>
          <div className="content">
            <MdLocationOn className="icon" />
            <div className="details">
              <span>Kampala, Uganda</span>
              <p>I live in Kampala, Uganda at Makindiye Samala Road.</p>
            </div>
          </div>
          <div className="content">
            <MdMail className="icon" />
            <div className="details">
              <span>mechackkobius@outlook.fr</span>
              <p>You can also email me at the mail below.</p>
            </div>
          </div>
        </div>
        <div className="part-two">
          <span className="title-underline">How Can I help You ?</span>
          <form action="">
            <div className="input-content">
              <input type="text" name="fullname" placeholder="Your full name" />
              <FaUser className="input-icon" />
            </div>
            <div className="input-content">
              <input
                type="email"
                name="email"
                placeholder="Your email address"
              />
              <MdMail className="input-icon" />
            </div>
            <div className="input-content">
              <input type="text" name="subject" placeholder="Subject" />
              <MdSubject className="input-icon" />
            </div>
            <div className="input-content">
              <textarea name="message" placeholder="Message"></textarea>
              <MdMessage className="input-icon area" />
            </div>
            <button>
              Send <MdSend className="icon" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

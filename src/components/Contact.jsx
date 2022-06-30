import React, { useEffect, useRef, useState } from "react";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import {
  MdLocationOn,
  MdMail,
  MdSend,
  MdSubject,
  MdMessage,
} from "react-icons/md";

const Contact = () => {
  const [btnSend, setBtnSend] = useState({ class: "empty", title: "Send" });
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [alertMessage, setAlertMessage] = useState({
    class: "hide",
    text: "Message sent. Thank you!",
  });
  const form = useRef();

  const btnSubmit = () => {
    setBtnSend({ class: "empty sending", title: "Sending..." });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const service_id = process.env.REACT_APP_SERVICE_ID;
    const template_id = process.env.REACT_APP_TEMPLATE_ID;
    const public_key = process.env.REACT_APP_PUBLIC_KEY;

    emailjs
      .sendForm(service_id, template_id, form.current, public_key)
      .then(
        (result) => {
          if (result.status === 200) {
            setBtnSend({ class: "empty", title: "Send" });
            setAlertMessage({
              class: "alert success",
              text: "Message sent. Thank you!",
            });
            setFullName("");
            setEmail("");
            setSubject("");
            setMessage("");
          }
        },
        (error) => {
          setAlertMessage({
            class: "alert fail",
            text: "Something went wrong! Message not sent. Check your Network then try again",
          });
          setBtnSend({ class: "", title: "Send" });
        }
      )
      .then(() => {
        setTimeout(() => {
          setAlertMessage({
            class: "hide",
            text: "Message sent. Thank you!",
          });
        }, 6000);
      });
  };

  useEffect(() => {
    if (
      fullname !== "" &&
      fullname.length > 2 &&
      email !== "" &&
      subject !== "" &&
      subject.length > 2 &&
      message !== "" &&
      message.length > 10
    ) {
      setBtnSend({ class: "", title: "Send" });
    } else {
      setBtnSend({ class: "empty", title: "Send" });
    }
  }, [fullname, email, subject, message]);

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
          <span className={alertMessage.class}>{alertMessage.text}</span>

          <form ref={form} onSubmit={sendEmail}>
            <div className="input-content">
              <input
                type="text"
                name="fullname"
                placeholder="Your full name"
                value={fullname}
                onChange={(e) => setFullName(e.target.value)}
              />
              <FaUser className="input-icon" />
            </div>
            <div className="input-content">
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <MdMail className="input-icon" />
            </div>
            <div className="input-content">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <MdSubject className="input-icon" />
            </div>
            <div className="input-content">
              <textarea
                name="message"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <MdMessage className="input-icon area" />
            </div>
            <button className={btnSend.class} onClick={btnSubmit}>
              {btnSend.title} <MdSend className="icon" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

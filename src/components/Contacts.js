import React from "react";
import { Button } from "react-bootstrap";
import emaillogo from "../Assets/icons/email.svg";
import phonelogo from "../Assets/icons/telephone.svg";
import emailjs from "emailjs-com";

const Contacts = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0q05cud",
        "template_ai0pbvy",
        e.target,
        "user_fVA9crxMYZesVPmSxOQcg"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div id="contacts" className="contact">
      <div className="contact__title">Contacts</div>
      <div className="contact__container">
        <form className="contact__form" onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="contact__form--nameinput"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="contact__form--emailinput"
          />

          <input
            type="text"
            name="message"
            placeholder="body"
            className="contact__form--bodyinput"
          />
          <Button
            className="contact__form--submit"
            type="submit"
            variant="dark"
          >
            <div className="">Send</div>
          </Button>
        </form>

        <div className="contact__divider">
          <div className="contact__email">
            <a href="mailto:jason.lo.kc@gmail.com">
              <img
                className="contact__email--logo"
                src={emaillogo}
                alt="emaillogo"
              />
            </a>
            <div className="contact__email--email">jason.lo.kc@gmail.com</div>
          </div>
          <div className="contact__phone">
            <a href="tel:[7788913983]">
              <img
                className="contact__phone--logo"
                src={phonelogo}
                alt="phonelogo"
              />
            </a>
            <div className="contact__phone--number">+1 778-891-3983</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;

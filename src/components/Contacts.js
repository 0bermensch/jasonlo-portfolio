import React from "react";
import { Button } from "react-bootstrap";
import githublogo from "../Assets/icons/github-6-128.png";
import linkedinlogo from "../Assets/icons/linkedin-original.svg";
import emaillogo from "../Assets/icons/email.svg";
import phonelogo from "../Assets/icons/telephone.svg";
import context from "react-bootstrap/esm/AccordionContext";

const Contacts = () => {
  // const toEmail = (window.location.href = "jason.lo.kc@gmail.com");
  return (
    <div className="contact" id="contacts">
      <div className="contact__title">Get In Touch!</div>
      <div className="contact__heading">Contacts</div>
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
      <div className="contact__heading">Socials</div>
      <div className="contact__divider1">
        <a href="https://github.com/0bermensch">
          <img
            className="contact__githublogo"
            src={githublogo}
            alt="githublogo"
          />
        </a>
        <a href="https://www.linkedin.com/in/jason--lo/">
          <img
            className="contact__linkedinlogo"
            src={linkedinlogo}
            alt="linkedinlogo"
          />
        </a>
      </div>
      <div className="contact__heading">Resume & Cover Letter</div>
      <div className="contact__divider2">
        <Button className="contact__resume" variant="primary">
          <div className="contact__resume--text">Resume</div>
        </Button>
        <Button className="contact__letter" variant="primary">
          <div className="contact__letter--text">Cover Letter</div>
        </Button>
      </div>
    </div>
  );
};

export default Contacts;

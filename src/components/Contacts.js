import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import githublogo from "../Assets/icons/github-6-128.png";
import linkedinlogo from "../Assets/icons/linkedin-original.svg";
import emaillogo from "../Assets/icons/email.svg";
import phonelogo from "../Assets/icons/telephone.svg";
import resume from "../Assets/JasonLoResume.pdf";

import Aos from "aos";
import "aos/dist/aos.css";

const Contacts = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div id="contacts">
      <div className="contacttitle">Get In Touch!</div>
      <div className="contact" data-aos="zoom-in-up">
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
          <a style={{ width: "23%" }} href={resume} download>
            <Button
              className="contact__resume"
              style={{ width: "100%" }}
              variant="primary"
            >
              <div className="contact__resume--text">Resume</div>
            </Button>
          </a>

          {/* <Button className="contact__letter" variant="primary">
            <div className="contact__letter--text">Cover Letter</div>
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default Contacts;

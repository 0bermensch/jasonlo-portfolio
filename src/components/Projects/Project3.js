import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Carousel, Button, Modal } from "react-bootstrap";
import country1 from "../../Assets/Projectpics/country1.PNG";
import country2 from "../../Assets/Projectpics/country2.PNG";
import country3 from "../../Assets/Projectpics/country3.PNG";
import countryvid from "../../Assets/projectvids/RestCountry-App - Vid.mp4";

const Project3 = () => {
  const [modal, setModal] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div data-aos="fade-up" className="project__card">
        <div className="project__card--title">Country-App</div>
        <Carousel>
          <Carousel.Item>
            <img
              className="project__card--mainpic"
              src={country1}
              alt="mainpic"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="project__card--mainpic"
              src={country2}
              alt="mainpic"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="project__card--mainpic"
              src={country3}
              alt="mainpic"
            />
          </Carousel.Item>
        </Carousel>
        <div className="project__card--buttons">
          <Button
            className="project__card--detailb"
            variant="primary"
            onClick={() => setModal(true)}
          >
            <div className="project__card--buttontext">Details</div>
          </Button>
          <Button className="project__card--demob" variant="primary">
            <a
              className="project__card--buttontext"
              href="https://rest-country-app.vercel.app/"
            >
              Demo
            </a>
          </Button>
        </div>
      </div>
      <Modal
        className="project__modal"
        size="lg"
        show={modal}
        onHide={() => setModal(false)}
      >
        <Modal.Header className="project__modal--header" closeButton>
          Country-App
        </Modal.Header>
        <Modal.Body>
          <video className="project__modal--video" controls>
            <source src={countryvid} type="video/mp4"></source>
          </video>
          <div className="project__modal--techstack">
            TECHSTACK: React, sass.module, REST API
          </div>
          <a
            href="https://github.com/0bermensch/Rest-Country-App"
            className="project__modal--github"
          >
            GITHUB: https://github.com/0bermensch/Rest-Country-App
          </a>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Project3;

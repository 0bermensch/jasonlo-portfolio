import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Carousel, Button, Modal } from "react-bootstrap";
import weather1 from "../../Assets/Projectpics/typescript-weather1.PNG";
import weather2 from "../../Assets/Projectpics/typescript-weather2.PNG";
import weather3 from "../../Assets/Projectpics/typescript-weather3.PNG";
import weathervid from "../../Assets/projectvids/WeatherApp - Vid.mp4";

const Project5 = () => {
  const [modal, setModal] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div data-aos="fade-up" className="project__card">
        <div className="project__card--title">OpenWeather</div>
        <Carousel>
          <Carousel.Item>
            <img
              className="project__card--mainpic"
              src={weather1}
              alt="picture"
              style={{ width: "75%", height: "100%" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="project__card--mainpic"
              src={weather2}
              alt="picture"
              style={{ width: "75%", height: "100%" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="project__card--mainpic"
              src={weather3}
              alt="picture"
              style={{ width: "75%", height: "100%" }}
            />
          </Carousel.Item>
        </Carousel>
        <Button
          style={{ marginTop: "0.5rem", width: "70%" }}
          variant="light"
          onClick={() => setModal(true)}
        >
          <div className="project__card--buttontext">Details</div>
        </Button>
      </div>
      <Modal
        className="project__modal"
        size="lg"
        show={modal}
        onHide={() => setModal(false)}
      >
        <Modal.Header className="project__modal--header" closeButton>
          OpenWeather
        </Modal.Header>
        <Modal.Body>
          <video className="project__modal--video" controls>
            <source src={weathervid} type="video/mp4"></source>
          </video>
          <div className="project__modal--techstack">
            TECHSTACK: React, Redux, Typescript, REST API, CSS
          </div>
          <a
            href="https://github.com/0bermensch/SimpleWeatherApp"
            className="project__modal--github"
          >
            GITHUB: https://github.com/0bermensch/SimpleWeatherApp
          </a>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Project5;

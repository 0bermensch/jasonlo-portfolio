import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Carousel, Button, Modal } from "react-bootstrap";
import track1 from "../../Assets/Projectpics/trailtrack1.PNG";
import track2 from "../../Assets/Projectpics/trailtrack2.PNG";
import track3 from "../../Assets/Projectpics/trailtrack4.PNG";
import trackervid from "../../Assets/projectvids/trailtracker-vid.mp4";

const Project1 = () => {
  const [modal, setModal] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div data-aos="fade-up" className="project__card">
        <div className="project__card--title">TrailTracker</div>
        <Carousel>
          <Carousel.Item>
            <img
              className="project__card--mainpicphone"
              src={track1}
              alt="mainpic"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="project__card--mainpicphone"
              src={track2}
              alt="mainpic"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="project__card--mainpicphone"
              src={track3}
              alt="mainpic"
            />
          </Carousel.Item>
        </Carousel>

        <Button
          className="project__card--detailb"
          variant="primary"
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
          TrailTracker
        </Modal.Header>
        <Modal.Body>
          <video className="project__modal--video" controls>
            <source src={trackervid} type="video/mp4"></source>
          </video>
          <div className="project__modal--techstack">
            TECHSTACK: React Native, Node.js, Express, MongoDB, Expo,
            React-Navigation, User Authentication, ngrok
          </div>
          <a
            href="https://github.com/0bermensch/Trail-Tracker"
            className="project__modal--github"
          >
            GITHUB: https://github.com/0bermensch/Trail-Tracker
          </a>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Project1;

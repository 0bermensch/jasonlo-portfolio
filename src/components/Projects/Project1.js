import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Carousel, Button, Modal } from "react-bootstrap";
import track1 from "../../Assets/Projectpics/trailtrack1.PNG";
import track2 from "../../Assets/Projectpics/trailtrack2.PNG";
import track3 from "../../Assets/Projectpics/trailtrack4.PNG";

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
              className="project__card--mainpic"
              src={track1}
              alt="picture"
              style={{ width: "60%", height: "80%" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="project__card--mainpic"
              src={track2}
              alt="picture"
              style={{ width: "60%", height: "80%" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="project__card--mainpic"
              src={track3}
              alt="picture"
              style={{ width: "60%", height: "80%" }}
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
          TrailTracker
        </Modal.Header>
        <Modal.Body>
          <div className="project__modal--video">video</div>
          <div className="project__modal--techstack">
            TECHSTACK: React Native, Node.js, Express, MongoDB, Expo,
            React-Navigation, User Authentication, ngrok
          </div>
          <div className="project__modal--github">
            GITHUB: https://github.com/0bermensch/Trail-Tracker
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Project1;

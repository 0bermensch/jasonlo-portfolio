import React, { useState } from "react";
import { Carousel, Button, Modal } from "react-bootstrap";
import track1 from "../../Assets/Projectpics/trailtrack1.PNG";
import track2 from "../../Assets/Projectpics/trailtrack2.PNG";
import track3 from "../../Assets/Projectpics/trailtrack4.PNG";

const Project1 = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="project__card">
      <div className="project__card--title">TrailTracker</div>
      <Carousel>
        <Carousel.Item>
          <img className="project__card--mainpic" src={track1} alt="picture" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="project__card--mainpic" src={track2} alt="picture" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="project__card--mainpic" src={track3} alt="picture" />
        </Carousel.Item>
      </Carousel>

      <Button variant="light" onClick={() => setModal(true)}>
        Details
      </Button>
      <Modal size="lg" show={modal} onHide={() => setModal(false)}>
        <Modal.Header closeButton>TrailTracker</Modal.Header>
        <Modal.Body>
          <div>
            TechStack: React Native, Node.js, Express, MongoDB, Expo,
            React-Navigation, User Authentication, ngrok
          </div>
          <div>Github: https://github.com/0bermensch/Trail-Tracker</div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Project1;

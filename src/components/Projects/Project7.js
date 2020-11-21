import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Carousel, Button, Modal } from "react-bootstrap";
import omdb1 from "../../Assets/Projectpics/omdb1.PNG";
import omdb2 from "../../Assets/Projectpics/omdb2.PNG";
import omdb3 from "../../Assets/Projectpics/omdb3.PNG";
import omdbvid from "../../Assets/projectvids/OMDB - Vid.mp4";

const Project7 = () => {
  const [modal, setModal] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div data-aos="fade-up" className="project__card">
        <div className="project__card--title">OMDB-Movies</div>
        <Carousel>
          <Carousel.Item>
            <img
              className="project__card--mainpic"
              src={omdb1}
              alt="picture"
              style={{ width: "75%", height: "100%" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="project__card--mainpic"
              src={omdb2}
              alt="picture"
              style={{ width: "75%", height: "100%" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="project__card--mainpic"
              src={omdb3}
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
          OMDB-Movies
        </Modal.Header>
        <Modal.Body>
          <video className="project__modal--video" controls>
            <source src={omdbvid} type="video/mp4"></source>
          </video>
          <div className="project__modal--techstack">
            TECHSTACK: React, REST API, CSS
          </div>
          <div className="project__modal--github">
            GITHUB: https://github.com/0bermensch/omdb-challenge
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Project7;

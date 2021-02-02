import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Carousel, Button, Modal } from "react-bootstrap";
import food1 from "../../Assets/Projectpics/food1.PNG";
import food2 from "../../Assets/Projectpics/food2.PNG";
import food3 from "../../Assets/Projectpics/food3.PNG";
import foodvid from "../../Assets/projectvids/Yelp-Clone Vid.mp4";

const Project2 = () => {
  const [modal, setModal] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div data-aos="fade-up" className="project__card">
        <div className="project__card--title">Yelp-Clone</div>
        <Carousel>
          <Carousel.Item>
            <img
              className="project__card--mainpicphone"
              src={food1}
              alt="mainpic"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="project__card--mainpicphone"
              src={food2}
              alt="mainpic"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="project__card--mainpicphone"
              src={food3}
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
          Yelp-Clone
        </Modal.Header>
        <Modal.Body>
          <video className="project__modal--video" controls>
            <source src={foodvid} type="video/mp4"></source>
          </video>
          <div className="project__modal--techstack">
            TECHSTACK: React Native, Expo, RESTful API
          </div>
          <a
            href="https://github.com/0bermensch/yelp-clone"
            className="project__modal--github"
          >
            GITHUB: https://github.com/0bermensch/yelp-clone
          </a>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Project2;

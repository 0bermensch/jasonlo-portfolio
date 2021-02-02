import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Carousel, Button, Modal } from "react-bootstrap";
import instock1 from "../../Assets/Projectpics/instock1.PNG";
import instock2 from "../../Assets/Projectpics/instock2.PNG";
import instock3 from "../../Assets/Projectpics/instock3.PNG";
import instockvid from "../../Assets/projectvids/InStock - Vid.mp4";

const Project4 = () => {
  const [modal, setModal] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div data-aos="fade-up" className="project__card">
        <div className="project__card--title">Instock</div>
        <Carousel>
          <Carousel.Item>
            <img
              className="project__card--mainpic"
              src={instock1}
              alt="mainpic"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="project__card--mainpic"
              src={instock2}
              alt="mainpic"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="project__card--mainpic"
              src={instock3}
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
          InStock
        </Modal.Header>
        <Modal.Body>
          <video className="project__modal--video" controls>
            <source src={instockvid} type="video/mp4"></source>
          </video>
          <div className="project__modal--techstack">
            TECHSTACK: React, sass, Node.js, Express, json
          </div>
          <a
            href="https://github.com/0bermensch/Instock"
            className="project__modal--github"
          >
            GITHUB: https://github.com/0bermensch/Instock
          </a>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Project4;

import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Carousel, Button, Modal } from "react-bootstrap";
import instock1 from "../../Assets/Projectpics/instock1.PNG";
import instock2 from "../../Assets/Projectpics/instock2.PNG";
import instock3 from "../../Assets/Projectpics/instock3.PNG";

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
              alt="picture"
              style={{ width: "75%", height: "100%" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="project__card--mainpic"
              src={instock2}
              alt="picture"
              style={{ width: "75%", height: "100%" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="project__card--mainpic"
              src={instock3}
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
          InStock
        </Modal.Header>
        <Modal.Body>
          <div className="project__modal--video">video</div>
          <div className="project__modal--techstack">
            TECHSTACK: React, sass, Node.js, Express, json
          </div>
          <div className="project__modal--github">
            GITHUB: https://github.com/0bermensch/Instock
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Project4;

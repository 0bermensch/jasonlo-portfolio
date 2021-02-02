import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Carousel, Button, Modal } from "react-bootstrap";
import arch1 from "../../Assets/Projectpics/arch1.PNG";
import arch2 from "../../Assets/Projectpics/arch2.PNG";
import arch3 from "../../Assets/Projectpics/arch3.PNG";

const Project7 = () => {
  const [modal, setModal] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div data-aos="fade-up" className="project__card">
        <div className="project__card--title">Architect-Studio</div>
        <Carousel>
          <Carousel.Item>
            <img className="project__card--mainpic" src={arch1} alt="mainpic" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="project__card--mainpic" src={arch2} alt="mainpic" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="project__card--mainpic" src={arch3} alt="mainpic" />
          </Carousel.Item>
        </Carousel>
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
            href="https://architect-studio.vercel.app/#/"
          >
            Demo
          </a>
        </Button>
      </div>
      <Modal
        className="project__modal"
        size="lg"
        show={modal}
        onHide={() => setModal(false)}
      >
        <Modal.Header className="project__modal--header" closeButton>
          Architect-Studio
        </Modal.Header>
        <Modal.Body>
          <div className="project__modal--techstack">
            TECHSTACK: React, Scss, Figma
          </div>
          <div className="project__modal--github">
            GITHUB: https://github.com/0bermensch/arch-studio
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Project7;

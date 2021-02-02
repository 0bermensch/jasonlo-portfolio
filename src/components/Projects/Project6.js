import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Carousel, Button, Modal } from "react-bootstrap";
import band1 from "../../Assets/Projectpics/bandsite-pic1.PNG";
import band2 from "../../Assets/Projectpics/bandsite-pic2.PNG";
import band3 from "../../Assets/Projectpics/bandsite3.PNG";

const Project6 = () => {
  const [modal, setModal] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div data-aos="fade-up" className="project__card">
        <div className="project__card--title">BandSite</div>
        <Carousel>
          <Carousel.Item>
            <img className="project__card--mainpic" src={band1} alt="mainpic" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="project__card--mainpic" src={band2} alt="mainpic" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="project__card--mainpic" src={band3} alt="mainpic" />
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
          BandSite
        </Modal.Header>
        <Modal.Body>
          <div className="project__modal--video">video</div>
          <div className="project__modal--techstack">
            TECHSTACK: Javascript, HTML5, sass
          </div>
          <div className="project__modal--github">
            GITHUB: https://github.com/0bermensch/Bandsite
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Project6;

import React, { useState } from "react";
import { Carousel, Button, Modal } from "react-bootstrap";
import band1 from "../../Assets/Projectpics/bandsite-pic1.PNG";
import band2 from "../../Assets/Projectpics/bandsite-pic2.PNG";
import band3 from "../../Assets/Projectpics/bandsite3.PNG";

const Project6 = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="project__card">
      <div className="project__card--title">BandSite</div>
      <Carousel>
        <Carousel.Item>
          <img className="project__card--mainpic" src={band1} alt="picture" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="project__card--mainpic" src={band2} alt="picture" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="project__card--mainpic" src={band3} alt="picture" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Project6;

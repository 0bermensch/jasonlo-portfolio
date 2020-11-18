import React, { useState } from "react";
import { Carousel, Button, Modal } from "react-bootstrap";
import instock1 from "../../Assets/Projectpics/instock1.PNG";
import instock2 from "../../Assets/Projectpics/instock2.PNG";
import instock3 from "../../Assets/Projectpics/instock3.PNG";

const Project4 = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="project__card">
      <div className="project__card--title">Instock</div>
      <Carousel>
        <Carousel.Item>
          <img
            className="project__card--mainpic"
            src={instock1}
            alt="picture"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="project__card--mainpic"
            src={instock2}
            alt="picture"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="project__card--mainpic"
            src={instock3}
            alt="picture"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Project4;

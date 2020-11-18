import React, { useState } from "react";
import { Carousel, Button, Modal } from "react-bootstrap";
import country1 from "../../Assets/Projectpics/country1.PNG";
import country2 from "../../Assets/Projectpics/country2.PNG";
import country3 from "../../Assets/Projectpics/country3.PNG";

const Project3 = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="project__card">
      <div className="project__card--title">Country-App</div>
      <Carousel>
        <Carousel.Item>
          <img
            className="project__card--mainpic"
            src={country1}
            alt="picture"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="project__card--mainpic"
            src={country2}
            alt="picture"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="project__card--mainpic"
            src={country3}
            alt="picture"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Project3;

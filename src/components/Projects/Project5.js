import React, { useState } from "react";
import { Carousel, Button, Modal } from "react-bootstrap";
import weather1 from "../../Assets/Projectpics/typescript-weather1.PNG";
import weather2 from "../../Assets/Projectpics/typescript-weather2.PNG";
import weather3 from "../../Assets/Projectpics/typescript-weather3.PNG";

const Project5 = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="project__card">
      <div className="project__card--title">OpenWeather</div>
      <Carousel>
        <Carousel.Item>
          <img
            className="project__card--mainpic"
            src={weather1}
            alt="picture"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="project__card--mainpic"
            src={weather2}
            alt="picture"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="project__card--mainpic"
            src={weather3}
            alt="picture"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Project5;

import React, { useState } from "react";
import { Carousel, Button, Modal } from "react-bootstrap";
import omdb1 from "../../Assets/Projectpics/omdb1.PNG";
import omdb2 from "../../Assets/Projectpics/omdb2.PNG";
import omdb3 from "../../Assets/Projectpics/omdb3.PNG";

const Project7 = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="project__card">
      <div className="project__card--title">OMDB-Movies</div>
      <Carousel>
        <Carousel.Item>
          <img className="project__card--mainpic" src={omdb1} alt="picture" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="project__card--mainpic" src={omdb2} alt="picture" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="project__card--mainpic" src={omdb3} alt="picture" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Project7;

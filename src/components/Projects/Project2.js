import React, { useState } from "react";
import { Carousel, Button, Modal } from "react-bootstrap";
import food1 from "../../Assets/Projectpics/food1.PNG";
import food2 from "../../Assets/Projectpics/food2.PNG";
import food3 from "../../Assets/Projectpics/food3.PNG";

const Project2 = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className="project__card">
      <div className="project__card--title">Yelp-Clone</div>
      <Carousel>
        <Carousel.Item>
          <img className="project__card--mainpic" src={food1} alt="picture" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="project__card--mainpic" src={food2} alt="picture" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="project__card--mainpic" src={food3} alt="picture" />
        </Carousel.Item>
      </Carousel>

      <Button variant="light">Details</Button>
    </div>
  );
};

export default Project2;

import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import track1 from "../Assets/Projectpics/trailtrack1.PNG";
import track2 from "../Assets/Projectpics/trailtrack2.PNG";
import track3 from "../Assets/Projectpics/trailtrack4.PNG";
import food1 from "../Assets/Projectpics/food1.PNG";
import food2 from "../Assets/Projectpics/food2.PNG";
import food3 from "../Assets/Projectpics/food3.PNG";
import country1 from "../Assets/Projectpics/country1.PNG";
import country2 from "../Assets/Projectpics/country2.PNG";
import country3 from "../Assets/Projectpics/country3.PNG";
import instock1 from "../Assets/Projectpics/instock1.PNG";
import instock2 from "../Assets/Projectpics/instock2.PNG";
import instock3 from "../Assets/Projectpics/instock3.PNG";
import band1 from "../Assets/Projectpics/bandsite-pic1.PNG";
import band2 from "../Assets/Projectpics/bandsite-pic2.PNG";
import band3 from "../Assets/Projectpics/bandsite3.PNG";

const Projects = () => {
  const [detail, setDetail] = useState(false);

  const handleOpen = () => setDetail(true);
  const handleClose = () => setDetail(false);

  const projects = [
    {
      id: 1,
      image1: track1,
      image2: track2,
      image3: track3,
      title: "Trail-Tracker",
      github: "https://github.com/0bermensch/Trail-Tracker",
      video: "",
      techstack:
        "React Native, Node.js, Express, MongoDB, Expo, React-Navigation, User Authentication, ngrok, ",
    },
    {
      id: 2,
      image1: food1,
      image2: food2,
      image3: food3,
      title: "Yelp-Clone",
      github: "https://github.com/0bermensch/yelp-clone",
      video: "",
      techstack: "React Native, Expo, RESTful API",
    },
    {
      id: 3,
      image1: instock1,
      image2: instock2,
      image3: instock3,
      title: "InStock",
      github: "https://github.com/0bermensch/Instock",
      video: "",
      techstack: "React, Node.js, Express",
    },
    {
      id: 4,
      image1: country1,
      image2: country2,
      image3: country3,
      title: "RESTCountries-api",
      github: "https://github.com/0bermensch/Rest-Country-App",
      video: "",
      techstack: "React, REST API",
    },
    {
      id: 5,
      image: {},
      title: "Harmoody",
      video: "",
      github: "https://github.com/0bermensch/Harmoody",
      techstack:
        "React, Node.js, Express, Azure face detection API, Spotify API",
    },
    {
      id: 6,
      image1: band1,
      image2: band2,
      image3: band3,
      title: "Bandsite",
      github: "https://github.com/0bermensch/Bandsite",
      video: "",
      techstack:
        "React Native, Node.js, Express, MongoDB, User Authentication, ngrok",
    },
  ];

  return (
    <div className="project">
      {projects.map((content) => (
        <div className="project__card" onClick={handleOpen}>
          <img
            className="project__card--mainpic"
            src={content.image1}
            alt={content.id}
          />
          <div className="project__card--title">{content.title}</div>
          <Modal
            show={detail}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <img
              className="project__card--modalpic"
              src={content.image2}
              alt={content.id}
            />
            <Modal.Body>{content.techstack}</Modal.Body>
          </Modal>
        </div>
      ))}
    </div>
  );
};

export default Projects;

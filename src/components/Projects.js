import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Project1 from "./Projects/Project1";
import Project2 from "./Projects/Project2";
import Project3 from "./Projects/Project3";
import Project4 from "./Projects/Project4";
import Project5 from "./Projects/Project5";
import Project6 from "./Projects/Project6";
import Project7 from "./Projects/Project7";
import Project8 from "./Projects/Project8";
import "bootstrap/dist/css/bootstrap.min.css";

const Projects = () => {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontFamily: "biorhyme-extrabold",
          marginBottom: "5rem",
        }}
      >
        Projects
      </h1>
      <div className="project">
        <Project1 />
        <Project2 />
        <Project3 />
        <Project4 />
        <Project5 />
        <Project6 />
        <Project7 />
      </div>
    </>
  );
  // const [detail, setDetail] = useState(false);
  // const handleOpen = () => setDetail(true);
  // const handleClose = () => setDetail(false);
  // const projects = [
  //   {
  //     id: 1,
  //     image1: track1,
  //     image2: track2,
  //     image3: track3,
  //     title: "Trail-Tracker",
  //     github: "https://github.com/0bermensch/Trail-Tracker",
  //     video: "",
  //     techstack:
  //       "React Native, Node.js, Express, MongoDB, Expo, React-Navigation, User Authentication, ngrok, ",
  //   },
  //   {
  //     id: 2,
  //     image1: food1,
  //     image2: food2,
  //     image3: food3,
  //     title: "Yelp-Clone",
  //     github: "https://github.com/0bermensch/yelp-clone",
  //     video: "",
  //     techstack: "React Native, Expo, RESTful API",
  //   },
  //   {
  //     id: 3,
  //     image1: instock1,
  //     image2: instock2,
  //     image3: instock3,
  //     title: "InStock",
  //     github: "https://github.com/0bermensch/Instock",
  //     video: "",
  //     techstack: "React, sass, Node.js, Express, json",
  //   },
  //   {
  //     id: 4,
  //     image1: country1,
  //     image2: country2,
  //     image3: country3,
  //     title: "RESTCountries-api",
  //     github: "https://github.com/0bermensch/Rest-Country-App",
  //     video: "",
  //     techstack: "React, sass.module, REST API",
  //   },
  //   {
  //     id: 5,
  //     image: {},
  //     title: "Harmoody",
  //     video: "",
  //     github: "https://github.com/0bermensch/Harmoody",
  //     techstack:
  //       "React, Node.js, Express, Azure face detection API, Spotify API",
  //   },
  //   {
  //     id: 6,
  //     image1: band1,
  //     image2: band2,
  //     image3: band3,
  //     title: "Bandsite",
  //     github: "https://github.com/0bermensch/Bandsite",
  //     video: "",
  //     techstack: "javascipt, CSS",
  //   },
  //   {
  //     id: 7,
  //     image1: weather1,
  //     image2: weather2,
  //     image3: weather3,
  //     title: "OpenWeather",
  //     github: "https://github.com/0bermensch/SimpleWeatherApp",
  //     video: "",
  //     techstack: "React, redux, typescript, CSS",
  //   },
  //   {
  //     id: 8,
  //     image1: omdb1,
  //     image2: omdb2,
  //     image3: omdb3,
  //     title: "OMDB-Movies",
  //     github: "https://github.com/0bermensch/SimpleWeatherApp",
  //     video: "",
  //     techstack: "React, RESTful API, CSS",
  //   },
  // ];
  // return (
  //   <div className="project">
  //     {projects.map((content) => (
  //       <div className="project__card" onClick={handleOpen}>
  //         <ProjectCarousel
  //           className="project__card--mainpic"
  //           props1={content.image1}
  //           props2={content.image2}
  //           props3={content.image3}
  //         />
  //         <div className="project__card--title">{content.title}</div>
  //         {/* <Modal
  //           show={detail}
  //           onHide={handleClose}
  //           backdrop="static"
  //           keyboard={false}
  //         >
  //           <img
  //             className="project__card--modalpic"
  //             src={content.image2}
  //             alt={content.id}
  //           />
  //           <Modal.Body>{content.techstack}</Modal.Body>
  //         </Modal> */}
  //       </div>
  //     ))}
  //   </div>
  // );
};

export default Projects;

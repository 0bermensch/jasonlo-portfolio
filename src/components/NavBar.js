import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-scroll";
import myface from "../Assets/Jason_Lo_WD.jpg";

const Navigation = () => {
  return (
    <>
      <div className="navbar">
        <img className="navbar__myface" src={myface} alt="myface" />
        <div className="navbar__navs">
          <Link
            className="navbar__navs--item"
            activeClass="active"
            spy={true}
            smooth={true}
            to="intro"
          >
            Intro
          </Link>
          <Link
            className="navbar__navs--item"
            activeClass="active"
            spy={true}
            smooth={true}
            to="tech"
          >
            Tech
          </Link>
          <Link
            className="navbar__navs--item"
            activeClass="active"
            spy={true}
            smooth={true}
            to="projects"
          >
            Projects
          </Link>
          <Link
            className="navbar__navs--item"
            activeClass="active"
            spy={true}
            smooth={true}
            to="experience"
          >
            Experience
          </Link>
          <Link
            className="navbar__navs--item"
            activeClass="active"
            spy={true}
            smooth={true}
            to="contacts"
          >
            Contacts
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navigation;

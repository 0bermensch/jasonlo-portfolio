import React from "react";
import Typist from "react-typist";
import downarrow from "../Assets/intro/white-arrow-png-41942.png";
import mypic from "../Assets/intro/Jason_Lo_WD.jpg";
import { Link } from "react-scroll";

const Introduction = () => {
  return (
    <div className="intro" id="intro">
      <div className="intro__context">
        <div className="intro__context--title">
          <span style={{ color: "rgb(25, 121, 169)" }}>var</span>{" "}
          <span style={{ color: "rgb(105, 189, 210)" }}>name</span> =
        </div>
        <Typist className="intro__context--content" stdTypingDelay blink={true}>
          <b>'Jason Lo';</b>
        </Typist>

        <div className="intro__context--title">
          <span style={{ color: "rgb(25, 121, 169)" }}>var</span>{" "}
          <span style={{ color: "rgb(105, 189, 210)" }}>role</span> =
        </div>
        <Typist className="intro__context--content" stdTypingDelay blink={true}>
          <b>'Full-Stack Web and Mobile Developer';</b>
        </Typist>
      </div>
      <Link className="intro__toprojects">
        <div className="intro__toprojectscontainer">
          <div className="intro__toprojects--text">projects</div>
          <img
            className="intro__toprojects--arrow"
            src={downarrow}
            alt="downarrow"
          />
        </div>

        <img className="intro__toprojects--img" src={mypic} alt="mypic" />
      </Link>
      <img className="intro__img" src={mypic} alt="mypic" />
    </div>
  );
};

export default Introduction;

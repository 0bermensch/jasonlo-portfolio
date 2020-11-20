import React from "react";
import Typist from "react-typist";

const Introduction = () => {
  return (
    <div className="introduction" id="intro">
      <img className="introduction__pic" />
      <div className="introduction__divider">
        <h1 className="introduction__name">Hey, I am Jason Lo</h1>
        <Typist stdTypingDelay blink={true} className="introduction__role">
          Full-Stack Web and Mobile Developer
        </Typist>
      </div>
      <div className="introduction__divider2">
        <h2 className="introduction__mission">Mission</h2>
        <Typist avgTypingDelay className="introduction__missiontext">
          As a developer, it is my goal to help dreamers, entrepreneurs, and
          businesses to bring their ideas into reality on web/mobile platforms
          for the betterment of our society.
        </Typist>
      </div>
    </div>
  );
};

export default Introduction;

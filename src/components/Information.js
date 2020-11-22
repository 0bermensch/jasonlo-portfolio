import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Information = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div id="experience">
      <h1 className="infotitle">Experience</h1>
      <div data-aos="zoom-in-up" className="info">
        <div className="info__jobs">
          <h1 className="info__title">Employment</h1>
          <h2 className="info__entity">Krypto Direct Incorporated</h2>
          <p className="info__role">Front-End React Native Developer</p>
          <p className="info__date">April 2020 - Sept 2020</p>
          <h2 className="info__entity">ChinaChem Agencies LTD</h2>
          <p className="info__role">Summer Intern</p>
          <p className="info__date">June 2017 - Aug 2017</p>
        </div>
        <div className="info__education">
          <h1 className="info__title">Education</h1>
          <h2 className="info__entity">The University Of British Columbia</h2>
          <p className="info__role">Bachelors of Arts in Philosophy</p>
          <p className="info__date">May. 2020</p>

          <h2 className="info__entity">BrainStation</h2>
          <p className="info__role">Diploma in Web Development</p>
          <p className="info__date">March. 2020</p>
        </div>
        <div className="info__certification">
          <h1 className="info__title">Certifications</h1>
          <h2 className="info__entity">AWS - Certified Cloud Practitioner</h2>
          <p className="info__date">Nov. 2020</p>
        </div>
      </div>
    </div>
  );
};

export default Information;

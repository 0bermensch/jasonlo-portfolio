import React from "react";
import githublogo from "../Assets/icons/github-original.svg";
import linkedinlogo from "../Assets/icons/linkedin-original.svg";

const Contacts = () => {
  return (
    <div className="contact">
      <div>jason.lo.kc@gmail.com</div>
      <img className="contact__logo" src={githublogo} alt="githublogo" />
      <img className="contact__logo" src={linkedinlogo} alt="linkedinlogo" />
      <form>
        <input></input>
      </form>
    </div>
  );
};

export default Contacts;

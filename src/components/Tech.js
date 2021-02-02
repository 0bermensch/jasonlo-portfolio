import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import awslogo from "../Assets/icons/amazonwebservices-original.svg";
import reactlogo from "../Assets/icons/react-original.svg";
import reduxlogo from "../Assets/icons/redux-original.svg";
import reactnativelogo from "../Assets/icons/react-native-firebase-1.svg";
import nodejslogo from "../Assets/icons/nodejs-original.svg";
import expresslogo from "../Assets/icons/express.svg";
import javascriptlogo from "../Assets/icons/javascript-original.svg";
import typescriptlogo from "../Assets/icons/typescript-original.svg";
import sasslogo from "../Assets/icons/sass-original.svg";
import mysqllogo from "../Assets/icons/mysql-original.svg";
import graphqllogo from "../Assets/icons/graphql-icon.svg";
import mongodblogo from "../Assets/icons/mongodb-original.svg";
import postgresqllogo from "../Assets/icons/postgresql-original.svg";

import npmlogo from "../Assets/icons/npm-original-wordmark.svg";
import pic from "../Assets/pexels-negative-space-169573.jpg";
import githublogo from "../Assets/icons/github-11-128.png";

const Tech = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [frontend] = useState([
    { img: reactlogo, name: "React" },
    { img: reduxlogo, name: "Redux" },
    { img: reactnativelogo, name: "React Native" },
    { img: sasslogo, name: "Sass" },
  ]);
  const [backend] = useState([
    { img: nodejslogo, name: "Node.js" },
    { img: expresslogo, name: "Express.js" },
    { img: graphqllogo, name: "GraphQL" },
  ]);
  const [database] = useState([
    { img: mysqllogo, name: "MySQL" },
    { img: postgresqllogo, name: "PostgreSQL" },
    { img: mongodblogo, name: "MongoDB" },
  ]);
  const [other] = useState([
    { img: javascriptlogo, name: "Javascript" },
    { img: typescriptlogo, name: "Typescript" },
    { img: awslogo, name: "AWS" },
    { img: githublogo, name: "Github" },
    { img: npmlogo, name: "NPM" },
  ]);

  return (
    <div className="techcontainer" id="tech">
      <div className="techtitle">Tech</div>
      <div className="tech">
        <img className="tech__pic" src={pic} alt="pic" />

        <div data-aos="fade-up" className="tech__content">
          <div className="tech__frontend">
            <h2 className="tech__title">Front-End</h2>
            <div className="tech__info">
              {frontend.map((content) => {
                return (
                  <div className="tech__logo">
                    <img
                      className="tech__logo--logo"
                      src={content.img}
                      alt={content.img}
                    />
                    <div className="tech__logo--name">{content.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="tech__backend">
            <h2 className="tech__title">Back-End</h2>
            <div className="tech__info">
              {backend.map((content) => {
                return (
                  <div className="tech__logo">
                    <img
                      className="tech__logo--logo"
                      src={content.img}
                      alt={content.img}
                    />
                    <div className="tech__logo--name">{content.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="tech__database">
            <h2 className="tech__title">Database</h2>
            <div className="tech__info">
              {database.map((content) => {
                return (
                  <div className="tech__logo">
                    <img
                      className="tech__logo--logo"
                      src={content.img}
                      alt={content.img}
                    />
                    <div className="tech__logo--name">{content.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="tech__others">
            <h2 className="tech__title">Other</h2>
            <div className="tech__info">
              {other.map((content) => {
                return (
                  <div className="tech__logo">
                    <img
                      className="tech__logo--logo"
                      src={content.img}
                      alt={content.img}
                    />
                    <div className="tech__logo--name">{content.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;

import React from "react";
import Image from "next/image";
import { Badge, Col, Divider, Row } from "antd";

import { AUTHOR_SKILLS } from "constants/author";

const About = () => {
  return (
    <div className="about-container">
      <Row className="about-container__contain">
        <Col className="about-image">
          <div className="first-card" />
          <div className="second-card">
            <Image alt="/" src="" />
          </div>
        </Col>
        <Col className="about-description">
          <Divider
            orientation="left"
            plain
            orientationMargin="0"
            className="title"
          >
            About
          </Divider>

          <span className="author-name">Manh Hung</span>

          <span className="desciption">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
            quisque leo dictum quis turpis. Felis eget porta sem leo ornare nunc
            lacus.
          </span>

          <Divider
            orientation="left"
            plain
            orientationMargin="0"
            className="skills"
          >
            Skills
          </Divider>

          <div className="author-skills">
            {AUTHOR_SKILLS.map((skill: string, idx: number) => (
              <Badge
                key={idx}
                status="success"
                size="default"
                title="that is my skill"
                text={skill}
                className="skill"
              />
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default About;

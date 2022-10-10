import React from "react";
import Image from "next/image";
import { Badge, Col, Divider, Row } from "antd";

import { AUTHOR_HEADER_TITLE, AUTHOR_SKILLS } from "constants/author";
import {
  AUTHOR_NAME,
  AUTHOR_DESCRIPTION_OBJECTIVES,
} from "constants/author_text";

const { ABOUT, SKILLS } = AUTHOR_HEADER_TITLE;

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
          <Divider orientation="left" orientationMargin="0" className="title">
            {ABOUT}
          </Divider>

          <span className="author-name">{AUTHOR_NAME}</span>
          <span className="desciption">{AUTHOR_DESCRIPTION_OBJECTIVES}</span>

          <Divider orientation="left" orientationMargin="0" className="skills">
            {SKILLS}
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

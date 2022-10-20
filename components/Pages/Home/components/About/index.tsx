import React from "react";
import Image from "next/image";
import { Badge, Col, Divider, Row, Tooltip } from "antd";

import { AUTHOR_HEADER_TITLE, AUTHOR_SKILLS, AUTHOR_TECH } from "constants/author";
import { AUTHOR_NAME, AUTHOR_DESCRIPTION_OBJECTIVES } from "constants/author_text";

const { ABOUT, SKILLS } = AUTHOR_HEADER_TITLE;

const About = () => {
  const listSkills = [
    {
      title: SKILLS,
      list: AUTHOR_SKILLS,
    },
    {
      title: "Library, Framework, Tools...",
      list: AUTHOR_TECH,
    },
  ];

  const renderListSkill = () => {
    return listSkills.map((list: any, index: number) => (
      <div key={index}>
        <Divider orientation="left" orientationMargin="0" className="skills">
          {list?.title}
        </Divider>

        <div className="author-skills">
          {list?.list.map((skill: any, idx: number) => (
            <Tooltip placement="topLeft" title={skill?.name} key={idx}>
              <Image src={skill?.icon} alt={skill?.name} width={45} height={45} />
            </Tooltip>
          ))}
        </div>
      </div>
    ));
  };

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

          <div className="list-skill-container">{renderListSkill()}</div>
        </Col>
      </Row>
    </div>
  );
};

export default About;

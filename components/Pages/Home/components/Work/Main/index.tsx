import React, { useEffect, useState } from "react";
import Image from "next/future/image";
import { Tooltip } from "antd";
import { Grid, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import DefaultImage from "public/image/dark_image.jpg";

import Modal from "@components//Modal";
import ModalContentCustom from "@components//Modal/ModalContentCustom";

import { PROJECT_PROPERTIES, USER_TABS } from "constants/author";
import { AUTHOR_PROJECTS_MAIN } from "constants/author_projects";

const { ALL } = USER_TABS;
const { IMAGE, TYPE, TITLE, STATUS, POSITION, DATE, TECHNIQUE, CONTENT } = PROJECT_PROPERTIES;

const Main = () => {
  const [visible, setVisible] = useState(false);
  const [projectData, setProjectData] = useState({});

  const handleSetVisible = () => setVisible(true);

  const handleCloseModal = () => setVisible(false);

  const handleOpenProject = (project: object) => () => {
    setProjectData(project);
    handleSetVisible();
  };

  return (
    <div className="main-tab">
      <Swiper
        grid={{ rows: 2, fill: "row" }}
        spaceBetween={32}
        modules={[Grid, Pagination]}
        slidesPerView={4}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {AUTHOR_PROJECTS_MAIN.map((project, index: number) => (
          <SwiperSlide className="project-container" key={index}>
            <Tooltip placement="top" title={project.title} overlayClassName="tooltip-container">
              <Image
                alt={project?.[TITLE]}
                src={project?.image ? project?.image : DefaultImage}
                onClick={handleOpenProject(project)}
                className="project-image"
              />
            </Tooltip>
          </SwiperSlide>
        ))}
      </Swiper>

      <Modal visible={visible} width={650} onClose={handleCloseModal} showCloseIcon maskClosable centered>
        <ModalContentCustom
          date={projectData?.[DATE]}
          title={projectData?.[TITLE]}
          status={projectData?.[STATUS]}
          tech={projectData?.[TECHNIQUE]}
          content={projectData?.[CONTENT]}
          position={projectData?.[POSITION]}
          breadcrumbs={[ALL, projectData?.[TYPE]]}
        />
      </Modal>
    </div>
  );
};

export default Main;

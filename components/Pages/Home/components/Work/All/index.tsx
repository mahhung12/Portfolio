import React, { useEffect, useState } from "react";
import Image from "next/future/image";
import { Grid, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import DefaultImage from "public/image/dark_image.jpg";

import Modal from "@components//Modal";
import ModalContentCustom from "@components//Modal/ModalContentCustom";

import { AUTHOR_PROJECTS } from "constants/author_projects";
import { PROJECT_PROPERTIES, USER_TABS } from "constants/author";

const { ALL } = USER_TABS;
const { IMAGE, TYPE, TITLE, STATUS, POSITION, DATE, TECHNIQUE, CONTENT } = PROJECT_PROPERTIES;

const All = () => {
  const [visible, setVisible] = useState(false);
  const [projectData, setProjectData] = useState({});

  const handleSetVisible = () => setVisible(true);

  const handleCloseModal = () => setVisible(false);

  const handleOpenProject = (project: object) => () => {
    setProjectData(project);

    console.log("projectData :>> ", projectData);

    handleSetVisible();
  };

  return (
    <div className="all-tab">
      <Swiper
        grid={{ rows: 2, fill: "row" }}
        spaceBetween={32}
        modules={[Grid, Pagination]}
        slidesPerView={4}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {AUTHOR_PROJECTS.map((project, index: number) => (
          <SwiperSlide className="project-container" key={index}>
            <Image
              alt={project?.[TITLE]}
              src={project?.image ? project?.image : DefaultImage}
              onClick={handleOpenProject(project)}
              className="project-image"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Modal visible={visible} width={700} onClose={handleCloseModal} showCloseIcon maskClosable centered>
        <ModalContentCustom
          image={projectData?.[IMAGE]}
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

export default All;

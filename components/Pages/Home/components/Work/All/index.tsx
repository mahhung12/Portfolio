import React, { useEffect, useState } from 'react';
import Image from 'next/future/image';
import { Carousel, Row } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper';

import DefaultImage from 'public/image/dark_image.jpg';

import Modal from '@components//Modal';
import ModalContentCustom from '@components//Modal/ModalContentCustom';

import { AUTHOR_PROJECTS } from 'constants/author_projects';
import { PROJECT_PROPERTIES, USER_TABS } from 'constants/author';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

const { ALL } = USER_TABS;
const { TYPE, TITLE, STATUS, POSITION, DATE, TECHNIQUE, CONTENT } = PROJECT_PROPERTIES;

const All = () => {
  const [visible, setVisible] = useState(false);
  const [projectData, setProjectData] = useState({});

  const handleSetVisible = () => setVisible(true);

  const handleCloseModal = () => setVisible(false);

  const handleOpenProject = (project: object) => () => {
    setProjectData(project);
    handleSetVisible();
  };

  return (
    <div className='all-tab'>
      <>
        <Swiper
          slidesPerView={3}
          grid={{
            rows: 2,
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination]}
          className='mySwiper'
        >
          {AUTHOR_PROJECTS.map((project, index: number) => (
            <div className='project-container' key={index}>
              <Image
                alt={project?.[TITLE]}
                src={project?.THUMBNAIL_IMAGE ? project?.THUMBNAIL_IMAGE : DefaultImage}
                onClick={handleOpenProject(project)}
                className='project-image'
              />
            </div>
          ))}
        </Swiper>
      </>

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

export default All;

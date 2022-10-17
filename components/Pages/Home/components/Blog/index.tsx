import React from 'react';
import { Divider, Row } from 'antd';
import { Grid, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { AUTHOR_HEADER_TITLE } from 'constants/author';
import { AUTHOR_BLOG } from 'constants/author_blog';

const { BLOG } = AUTHOR_HEADER_TITLE;

const Blog = () => {
  return (
    <div className='blog-container'>
      <Row className='blog-contain'>
        <Divider orientation='left' orientationMargin='0' className='blog-title'>
          {BLOG}
        </Divider>

        <Swiper
          grid={{ rows: 1, fill: 'row' }}
          spaceBetween={32}
          modules={[Grid, Pagination]}
          slidesPerView={3}
          pagination={{ clickable: true }}
          className='mySwiper'
        >
          {AUTHOR_BLOG.map((blog, index: number) => (
            <SwiperSlide className='blog-wrapper' key={index}>
              <h1 className='title'>{blog.title}</h1>
              <span className='description'>{blog.description}</span>
            </SwiperSlide>
          ))}
        </Swiper>
      </Row>
    </div>
  );
};

export default Blog;

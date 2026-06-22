import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/a11y';
import ProjectCard from './ProjectCard';
import { projects } from './../data/projects';

const ProjectList = () => {
  return (
    <div className={``}>
      <Swiper
        modules={[Navigation, A11y]}
        autoHeight={true}
        breakpoints={{
          576: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
        }}
        navigation={{
          prevEl: '.swiper-nav-prev',
          nextEl: '.swiper-nav-next'
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={project.id}>
            <ProjectCard
              projectTitle={project.projectTitle}
              projectLink={project.projectLink}
              projectBadges={project.projectBadges}
              projectText={project.projectText}
              projectIndex={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectList;

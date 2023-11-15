import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/a11y';
import { github } from '../data/github';
import GithubProjectCard from './GithubProjectCard';
import fetchRepositories from '../api/fetch-repositories';

const GithubProjectList = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetchRepositories().then(setRepositories);
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className={``}>
      <Swiper
        modules={[Navigation, A11y]}
        autoHeight={true}
        spaceBetween={0}
        slidesPerView={'auto'}
        navigation={{
          prevEl: '.github-nav-prev',
          nextEl: '.github-nav-next'
        }}
      >
        <SwiperSlide className="w-auto h-100">
          <GithubProjectCard
            projectTitle={github[0].projectTitle}
            projectLink={github[0].projectLink}
            projectBadges={github[0].projectBadges}
            projectText={github[0].projectText} />
        </SwiperSlide>
        <SwiperSlide className="w-auto h-100">
          <GithubProjectCard
            projectTitle={github[1].projectTitle}
            projectLink={github[1].projectLink}
            projectBadges={github[1].projectBadges}
            projectText={github[1].projectText} />
        </SwiperSlide>
        <SwiperSlide className="w-auto h-100">
          <GithubProjectCard
            projectTitle={github[2].projectTitle}
            projectLink={github[2].projectLink}
            projectBadges={github[2].projectBadges}
            projectText={github[2].projectText} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default GithubProjectList;

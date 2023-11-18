import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/a11y';
import GithubProjectCard from './GithubProjectCard';
import fetchRepositories from '../api/fetch-repositories';

const GithubProjectList = () => {
  const [repositories, setRepositories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchRepositories().then(repos => {
      setRepositories(repos);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
        {repositories.map(repo => (
          <SwiperSlide className="w-auto h-100" key={repo.id}>
            <GithubProjectCard
              projectTitle={repo.name}
              projectLink={repo.html_url}
              projectBadges={repo.topics}
              projectText={repo.description} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GithubProjectList;

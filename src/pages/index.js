import * as React from "react";
import "./../styles/global.scss";
import { projects } from '../data/projects';
import { github } from '../data/github';
import { Link } from 'gatsby';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import GithubProjectCard from '../components/GithubProjectCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Header />
        <main>
          <section className="container hero">
            <div className="grid py-5">
              <div className="g-col-7">
                <h1 className="display-5 mb-4">
                  <span className="fs-4 d-block mb-2">&#128075; Hello, I'm Stephanie</span>
                  <span>I design and build impactful digital solutions</span>
                </h1>
                <p className="lead mb-0">Proven ability to lead multidisciplinary teams, manage key stakeholder relationships, and deliver products that enhance user satisfaction and business objectives.</p>
                <a className="btn btn-link px-0" href="https://www.linkedin.com/in/steph-shields/" target="_blank">Get in Touch</a>
              </div>
            </div>
          </section>
          <section className="container mt-5">
            <h2 className="mb-4">&#10024; Public Work</h2>
            <div className="mb-5">
              <Swiper
                modules={[Navigation, A11y]}
                autoHeight={true}
                spaceBetween={0}
                slidesPerView={3}
                navigation={{
                  prevEl: '.swiper-nav-prev',
                  nextEl: '.swiper-nav-next'
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <ProjectCard
                    projectTitle={projects[0].projectTitle}
                    projectLink={projects[0].projectLink}
                    projectBadges={projects[0].projectBadges}
                    projectText={projects[0].projectText} />
                </SwiperSlide>
                <SwiperSlide>
                  <ProjectCard
                    projectTitle={projects[1].projectTitle}
                    projectLink={projects[1].projectLink}
                    projectBadges={projects[1].projectBadges}
                    projectText={projects[1].projectText} />
                </SwiperSlide>
                <SwiperSlide>
                  <ProjectCard
                    projectTitle={projects[2].projectTitle}
                    projectLink={projects[2].projectLink}
                    projectBadges={projects[2].projectBadges}
                    projectText={projects[2].projectText} />
                </SwiperSlide>
                <SwiperSlide>
                  <ProjectCard
                    projectTitle={projects[3].projectTitle}
                    projectLink={projects[3].projectLink}
                    projectBadges={projects[3].projectBadges}
                    projectText={projects[3].projectText} />
                </SwiperSlide>
                <SwiperSlide>
                  <ProjectCard
                    projectTitle={projects[4].projectTitle}
                    projectLink={projects[4].projectLink}
                    projectBadges={projects[4].projectBadges}
                    projectText={projects[4].projectText} />
                </SwiperSlide>
              </Swiper>
              <button className="btn btn-outline-primary me-2 swiper-nav-prev">
                Previous
              </button>
              <button className="btn btn-primary swiper-nav-next">
                Next
              </button>
            </div>
          </section>
          <section className="container my-5">
            <div className="grid">
              <div className="g-col-6">
                <div className="border bg-white rounded-5 p-4">
                  <div className="px-2 py-3">
                    <h2>&#128293; Capabilities</h2>
                    <p>Collaborating across disciplines to ensure a cohesive product experience that truly addresses user needs.</p>
                  </div>
                </div>
              </div>
              <div className="g-col-6">
                <div className="border bg-white rounded-5 py-5 px-4">
                  <h2>&#128170; Design Process</h2>
                  <p>The foundation of a successful product is built on a diverse blend of methods and technologies.</p>
                </div>
              </div>
            </div>
          </section>
          <section className="container my-5">
            <div className="grid">
              <div className="g-col-4">
                <h2 className="">&#128640; GitHub</h2>
                <p className="mb-4">Dive into my GitHub to discover a showcase of my design and development expertise.</p>
                <div className="d-flex mb-3">
                  <button className="btn btn-outline-primary me-2 github-nav-prev">
                    Previous
                  </button>
                  <button className="btn btn-primary github-nav-next">
                    Next
                  </button>
                </div>
                <a className="btn btn-link px-0" href="https://github.com/stephanie-shields" target="_blank" role="button">Visit My GitHub</a>
              </div>
              <div className="g-col-8">
                <Swiper
                  modules={[Navigation, A11y]}
                  autoHeight={true}
                  spaceBetween={0}
                  slidesPerView={2}
                  navigation={{
                    prevEl: '.github-nav-prev',
                    nextEl: '.github-nav-next'
                  }}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide>
                    <GithubProjectCard
                      projectTitle={github[0].projectTitle}
                      projectLink={github[0].projectLink}
                      projectBadges={github[0].projectBadges}
                      projectText={github[0].projectText} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <GithubProjectCard
                      projectTitle={github[1].projectTitle}
                      projectLink={github[1].projectLink}
                      projectBadges={github[1].projectBadges}
                      projectText={github[1].projectText} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <GithubProjectCard
                      projectTitle={github[2].projectTitle}
                      projectLink={github[2].projectLink}
                      projectBadges={github[2].projectBadges}
                      projectText={github[2].projectText} />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </section>
          <section className="container my-5">
            <div className="grid">
              <div className="g-col-4">
                <h2 className="">&#9996; Tech Stack</h2>
                <p>Explore my favorite technology picks and frameworks.</p>
              </div>
            </div>
          </section>
        </main>
        <footer>
          <div className="container">
            <p className="text-center mb-5">&copy; 2023 Stephanie Shields | Senior Lead UX Engineer</p>
          </div>
        </footer>
      </>
    );
  }
}

export default IndexPage;

import * as React from "react";
import "./../styles/global.scss";
import { projects } from '../data/projects';
import { Link } from 'gatsby';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

// markup
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
            <div className="grid bg-primary py-5 rounded-4">
              <div className="g-col-10 g-start-2 text-center">
                <h1 className="h2 text-uppercase">Hello, I'm Stephanie</h1>
                <p className="display-5 mb-0">I design and build impactful digital experiences and work hard to ensure lasting product success</p>
              </div>
            </div>
          </section>
          <section className="container">
            <h2 className="text-center mt-5 mb-4">Explore My Work</h2>
            <div className="grid mb-5">
              <div className="g-col-10 g-start-2">
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
                  <SwiperSlide className="align-self-stretch d-flex">
                    <ProjectCard
                      projectTitle={projects[0].projectTitle}
                      projectLink={projects[0].projectLink}
                      projectBadges={projects[0].projectBadges} />
                  </SwiperSlide>
                  <SwiperSlide className="align-self-stretch d-flex">
                    <ProjectCard
                      projectTitle={projects[1].projectTitle}
                      projectLink={projects[1].projectLink}
                      projectBadges={projects[1].projectBadges} />
                  </SwiperSlide>
                  <SwiperSlide className="align-self-stretch d-flex">
                    <ProjectCard
                      projectTitle={projects[2].projectTitle}
                      projectLink={projects[2].projectLink}
                      projectBadges={projects[2].projectBadges} />
                  </SwiperSlide>
                  <SwiperSlide className="align-self-stretch d-flex">
                    <ProjectCard
                      projectTitle={projects[3].projectTitle}
                      projectLink={projects[3].projectLink}
                      projectBadges={projects[3].projectBadges} />
                  </SwiperSlide>
                  <SwiperSlide className="align-self-stretch d-flex">
                    <ProjectCard
                      projectTitle={projects[4].projectTitle}
                      projectLink={projects[4].projectLink}
                      projectBadges={projects[4].projectBadges} />
                  </SwiperSlide>
                </Swiper>
                <button className="btn btn-outline-primary me-2 swiper-nav-prev">
                  Previous
                </button>
                <button className="btn btn-primary swiper-nav-next">
                  Next
                </button>
              </div>
            </div>
          </section>
          <section className="container">
            <div className="grid mb-5">
              <div className="g-col-10 g-start-2">
                <div className="grid">
                  <div className="g-col-4">
                    <h2 className="">My GitHub</h2>
                    <p className="mb-4">Explore my personal projects on GitHub for a look into my process, code examples, and inspiration.</p>
                    <a className="btn btn-primary" href="https://github.com/stephanie-shields" target="_blank" role="button">Visit My GitHub</a>
                  </div>
                  <div className="g-col-8">
                    <div className="grid">
                      <div className="g-col-6">
                        <div className="card text-bg-primary">
                          {/* <img src="..." className="card-img" alt="..." /> */}
                          <div className="card-body">
                            <h3 className="card-title visually-hidden">Foodsales App Design</h3>
                            <div className="d-grid">
                              <Link className="btn btn-outline-light" to="https://github.com/stephanie-shields/foodsales-app-design">View on GitHub</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="g-col-6">
                        <div className="card text-bg-primary">
                          {/* <img src="..." className="card-img" alt="..." /> */}
                          <div className="card-body">
                            <h3 className="card-title visually-hidden">Stephanie Shields Portfolio</h3>
                            <div className="d-grid">
                              <Link className="btn btn-outline-light" to="https://github.com/stephanie-shields/stephanie-shields-portfolio">View on GitHub</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer>
          <div className="container">
            <p className="text-center mb-5">&copy; 2022 Stephanie Shields | UX Designer and Engineer</p>
          </div>
        </footer>
      </>
    );
  }
}

export default IndexPage;

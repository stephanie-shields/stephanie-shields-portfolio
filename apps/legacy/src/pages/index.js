import * as React from "react";
import SVG from 'react-inlinesvg';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Seo } from "../components/Seo";
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectList from '../components/ProjectList';
import ProcessGraphic from '../components/ProcessGraphic';
import GithubProjectList from '../components/GithubProjectList';
import TechStackList from '../components/TechStackList';
import capabilitiesGraphic from '../images/capabilities-graphic.svg';
import * as indexStyles from './index.module.scss';

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const IndexPage = () => {
  return (
    <>
      <Header />   
      <main className="position-relative overflow-hidden">
        <div className={`${indexStyles.stripesContainer} z-n1 d-none d-xl-block`}>
          <div className={`${indexStyles.stripes}`}>
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
        <section className="container">
          <div className="grid py-5">
            <div className="g-col-12 g-col-xl-6">
              <h1 className="display-5 mb-4">
                <span className={`fs-4 d-block mb-3 text-body fw-light ${indexStyles.heroGreeting}`}>&#128075; Hello, I'm Stephanie</span>
                <mark className={`${indexStyles.heroHighlight}`}>I design and build impactful digital solutions</mark>
              </h1>
              <p className="lead mb-0">Proven ability to lead multidisciplinary teams, manage key stakeholder relationships, and deliver products that enhance user satisfaction and business objectives.</p>
              <div className="d-flex mt-4">
                <Link to="/work" className="btn btn-gradient btn-lg me-3">See My Work</Link>
                <a className="btn btn-lg text-primary px-0" href="https://www.linkedin.com/in/steph-shields/" target="_blank" rel="noreferrer">
                  <span>Get in Touch</span>
                  <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                </a>
              </div>
            </div>
            <div className="g-col-12 g-col-xl-6">
              <div className="d-none d-xl-flex w-100 justify-content-center pt-5">
                <div className={`${indexStyles.heroImage}`}>
                  <div className={`${indexStyles.polygonShapeTop}`}>
                    <svg width="154" height="145" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.618 56.806 77 4.944l71.382 51.862-27.265 83.915H32.883L5.618 56.806Z" stroke="#fff" strokeOpacity=".5" strokeWidth="8"/></svg>
                  </div>
                  <div className={`${indexStyles.polygonShapeBottom}`}>
                    <svg width="154" height="145" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.618 56.806 77 4.944l71.382 51.862-27.265 83.915H32.883L5.618 56.806Z" stroke="#fff" strokeOpacity=".5" strokeWidth="8"/></svg>
                  </div>
                  <StaticImage src="../images/self-picture.png" />
                  <div className={`${indexStyles.heroIcon} bg-white border rounded-circle d-flex justify-content-center align-items-center fs-2 shadow`}>
                    <span>&#128155;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="mb-0">&#10024; Public Work</h2>
            <div className={`${indexStyles.projectNavigation} ms-3`}>
              <button className="btn btn-outline-dark me-2 swiper-nav-prev rounded-circle">
                <span className="visually-hidden">Previous</span>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button className="btn btn-dark swiper-nav-next rounded-circle">
                <span className="visually-hidden">Next</span>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
          <div className="mb-5">
            <ProjectList />
            <Link to="/work" className="btn btn-outline-dark border-2">View All Work</Link>
          </div>
        </section>
        <section className={`${indexStyles.gradientContainer} py-5`}>
          <div className="container my-4">
            <div className="grid">
              <div className="g-col-12 g-col-lg-6 pe-lg-1">
                <div className="bg-white rounded-4 p-4 h-100 shadow-lg position-relative overflow-hidden">
                  <div className={`${indexStyles.capabilitiesGraphic}`}>
                    <SVG src={capabilitiesGraphic} title="Capabilities Graphic" />
                  </div>
                  <div className="grid px-3 py-4 position-relative">
                    <div className="g-col-12 g-col-xl-8">
                      <h2 className="mb-3">&#128293; Capabilities</h2>
                      <p className="mb-4">Collaborating across disciplines to ensure a cohesive product experience that truly addresses user needs.</p>
                      <Link to="/capabilities" className="btn btn-gradient">Learn More</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="g-col-12 g-col-lg-6 ps-lg-1">
                <div className="bg-white rounded-4 p-4 h-100 shadow-lg position-relative overflow-hidden">
                  <ProcessGraphic />
                  <div className="grid px-3 py-4 position-relative">
                    <div className="g-col-12 g-col-xl-8">
                      <h2 className="mb-3">&#128170; Design Process</h2>
                      <p className="mb-4">The foundation of a successful product is built on a diverse blend of methods and technologies.</p>
                      <Link to="/process" className="btn btn-gradient">Learn More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container my-5 py-5">
          <div className="grid">
            <div className="g-col-12 g-col-lg-4">
              <h2 className="mb-3">&#128640; GitHub</h2>
              <p className="mb-4 pe-5">Dive into my GitHub to discover a showcase of my design and development expertise.</p>
              <div className="d-flex mb-3">
                <button className="btn btn-gradient me-2 github-nav-prev rounded-circle">
                  <span className="visually-hidden">Previous</span>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button className="btn btn-gradient github-nav-next rounded-circle">
                  <span className="visually-hidden">Next</span>
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
              <a className="btn text-primary px-0" href="https://github.com/stephanie-shields" target="_blank" rel="noreferrer" role="button">
                <span>Visit My GitHub</span>
                <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
              </a>
            </div>
            <div className="g-col-12 g-col-lg-8">
              <GithubProjectList />
            </div>
          </div>
        </section>
        <section className="position-relative">
          <div className="container my-5">
            <div className="grid">
              <div className="g-col-4">
                <h2 className="">&#9996;&#65039; Tech Stack</h2>
                <p>Explore my favorite technology picks and frameworks.</p>
                <Link to="/tech-stack" className="btn btn-primary">Learn More</Link>
              </div>
            </div>
          </div>
          <TechStackList techLogoOnly />
        </section>
      </main>
      <Footer />
    </>
  );
}

export const Head = () => <Seo />

export default IndexPage;

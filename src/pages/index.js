import * as React from "react";
import "./../styles/global.scss";
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';


// markup
const IndexPage = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="grid py-2">
            <div className="g-col-6">
              <div className="logo">
                <div className="logomark"></div>
                <div className="logotype">Stephanie Shields</div>
                <div className="tagline text-lowercase">UX Designer and Engineer</div>
              </div>
            </div>
            <div className="g-col-6">
              <ul className="list-inline d-flex justify-content-end">
                <li className="list-inline-item">
                  <a href="https://www.linkedin.com/in/steph-shields/" target="_blank">LinkedIn</a>
                </li>
                <li className="list-inline-item">
                  <a href="https://github.com/stephanie-shields" target="_blank">GitHub</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="container hero">
          <div className="grid bg-primary py-5">
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
              <div className="grid">
                <div className="g-col-7">
                  <ProjectCard
                    projectTitle={projects[0].projectTitle}
                    projectLink={projects[0].projectLink}
                    projectBadges={projects[0].projectBadges} />
                </div>
                <div className="g-col-5">
                  <ProjectCard
                    projectTitle={projects[1].projectTitle}
                    projectLink={projects[1].projectLink}
                    projectBadges={projects[1].projectBadges} />
                </div>
                <div className="g-col-12">
                  <ProjectCard
                    projectTitle={projects[2].projectTitle}
                    projectLink={projects[2].projectLink}
                    projectBadges={projects[2].projectBadges} />
                </div>
                <div className="g-col-6">
                  <ProjectCard
                    projectTitle={projects[3].projectTitle}
                    projectLink={projects[3].projectLink}
                    projectBadges={projects[3].projectBadges} />
                </div>
                <div className="g-col-6">
                  <ProjectCard
                    projectTitle={projects[4].projectTitle}
                    projectLink={projects[4].projectLink}
                    projectBadges={projects[4].projectBadges} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="grid mb-5">
            <div className="g-col-10 g-start-2">
              <div className="grid">
                <div className="g-col-5">
                  <h2 className="">Checkout My GitHub</h2>
                  <p className="mb-4">Explore my personal projects on GitHub for a look into my process, code examples, and inspiration.</p>
                  <a class="btn btn-primary" href="https://github.com/stephanie-shields" target="_blank" role="button">Visit My GitHub</a>
                </div>
                <div className="g-col-7">
                  {/* Image or graphic goes here */}
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
  )
}

export default IndexPage

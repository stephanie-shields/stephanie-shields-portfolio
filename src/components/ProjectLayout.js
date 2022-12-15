import * as React from 'react';
import { Link } from 'gatsby';
import Header from '../components/Header';
import BadgeGroup from './BadgeGroup';

const ProjectLayout = ({ pageTitle, nextProject, previousProject, children, badges }) => {
  return (
    <>
      <Header />
      <main>
        <div className="container mt-5">
          <div className="grid mb-5">
            <div className="g-col-10 g-start-2">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">{pageTitle}</li>
                </ol>
              </nav>
              <h1>{pageTitle}</h1>
              <BadgeGroup badges={badges} />
              {children}
            </div>
          </div>
          <div className="grid">
            <div className="g-col-5 g-start-2">
              <div className="d-grid">
                <Link className="btn btn-outline-primary btn-lg" to={previousProject}>Previous Project</Link>
              </div>
            </div>
            <div className="g-col-5">
              <div className="d-grid">
                <Link className="btn btn-primary btn-lg" to={nextProject}>Next Project</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default ProjectLayout;
import * as React from 'react';
import { Link } from 'gatsby';
import BadgeGroup from './BadgeGroup';

const ProjectCard = ({ projectImage, projectImageAlt, projectTitle, projectText, projectLink, projectBadges }) => {
  return (
    <div className="card mb-3">
      {projectImage && 
        <img src={projectImage} className="card-img-top" alt={projectImageAlt} />
      }
      <div className="card-body">
        <h3 className="h5 card-title">{projectTitle}</h3>
        {projectText && 
          <>
            <p className="card-text">{projectText}</p>
          </>
        }
        <BadgeGroup badges={projectBadges} />
        </div>
        <div className="card-footer d-grid">
          <Link className="btn btn-outline-primary" to={projectLink}>Explore</Link>
      </div>
    </div>
  )
}

export default ProjectCard;

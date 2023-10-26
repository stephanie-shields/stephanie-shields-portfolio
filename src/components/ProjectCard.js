import * as React from 'react';
import { Link } from 'gatsby';
import BadgeGroup from './BadgeGroup';

const ProjectCard = ({ projectImage, projectImageAlt, projectTitle, projectText, projectLink, projectBadges }) => {
  return (
    <Link className="card border-0 mb-3 position-relative" to={projectLink}>
      {projectImage && 
        <img src={projectImage} className="card-img-top" alt={projectImageAlt} />
      }
      {!projectImage && 
        <div className="card-img-top bg-light p-3 rounded-3 text-center">
          <p className="my-5">Image coming soon</p>
        </div>
      }
      <div className="position-absolute">
        <div className="m-2">
          <BadgeGroup badges={projectBadges} />
        </div>
      </div>
      <div className="card-body px-0 pt-3">
        <h3 className="card-title visually-hidden">{projectTitle}</h3>
        {projectText && 
          <>
            <p className="card-text">{projectText}</p>
          </>
        }
      </div>
    </Link>
  )
}

export default ProjectCard;

import * as React from 'react';
import { Link } from 'gatsby';
import BadgeGroup from './BadgeGroup';
import * as projectCardStyles from './ProjectCard.module.css';

const ProjectCard = ({ projectImage, projectImageAlt, projectTitle, projectText, projectLink, projectBadges, projectIndex }) => {
  return (
    <Link className={`${projectCardStyles[`projectCard${projectIndex}`]} ${projectCardStyles.projectCard} card border-0 mb-3`} to={projectLink}>
      <div className={`${projectCardStyles.projectCardTop} position-relative rounded-3`}>
        <div className="card-img-top p-3 text-center rounded-3">
          {projectImage && 
            <img src={projectImage} className="card-img-top" alt={projectImageAlt} />
          }
          {!projectImage && 
            <p className="mb-0">Image coming soon</p>
          }
        </div>
        <div className="position-absolute top-0 start-0">
          <div className="m-2">
            <BadgeGroup badges={projectBadges} />
          </div>
        </div>
      </div>
      <div className="card-body bg-white px-0 pt-3">
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

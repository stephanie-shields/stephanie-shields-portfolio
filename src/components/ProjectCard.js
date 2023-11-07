import * as React from 'react';
import { Link } from 'gatsby';
import BadgeGroup from './BadgeGroup';
import * as projectCardStyles from './ProjectCard.module.css';

const ProjectCard = ({ projectImage, projectImageAlt, projectTitle, projectText, projectLink, projectBadges, projectIndex }) => {
  return (
    <Link className={`${projectCardStyles[`projectCard${projectIndex}`]} card border-0 mb-3 position-relative`} to={projectLink}>
      <div className={`${projectCardStyles.projectCardTop} card-img-top p-3 rounded-3 text-center`}>
        {projectImage && 
          <img src={projectImage} className="card-img-top" alt={projectImageAlt} />
        }
        {!projectImage && 
          <p className="my-5">Image coming soon</p>
        }
      </div>
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

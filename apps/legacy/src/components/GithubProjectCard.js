import * as React from 'react';
import BadgeGroup from './BadgeGroup';
import * as githubProjectCardStyles from './GithubProjectCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const GithubProjectCard = ({ projectTitle, projectLink, projectBadges }) => {
  return (
    <div className={`${githubProjectCardStyles.githubCard} card p-3 mb-3 mx-3 rounded-4 h-100 overflow-hidden`} style={{width: "300px"}}>
      <div className={`${githubProjectCardStyles.githubCardTransform}`}>
        <div className="card-img-top p-3 rounded-3">
        </div>
        <div className="card-body">
          <h3 className="card-title fs-5">{projectTitle}</h3>
          <BadgeGroup badges={projectBadges} badgeBackround={`text-body bg-info-subtle border-0`} />
          <div className={`${githubProjectCardStyles.projectCardCta} d-flex mt-2`}>
            <a className="btn px-0 stretched-link" href={projectLink} target="_blank" rel="noreferrer">
              <div className={`${githubProjectCardStyles.githubCardHighlight} position-relative d-inline`}>
                <span className="position-relative">View Repository</span>
              </div>
              <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GithubProjectCard;

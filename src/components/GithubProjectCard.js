import * as React from 'react';
import BadgeGroup from './BadgeGroup';

const GithubProjectCard = ({ projectTitle, projectLink, projectBadges }) => {
  return (
    <a className="card p-3 mb-3 mx-3 rounded-4" href={projectLink} target="_blank" role="button">
      <div className="card-body">
        <h3 className="card-title fs-5">{projectTitle}</h3>
        <BadgeGroup badges={projectBadges} badgeBackround={`text-body bg-info-subtle border-0`} />
      </div>
    </a>
  )
}

export default GithubProjectCard;

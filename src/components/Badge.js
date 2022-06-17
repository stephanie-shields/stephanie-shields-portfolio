import * as React from 'react';

const Badge = ({ badgeText, badgeBackround }) => {
  const hasBadgeBackround = badgeBackround ? badgeBackround : `text-bg-primary`;
  return (
    <span className={`badge rounded-pill ${hasBadgeBackround}`}>{badgeText}</span>
  )
}

export default Badge;

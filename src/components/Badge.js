import * as React from 'react';

const Badge = ({ badgeText, badgeBackround }) => {
  const hasBadgeBackround = badgeBackround ? badgeBackround : `bg-white text-dark`;
  return (
    <span className={`badge border fw-normal ${hasBadgeBackround}`}>{badgeText}</span>
  )
}

export default Badge;

import * as React from 'react';

const Badge = ({ badgeText, badgeBackround }) => {
  const hasBadgeBackround = badgeBackround ? badgeBackround : `text-bg-light`;
  return (
    <span className={`badge border border-dark-subtle ${hasBadgeBackround}`}>{badgeText}</span>
  )
}

export default Badge;

import * as React from 'react';
import Badge from './Badge';

const BadgeGroup = ({ badges, badgeBackround }) => {
  return (
    <>
      {badges && badges.length > 1 &&
        <ul className="list-inline mb-0">
          {badges.map((badge) =>
            <li className="list-inline-item" key={badge}>
              <Badge badgeText={badge} badgeBackround={badgeBackround} />
            </li>
          )}
        </ul>
      }
      {badges && badges.length === 1 &&
        <>
          {badges.map((badge) =>
            <Badge badgeText={badge} badgeBackround={badgeBackround} key={badge} />
          )}
        </>
      }
    </>
  )
}

export default BadgeGroup;

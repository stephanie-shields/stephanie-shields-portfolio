import * as React from 'react';
import Badge from './Badge';

const BadgeGroup = ({ badges }) => {
  return (
    <>
      {badges && badges.length > 1 &&
        <ul className="list-inline">
          {badges.map((badge) =>
            <li className="list-inline-item">
              <Badge badgeText={badge} />
            </li>
          )}
        </ul>
      }
      {badges && badges.length === 1 &&
        <>
          {badges.map((badge) =>
            <Badge badgeText={badge} />
          )}
        </>
      }
    </>
  )
}

export default BadgeGroup;

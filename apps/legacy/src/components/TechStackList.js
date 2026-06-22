import React, { useState, useEffect } from 'react';
import { technologies } from './../data/technologies';
import { StaticImage } from 'gatsby-plugin-image';
import * as techStackListStyles from './TechStackList.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import SVG from 'react-inlinesvg';

const TechStackList = ({techLogoOnly}) => {

  return (
    <ul className={`${techStackListStyles.techStackList}`}>
      {technologies.map(tech => (
        <li className={`${techStackListStyles.techStackItem}`} key={tech.id}>
          <div className={`${techStackListStyles.techCard} card`}>
            <div className={`${techStackListStyles.techCardLogo} card-img-top`}>
              <SVG src={tech.techLogo} title={tech.techDescription} />
            </div>
            {techLogoOnly &&
              <div className="visually-hidden">
                {tech.techTitle}
              </div>
            }
            {!techLogoOnly &&
              <div className="card-body">
                <div className="card-title">
                  {tech.techTitle}
                </div>
                <div className="card-text">
                  {tech.description}
                </div>
                <div className={`${techStackListStyles.techCardCta} d-flex mt-2`}>
                  <a className="btn px-0 stretched-link" href={tech.techLink} target="_blank" rel="noreferrer">
                    <div className={`${techStackListStyles.techCardHighlight} position-relative d-inline`}>
                      <span className="position-relative">Learn More</span>
                    </div>
                    <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                  </a>
                </div>
              </div>
            }
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TechStackList;
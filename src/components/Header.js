import * as React from 'react';
import { useState } from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronRight, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import * as headerStyles from './Header.module.scss';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="alert alert-warning rounded-0 py-2 mb-0" role="alert">
        <div className="container">
          <div className="d-flex">
            <FontAwesomeIcon icon={faTriangleExclamation} className="mt-1 me-2 text-warning" />
            <p className="mb-0 text-body">
              <small><strong>July 2025:</strong> Actively working on building my portfolio, feel free to check out the progress live here: <a href="https://github.com/stephanie-shields/stephanie-shields-portfolio" target="_blank" rel="noreferrer" className="link-dark">github.com/stephanie-shields/stephanie-shields-portfolio</a></small>
            </p>
          </div>
        </div>
      </div>
      <header className="py-3 border-bottom bg-white">
        <div className="container">
          <div className="grid py-1 align-items-center">
            <div className="g-col-9">
              <div className="d-flex h-100 align-items-center">
                <Link className={`${headerStyles.logo} me-5`} to="/">
                  <div className={`${headerStyles.logomark} me-2`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" style={{stopColor: '#be32d0', stopOpacity: '1'}} />
                          <stop offset="100%" style={{stopColor: '#fd4496', stopOpacity: '1'}} />
                        </linearGradient>
                      </defs>
                      <path fill="url(#gradient)" d="M18.96 22.36c-4.34-1.6-7.14-3.53-8.58-5.89L8.9 14.04l-.66 2.77c-1.36 5.72 1 11.47 5.74 13.98.71.35 1.84.85 3.38 1.15.82.15 1.61.22 2.4.22h.21l.3-.04c2.31-.62 3.67-2.63 3.49-5.14-.27-2.74-2.72-3.91-4.8-4.62Zm.81 7.46c-.65 0-1.3-.06-1.98-.18-1.24-.24-2.13-.63-2.74-.93-3.55-1.89-4.79-5.66-4.82-8.74 1.84 1.79 4.45 3.29 7.95 4.58 2.23.76 3.14 1.5 3.26 2.62.04.5.02 2.16-1.66 2.64ZM26.01 9.2c-.71-.35-1.83-.85-3.38-1.15-.82-.15-1.61-.22-2.4-.22h-.21l-.29.04c-2.31.62-3.68 2.63-3.49 5.14.27 2.74 2.71 3.91 4.8 4.62 4.33 1.6 7.14 3.53 8.58 5.89l1.48 2.43.65-2.77c1.36-5.72-1-11.47-5.74-13.98Zm3.76 10.82c-1.84-1.79-4.45-3.29-7.95-4.58-2.23-.76-3.14-1.5-3.25-2.62-.04-.49-.02-2.13 1.66-2.64.65 0 1.3.06 1.98.18 1.24.24 2.12.62 2.74.93 3.55 1.89 4.79 5.66 4.82 8.74Z"/>
                      <path fill="url(#gradient)" d="M36.33 8.46a17.589 17.589 0 0 0-4.32-4.45A19.854 19.854 0 0 0 20 0C8.97 0 0 8.97 0 20c0 4.17 1.27 8.16 3.67 11.54 1.19 1.75 2.64 3.25 4.32 4.45C11.48 38.61 15.63 40 20 40c11.03 0 20-8.97 20-20 0-4.17-1.27-8.16-3.67-11.54ZM37.67 20c0 9.74-7.92 17.66-17.66 17.66-3.86 0-7.53-1.23-10.62-3.55a15.416 15.416 0 0 1-3.78-3.9c-2.13-3-3.26-6.53-3.26-10.21C2.34 10.26 10.26 2.34 20 2.34c3.86 0 7.53 1.23 10.62 3.55 1.47 1.05 2.74 2.36 3.78 3.9 2.13 3 3.26 6.53 3.26 10.21Z"/>
                    </svg>
                  </div>
                  <div className={`${headerStyles.logotype} fs-5 text-nowrap`}>Stephanie Shields</div>
                  {/* <div className="tagline text-lowercase">Senior UX Engineer</div> */}
                </Link>
                <ul className={`${headerStyles.navigation} list-inline d-none d-lg-flex mb-0`}>
                  <li className="list-inline-item mx-3">
                    <Link to="/about" className="link-body-emphasis text-decoration-none">About</Link>
                  </li>
                  <li className="list-inline-item mx-3">
                    <Link to="/work" className="link-body-emphasis text-decoration-none">Work</Link>
                  </li>
                  <li className="list-inline-item mx-3">
                    <Link to="/capabilities" className="link-body-emphasis text-decoration-none">Capabilities</Link>
                  </li>
                  <li className="list-inline-item mx-3">
                    <Link to="/process" className="link-body-emphasis text-decoration-none">Process</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="g-col-3">
              <div className="d-flex justify-content-end align-items-center">
                <ul className="list-inline d-none d-lg-flex h-100 align-items-center justify-content-end mb-0">
                  <li className="list-inline-item me-3">
                    <a href="https://www.linkedin.com/in/steph-shields/" target="_blank" rel="noreferrer" className="d-inline-block">
                      <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                      <span className="visually-hidden">LinkedIn</span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://github.com/stephanie-shields" target="_blank" rel="noreferrer" className="d-inline-block">
                      <FontAwesomeIcon icon={faGithub} size="2xl" />
                      <span className="visually-hidden">GitHub</span>
                    </a>
                  </li>
                </ul>
                <button className={`${headerStyles.menuButton} btn btn-gradient fs-5 lh-1 d-lg-none`} onClick={handleShow}>
                  <FontAwesomeIcon icon={faBars} />
                  <span className="visually-hidden">Menu</span>
                </button>
              </div>
              <Offcanvas show={show} onHide={handleClose} placement={'end'}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>
                    <span className="visually-hidden">Menu</span>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="px-0">
                  <ul className={`${headerStyles.mobileNavigation} d-flex flex-column list-unstyled mb-0`}>
                    <li className="d-flex">
                      <Link to="/" className="p-3 w-100 d-flex justify-content-between align-items-center">
                        <span className="fw-semibold">Home</span>
                        <FontAwesomeIcon icon={faChevronRight} />
                      </Link>
                    </li>
                    <li className="d-flex">
                      <Link to="/about" className="p-3 w-100 d-flex justify-content-between align-items-center">
                        <span className="fw-semibold">About</span>
                        <FontAwesomeIcon icon={faChevronRight} />
                      </Link>
                    </li>
                    <li className="d-flex">
                      <Link to="/work" className="p-3 w-100 d-flex justify-content-between align-items-center">
                        <span className="fw-semibold">Work</span>
                        <FontAwesomeIcon icon={faChevronRight} />
                      </Link>
                    </li>
                    <li className="d-flex">
                      <Link to="/capabilities" className="p-3 w-100 d-flex justify-content-between align-items-center">
                        <span className="fw-semibold">Capabilities</span>
                        <FontAwesomeIcon icon={faChevronRight} />
                      </Link>
                    </li>
                    <li className="d-flex">
                      <Link to="/process" className="p-3 w-100 d-flex justify-content-between align-items-center">
                        <span className="fw-semibold">Process</span>
                        <FontAwesomeIcon icon={faChevronRight} />
                      </Link>
                    </li>
                  </ul>
                </Offcanvas.Body>
              </Offcanvas>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;

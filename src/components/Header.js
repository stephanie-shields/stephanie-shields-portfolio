import * as React from 'react';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <>
      <div class="alert alert-warning rounded-0 py-2 mb-0" role="alert">
        <div className="container">
          <div className="d-flex align-items-center">
            <i className="fa-solid fa-triangle-exclamation me-2 text-warning"></i>
            <p className="mb-0 text-body">
              <small>Actively working on building my portfolio, feel free to check out the progress live here: <a href="https://github.com/stephanie-shields/stephanie-shields-portfolio" target="_blank" className="link-dark">github.com/stephanie-shields/stephanie-shields-portfolio</a></small>
            </p>
          </div>
        </div>
      </div>
      <header className="py-3 border-bottom">
        <div className="container">
          <div className="grid py-2">
            <div className="g-col-9">
              <div className="d-flex">
                <Link className="logo me-5" to="/">
                  <div className="logomark"></div>
                  <div className="logotype">Stephanie Shields</div>
                  {/* <div className="tagline text-lowercase">Senior UX Engineer</div> */}
                </Link>
                <ul className="list-inline d-flex mb-0">
                  <li className="list-inline-item mx-3">
                    <Link to="/about">About</Link>
                  </li>
                  <li className="list-inline-item mx-3">
                    <Link to="/work">Work</Link>
                  </li>
                  <li className="list-inline-item mx-3">
                    <Link to="/capabilities">Capabilities</Link>
                  </li>
                  <li className="list-inline-item mx-3">
                    <Link to="/process">Process</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="g-col-3">
              <ul className="list-inline d-flex justify-content-end mb-0">
                <li className="list-inline-item me-3">
                  <a href="https://www.linkedin.com/in/steph-shields/" target="_blank" className="d-inline-block">
                    <i className="fa-brands fa-linkedin fa-2xl"></i>
                    <span className="visually-hidden">LinkedIn</span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://github.com/stephanie-shields" target="_blank" className="d-inline-block">
                    <i className="fa-brands fa-github fa-2xl"></i>
                    <span className="visually-hidden">GitHub</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;

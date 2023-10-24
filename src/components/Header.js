import * as React from 'react';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <header className="py-3 border-bottom">
        <div className="container">
          <div className="grid py-2">
            <div className="g-col-6">
              <Link className="logo" to="/">
                <div className="logomark"></div>
                <div className="logotype">Stephanie Shields</div>
                {/* <div className="tagline text-lowercase">Senior UX Engineer</div> */}
              </Link>
            </div>
            <div className="g-col-6">
              <ul className="list-inline d-flex justify-content-end mb-0">
                <li className="list-inline-item">
                  <a href="https://www.linkedin.com/in/steph-shields/" target="_blank">LinkedIn</a>
                </li>
                <li className="list-inline-item">
                  <a href="https://github.com/stephanie-shields" target="_blank">GitHub</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header;

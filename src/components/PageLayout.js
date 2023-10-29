import * as React from 'react';
import { Link, navigate } from 'gatsby';
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const PageLayout = ({ pageTitle, children }) => {
  return (
    <>
      <Header />
      <main>
        <div className="container mt-5">
          <div className="grid mb-5">
            <div className="g-col-10 g-start-2">
              <button className="btn btn-light btn-sm mb-4" onClick={() => navigate(-1)}>
                <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
                <span>Back</span>
              </button>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">{pageTitle}</li>
                </ol>
              </nav>
              <h1>{pageTitle}</h1>
              {children}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default PageLayout;
import * as React from "react";
import { Link } from 'gatsby';
import "./../styles/global.scss";

// markup
const IndexPage = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="grid py-2">
            <div className="g-col-6">
              <div className="logo">
                <div className="logomark"></div>
                <div className="logotype">Stephanie Shields</div>
                <div className="tagline text-lowercase">UX Designer and Engineer</div>
              </div>
            </div>
            <div className="g-col-6">
              <ul className="list-inline d-flex justify-content-end">
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
      <main>
        <section className="container hero">
          <div className="grid bg-primary py-5">
            <div className="g-col-10 g-start-2 text-center">
              <h1 className="h2 text-uppercase">Hello, I'm Stephanie</h1>
              <p className="display-5">I design and build impactful digital experiences and work hard to ensure lasting product success</p>
            </div>
          </div>
        </section>
        <section className="container">
          <h2 className="text-center mt-5 mb-4">Explore My Work</h2>
          <div className="grid mb-5">
            <div className="g-col-10 g-start-2">
              <div className="grid">
                <div className="g-col-4 card">

                </div>
                <div className="g-col-8 card">
                  <div class="card-body">
                    <h3 className="h5">USAspending.gov</h3>
                    <Link className="btn btn-secondary" to="/work/usaspending-gov-project">Explore</Link>
                  </div>
                </div>
                <div className="g-col-7 card">
                  <div class="card-body">
                    <h3 className="h5">Recreation.gov</h3>
                    <Link className="btn btn-secondary" to="/work/recreation-gov-project">Explore</Link>
                  </div>
                </div>
                <div className="g-col-5 card">
                  <div class="card-body">
                    <h3 className="h5">FDMS.gov</h3>
                    <Link className="btn btn-secondary" to="/work/fdms-gov-project">Explore</Link>
                  </div>
                </div>
                <div className="g-col-4 card">
                  <div class="card-body">
                    <h3 className="h5">Regulations.gov</h3>
                    <Link className="btn btn-secondary" to="/work/regulations-gov-project">Explore</Link>
                  </div>
                </div>
                <div className="g-col-4 card">
                  <div class="card-body"><h3 className="h5">myEverify.gov</h3>
                    <Link className="btn btn-secondary" to="/work/myeverify-gov-project">Explore</Link>
                  </div>
                </div>
                <div className="g-col-4 card">

                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="grid mb-5">
            <div className="g-col-10 g-start-2">
              <div className="grid">
                <div className="g-col-7">
                  <h2 className="">Checkout My GitHub</h2>
                  <p className="mb-4">Explore my personal projects on GitHub for a look into my process, code examples, and inspiration.</p>
                  <a class="btn btn-secondary" href="https://github.com/stephanie-shields" target="_blank" role="button">Visit My GitHub</a>
                </div>
                <div className="g-col-5">
                  {/* Image or graphic goes here */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <p className="text-center mb-5">&copy; 2022 Stephanie Shields | UX Designer and Engineer</p>
        </div>
      </footer>
    </>
  )
}

export default IndexPage

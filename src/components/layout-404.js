import React from "react"
import { Link } from "gatsby"
import { Nav, Navbar, Button, Container, Card } from "react-bootstrap"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <Link className="navbar-brand pl-3" to="/">
        {title}
      </Link>
    )
  } else {
    header = (
      <Link className="navbar-brand pl-3" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div data-is-root-path={isRootPath}>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light">
        <div className="container">
          {header}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" itemProp="url">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" itemProp="url">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="hvr-icon-forward"
                  href="https://www.instagram.com/prdct.tips/"
                  target="_blank"
                >
                  Product Tips{" "}
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-box-arrow-in-up-right hvr-icon"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0v-5z"
                    />
                  </svg>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="hvr-icon-forward"
                  href="https://www.notion.so/prdcttips"
                  target="_blank"
                >
                  Goodies{" "}
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-box-arrow-in-up-right hvr-icon"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0v-5z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container header-space">
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout

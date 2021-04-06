import React from "react"
import { Link } from "gatsby"
import { Nav, Navbar, Button, Container, Card } from "react-bootstrap"
import { withPrefix } from "gatsby"
import Helmet from "react-helmet"

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
                <Link to="/product-tips" itemProp="url">
                  Product Tips
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/resources" itemProp="url">
                  Resources
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container header-space">
        <main>{children}</main>
      </div>

      <footer>
        <small>
          © {new Date().getFullYear()}, developed with ☕️ and ❤️ by Elena
          Calvillo
        </small>
      </footer>
    </div>
  )
}

export default Layout

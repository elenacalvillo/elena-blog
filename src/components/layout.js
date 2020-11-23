import React from "react"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import { Nav, Navbar, Button, Container, Card } from "react-bootstrap"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <Link className="navbar-brand" to="/">
        {title}
      </Link>
    )
  } else {
    header = (
      <Link className="navbar-brand" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div data-is-root-path={isRootPath}>
      <div className="container">
        <Navbar>
          {header}
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/" itemProp="url">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/blog" itemProp="url">
                  Blog
                </Link>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link external"
                  href="https://www.instagram.com/prdct.tips/"
                  target="_blank"
                >
                  Product Tips
                </a>
              </li>
            </ul>
          </div>
        </Navbar>
        <main>{children}</main>
      </div>

      <footer className="">
        <small>
          © {new Date().getFullYear()}, Developed with ☕️ and ❤️ by Elena
          Calvillo
        </small>
      </footer>
    </div>
  )
}

export default Layout

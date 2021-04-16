import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'

const Layout = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <a
            className="nav-burger"
            href={`#`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
          <nav id="swup" class="site-head-left">
            <Link className="site-head-logo" to={`/`}>
              {title}
            </Link>
          </nav>
          <div className="site-head-center">
          </div>
          <div className="site-head-right">
            <ul className="nav" role="menu">
              <li className="nav-home nav-current" role="menuitem">
                <Link to={`/`}>Home</Link>
              </li>
              <li className="nav-about" role="menuitem">
                <Link to={`/about`}>About</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <footer className="site-foot">
        <a href="mailto:matthew.costa25@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a>
        <a href="http://linkedin.com/in/matthewcosta" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} size="2x" /></a>
      </footer>
    </div>
  )
}

export default Layout

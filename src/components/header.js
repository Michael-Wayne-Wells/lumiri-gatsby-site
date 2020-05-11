import PropTypes from "prop-types"
import React from "react"
import NavBar from "./NavBar"
import { Link } from "gatsby"
import logo from "../images/logo.png"
const Header = ({ siteTitle }) => {
  return (
    <>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <div className="navbar-brand">
              <Link to="/">
                <img src={logo} alt="lumiri logo"></img>
              </Link>
            </div>
          </div>
        </div>
        <NavBar siteTitle={siteTitle} />
      </section>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

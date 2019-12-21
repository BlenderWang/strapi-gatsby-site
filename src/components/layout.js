/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "../styles/layout.scss"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children }) => {
  return (
    <div
      style={{
        margin: `0 auto`,
        maxWidth: `100vw`,
        paddingTop: 0,
      }}
    >
      <main>{children}</main>
      {/* <footer
        style={{
          marginTop: `12.8rem`,
        }}
      >
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a> &{" "}
        <a href="https://strapi.io">Strapi</a>
      </footer> */}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

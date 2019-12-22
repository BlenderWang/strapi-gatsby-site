import React from "react"

export default function Footer() {
  return (
    <footer
      style={{
        display: `flex`,
        justifyContent: `center`,
        marginTop: `12.8rem`,
      }}
    >
      © {new Date().getFullYear()}, Wangimation | Built with
      {` `}
      <a
        href="https://www.gatsbyjs.org"
        style={{ fontSize: `12px`, margin: `0 3px` }}
      >
        Gatsby
      </a>{" "}
      &{" "}
      <a href="https://strapi.io" style={{ fontSize: `12px`, margin: `0 3px` }}>
        Strapi
      </a>
    </footer>
  )
}

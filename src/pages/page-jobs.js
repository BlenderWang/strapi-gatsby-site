import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import NavHeader from "../components/NavHeader"
import Excerpt from "../components/Excerpt"
import FullDesc from "../components/FullDesc"
import { Spring } from "react-spring/renderprops"
import VisibilitySensor from "react-visibility-sensor"

class JobsPage extends Component {
  render() {
    const { data } = this.props

    return (
      <Layout>
        <NavHeader />
        <div style={{ background: `#212529` }}>
          <VisibilitySensor>
            {({ isVisible }) => (
              <Spring delay={200} to={{ opacity: isVisible ? 1 : 0 }}>
                {({ opacity }) => (
                  <div style={{ opacity }} className="job--heading">
                    <h2>Join our team</h2>
                    <p>Welcome to our job board</p>
                  </div>
                )}
              </Spring>
            )}
          </VisibilitySensor>
        </div>
        <ul
          style={{
            marginTop: `15%`,
            marginLeft: 0,
            marginBottom: `1.45rem`,
            marginRight: 0,
            padding: 0,
            listStyle: `none`,
            overflow: `hidden`,
          }}
        >
          {data.allStrapiJobs.edges.map(job => (
            <li className="job" key={job.node.id}>
              <div className="count">
                <em>#{job.node.strapiId}</em>
              </div>
              <VisibilitySensor partialVisibility offset={{ left: -200 }}>
                {({ isVisible }) => (
                  <Spring
                    delay={200}
                    to={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible
                        ? "translateX(0)"
                        : "translateX(200px)",
                    }}
                  >
                    {props => (
                      <h2 style={{ ...props }} className="job--title">
                        <Link to={`/page-jobs`}>{job.node.title}</Link>
                      </h2>
                    )}
                  </Spring>
                )}
              </VisibilitySensor>
              <Excerpt excerpt={job.node.excerpt} />
              <FullDesc fullDesc={job.node.description} />
            </li>
          ))}
        </ul>
        <Link style={{ marginLeft: "10vw" }} to="/">
          &#8592; Go back to the homepage
        </Link>
        <div
          style={{
            display: `flex`,
            justifyContent: `center`,
            marginTop: `5.8rem`,
          }}
        >
          © {new Date().getFullYear()}, Flax Innovations | Built with
          {` `}
          <a
            href="https://www.gatsbyjs.org"
            style={{ fontSize: `12px`, margin: `0 3px` }}
          >
            Gatsby
          </a>{" "}
          &{" "}
          <a
            href="https://strapi.io"
            style={{ fontSize: `12px`, margin: `0 3px` }}
          >
            Strapi
          </a>
        </div>
      </Layout>
    )
  }
}

export default JobsPage

export const pageQuery = graphql`
  query JobsQuery {
    allStrapiJobs {
      edges {
        node {
          id
          strapiId
          title
          excerpt
          description
          author {
            id
          }
        }
      }
    }
  }
`

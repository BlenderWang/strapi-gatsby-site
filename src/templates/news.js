import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import NavHeader from "../components/NavHeader"
import Footer from "../components/Footer"
import marked from "marked"

const NewsTemplate = ({ data }) => {
  const markedImgLink = marked(data.strapiNews.content)

  return (
    <Layout>
      <NavHeader />
      <div className="news-single">
        <h1>{data.strapiNews.title}</h1>
        <p className="hide">
          by{" "}
          <Link to={`/authors/User_${data.strapiNews.author.id}`}>
            {data.strapiNews.author.username}
          </Link>
        </p>
        <Img fixed={data.strapiNews.image.childImageSharp.fixed} />
        <p className="imgInContent" dangerouslySetInnerHTML={{ __html: markedImgLink }} />
        <Link to="/" style={{ position: `relative`, bottom: `1rem` }}>
          &#8592; Go back
        </Link>
      </div>
      <Footer />
    </Layout>
  )
}

export default NewsTemplate

export const query = graphql`
  query NewsTemplate($id: String!) {
    strapiNews(id: { eq: $id }) {
      title
      content
      image {
        childImageSharp {
          fixed(width: 250, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      author {
        id
        username
      }
    }
  }
`

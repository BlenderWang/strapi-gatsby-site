import React, { useState, useEffect } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { useSwipeable } from "react-swipeable"
import Img from "gatsby-image"
import Title from "./Title"
import ReactMarkdown from 'react-markdown'

function Slideshow() {
  const [slides, setSlides] = useState([])
  const { allStrapiNews } = useStaticQuery(
    graphql`
      query {
        allStrapiNews(sort: { fields: id, order: ASC }) {
          edges {
            node {
              id
              title
              excerpt
              content
              image {
                childImageSharp {
                  fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
              strapiId
            }
          }
        }
      }
    `
  )

  useEffect(() => {
    setSlides(allStrapiNews.edges)
  }, [allStrapiNews.edges])

  const [index, setIndex] = useState(0)
  const length = allStrapiNews.edges.length - 1 // minus 1 for array offset from 0
  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1)
  const handlePrev = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1)
  const handlers = useSwipeable({
    onSwipedLeft: dir => handleNext(),
    onSwipedRight: dir => handlePrev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  })
  const gotoIndex = theIndex => setIndex(theIndex % (length + 1))

  return (
    <div className="slides" id="whats-new">
      <Title subtitle={`What's New`} />
      <div {...handlers}>
        <div className="col">
          <div className={`cards-slider active-slider-${index}`}>
            <div
              className="cards-slider-wrapper"
              style={{
                transform: `translateX(-${index * 100}%)`,
              }}
            >
              {slides.map((slide, i) => (
                <div
                  key={slide.node.id}
                  id={`card-${slide.node.strapiId - 1}`}
                  className="card"
                >
                  <Img
                    fluid={slide.node.image.childImageSharp.fluid}
                    alt={slide.node.title}
                    className="card--image"
                  />
                  <div className="card--details">
                    <h2>{slide.node.title}</h2>
                    <ReactMarkdown source={slide.node.excerpt} />
                    <Link className="link-btn" to={`/${slide.node.id}`}>
                      Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="buttons">
          <button onClick={() => handlePrev()}>&#8592;</button>
          <button onClick={() => handleNext()}>&#8594;</button>
        </div>
        <div
          style={{
            display: `flex`,
            justifyContent: `center`,
            alignContent: `center`,
          }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`dot dot-${slide.i === index ? "active" : ""}`}
              onClick={() => gotoIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Slideshow

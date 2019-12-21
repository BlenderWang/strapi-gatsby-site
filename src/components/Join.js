import React from "react"
import Title from "./Title"
import Paragraph from "./Paragraph"
import { Link } from "gatsby"
import { Spring } from "react-spring/renderprops"
import VisibilitySensor from "react-visibility-sensor"

export default function Join() {
  return (
    <div className="join" id="career">
      <Title subtitle={"Join us"} />
      <VisibilitySensor>
        {({ isVisible }) => (
          <Spring delay={150} to={{ opacity: isVisible ? 1 : 0 }}>
            {({ opacity }) => (
              <div style={{ opacity }} className="divi-line divi--left"></div>
            )}
          </Spring>
        )}
      </VisibilitySensor>
      <VisibilitySensor>
        {({ isVisible }) => (
          <Spring delay={200} to={{ opacity: isVisible ? 1 : 0 }}>
            {({ opacity }) => (
              <div style={{ opacity }}>
                <Paragraph paragraph={"Would you like to join out team?"} />
              </div>
            )}
          </Spring>
        )}
      </VisibilitySensor>
      <Link to="/page-jobs" className="link link-btn">
        learn more
      </Link>
      <VisibilitySensor>
        {({ isVisible }) => (
          <Spring delay={300} to={{ opacity: isVisible ? 1 : 0 }}>
            {({ opacity }) => (
              <div style={{ opacity }} className="divi-line divi--right"></div>
            )}
          </Spring>
        )}
      </VisibilitySensor>
    </div>
  )
}

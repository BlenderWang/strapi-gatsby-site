import React from "react"
import Helmet from "react-helmet"
import Title from "./Title"
import Paragraph from "./Paragraph"
import { Spring } from "react-spring/renderprops"
import VisibilitySensor from "react-visibility-sensor"

export default function Value(props) {
  const value = props.value

  return (
    <div className="value">
      <Helmet>
        <script
          src="https://kit.fontawesome.com/3e27283071.js"
          crossorigin="anonymous"
          defer={false}
        ></script>
      </Helmet>
      <i className={`fas ${value.icon}`} />
      <VisibilitySensor>
        {({ isVisible }) => (
          <Spring delay={150} to={{ opacity: isVisible ? 1 : 0 }}>
            {({ opacity }) => (
              <div style={{ opacity }}>
                <Title subtitle={value.name} />
              </div>
            )}
          </Spring>
        )}
      </VisibilitySensor>
      <VisibilitySensor>
        {({ isVisible }) => (
          <Spring delay={200} to={{ opacity: isVisible ? 1 : 0 }}>
            {({ opacity }) => (
              <div style={{ opacity }}>
                <Paragraph paragraph={value.description} />
              </div>
            )}
          </Spring>
        )}
      </VisibilitySensor>
    </div>
  )
}

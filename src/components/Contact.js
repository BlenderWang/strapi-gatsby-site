import React, { Component } from "react"
import Helmet from "react-helmet"
import Title from "./Title"
import Paragraph from "./Paragraph"
import Form from "./Form"
import { Spring } from "react-spring/renderprops"
import VisibilitySensor from "react-visibility-sensor"

export default class Contact extends Component {
  render() {
    return (
      <div className="contact" id="contact">
        <div className="contact-heading">
          <Title subtitle={"contact"} />
          <VisibilitySensor>
            {({ isVisible }) => (
              <Spring delay={200} to={{ opacity: isVisible ? 1 : 0 }}>
                {({ opacity }) => (
                  <div style={{ opacity }}>
                    <Paragraph paragraph={`Curious? Let's talk!`} />
                    <Paragraph
                      paragraph={`Send us an email or call. We will be happy to tell you more!`}
                    />
                  </div>
                )}
              </Spring>
            )}
          </VisibilitySensor>
        </div>
        <Helmet>
          <script
            src="https://kit.fontawesome.com/3e27283071.js"
            crossorigin="anonymous"
            defer={false}
          ></script>
        </Helmet>
        <div className="contact--icons">
          <i className="fas fa-at"></i>
          <Paragraph paragraph={"info@flaxinnovations.com"} />
          <i className="fas fa-phone-alt"></i>
          <Paragraph paragraph={"+46 707 160 390"} />
        </div>
        <Form />
      </div>
    )
  }
}

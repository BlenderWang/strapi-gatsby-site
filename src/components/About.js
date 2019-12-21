import React, { Component } from "react"
import Title from "./Title"
import Paragraph from "./Paragraph"
import Values from "./Values"
import { Spring } from "react-spring/renderprops"
import VisibilitySensor from "react-visibility-sensor"

export default class About extends Component {
  state = {
    values: [
      {
        id: 0,
        icon: "fa-signal",
        name: "Volume",
        description:
          "Our products and services focus on driving betting turnover through innovation.",
      },
      {
        id: 1,
        icon: "fa-cogs",
        name: "Automatisation",
        description:
          "We use artificial intelligence and big data to automate for staying efficient.",
      },
      {
        id: 2,
        icon: "fa-search",
        name: "Transparency",
        description:
          "We provide transparancy to operators and players in everything we do.",
      },
      {
        id: 3,
        icon: "fa-heart",
        name: "Personalisation",
        description:
          "Predictive personalisation enables us to offer a better user experience.",
      },
    ],
  }
  render() {
    return (
      <div className="about" id="about">
        <Title subtitle={"about"} />
        <VisibilitySensor>
          {({ isVisible }) => (
            <Spring delay={150} to={{ opacity: isVisible ? 1 : 0 }}>
              {({ opacity }) => (
                <div style={{ opacity }}>
                  <Paragraph
                    paragraph={
                      "Flax Innovations mission is to be the hub for disruptive product development catering to the interactive betting industry. We are developing innovative products that allow betting operators to stay ahead of the game."
                    }
                  />
                </div>
              )}
            </Spring>
          )}
        </VisibilitySensor>
        <VisibilitySensor>
          {({ isVisible }) => (
            <Spring delay={250} to={{ opacity: isVisible ? 1 : 0 }}>
              {({ opacity }) => (
                <div style={{ opacity }} className="divi-line"></div>
              )}
            </Spring>
          )}
        </VisibilitySensor>
        <Title subtitle={"our values"} />
        <Values values={this.state.values} />
      </div>
    )
  }
}

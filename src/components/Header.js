import React, { Component } from "react"
import Title from "./Title"
import "../styles/header.scss"

export default class Header extends Component {
  state = {
    videoURL:
      "https://res.cloudinary.com/dqycgwhnr/video/upload/v1575369432/190312_28_StadioOlimpicoAndFans_Drone_004_online-video-cutter.com_my4ews.mp4",
      // "https://res.cloudinary.com/dqycgwhnr/video/upload/v1575368613/4k-slow-motion-3d-animation-of-soccer-ball-flying-and-tearing-goal-net-on-dark-background-with-stadium-lights_4du-amlfl__WL_x3lelw.mp4"
  }
  render() {
    return (
      <div className="header" id="home">
        <div className="header__title">
          <Title subtitle={"READY TO CHANGE THE INDUSTRY? WELCOME ON BOARD!!!"} />
          <h4>
            We believe in challenging ourselves to rethink and accelerate the
            digitalisation of the betting industry. Data intelligence,
            automatisation and mobile technology is in our DNA. Lets unleash the
            potential, together.
          </h4>
        </div>
        <video id="background-video" loop autoPlay muted>
          <source src={this.state.videoURL} type="video/mp4" />
          <source src={this.videoURL} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
    )
  }
}

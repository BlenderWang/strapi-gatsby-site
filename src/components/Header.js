import React, { Component } from "react"
import Title from "./Title"
import "../styles/header.scss"

export default class Header extends Component {
  state = {
    videoURL:
      "https://res.cloudinary.com/shirlzzz9/video/upload/v1575575712/SnowFall_online-video-cutter.com.mp4",
  }

  render() {
    return (
      <div className="header" id="home">
        <div className="header__title">
          <Title
            subtitle={"READY TO CHANGE THE INDUSTRY? WELCOME ON BOARD!!!"}
          />
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

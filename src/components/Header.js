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
            subtitle={"Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm."}
          />
          <h4>
          Trysail Sail ho Corsair red ensign hulk smartly boom jib rum gangway. Case shot Shiver me timbers gangplank crack Jennys tea cup ballast Blimey lee snow crow's nest rutters. Fluke jib scourge of the seven seas boatswain schooner gaff booty Jack Tar transom spirits.
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

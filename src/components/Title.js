import React, { Component } from "react"

export default class Title extends Component {
  render() {
    return (
      <h1>
        <span>{this.props.title}</span>
        <br />
        {this.props.subtitle}
      </h1>
    )
  }
}

import React, { Component } from "react"
import Button from "./Button"
import marked from "marked"

export default class FullDesc extends Component {
  state = {
    visibility: false,
  }

  toggle = () => {
    // console.log("toggle")
    this.setState(prevState => ({
      visibility: !prevState.visibility,
    }))
  }

  render() {
    const visible = this.state.visibility
    const showFullDesc = visible ? "job--desc" : "hide"
    const toggleBtnTxt = visible ? "show less" : "show more"
    const markedDesc = marked(this.props.fullDesc)

    return (
      <div className="job--desc">
        <p
          className={showFullDesc}
          dangerouslySetInnerHTML={{ __html: markedDesc }}
        />
        <Button handleClick={this.toggle} btnTxt={toggleBtnTxt} />
      </div>
    )
  }
}

import React from "react"

export default function Button(props) {
  return (
    <div>
      <button className="btn btn--dark" onClick={props.handleClick}>
        {props.btnTxt}
      </button>
    </div>
  )
}

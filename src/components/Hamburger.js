import React from "react"

export default function Hamburger(props) {
  return (
    <div className="menu-btn" onClick={props.handleClick}>
      <span className={props.hamburgerClass} onClick={props.handleClick}></span>
    </div>
  )
}

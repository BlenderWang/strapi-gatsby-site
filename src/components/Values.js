import React from "react"
import Value from "./Value"

export default function Values(props) {
  return (
    <div className="values">
      {props.values.map((value, i) => (
        <Value key={i} value={value} />
      ))}
    </div>
  )
}

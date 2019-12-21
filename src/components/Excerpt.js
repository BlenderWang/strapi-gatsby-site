import React from "react"
import marked from "marked"
import { Spring } from "react-spring/renderprops"
import VisibilitySensor from "react-visibility-sensor"

const Excerpt = props => {
  const markedExcerpt = marked(props.excerpt)
  return (
    <VisibilitySensor>
      {({ isVisible }) => (
        <Spring delay={200} to={{ opacity: isVisible ? 1 : 0 }}>
          {({ opacity }) => (
            <p
              style={{ opacity }}
              className="job--excerpt"
              dangerouslySetInnerHTML={{ __html: markedExcerpt }}
            />
          )}
        </Spring>
      )}
    </VisibilitySensor>
  )
}

export default Excerpt

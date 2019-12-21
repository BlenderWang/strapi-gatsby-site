import React from "react"
import { Spring } from "react-spring/renderprops"
import VisibilitySensor from "react-visibility-sensor"

const Intro = () => {
    return (
        <VisibilitySensor partialVisibility offset={{ top: -200 }}>
            {({ isVisible }) => (
              <Spring delay={2000} to={{ 
                  opacity: !isVisible ? 1 : 0, 
                  transform: !isVisible ? "translateY(0%)" : "translateY(-100%)"
                }}>
                { props  => (
                    <div style={{ ...props }} className="introBg">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            id="svg8"
                            version="1.1"
                            viewBox="0 0 132.29166 132.29167"
                            height="500"
                            width="500">
                            <g
                                aria-label="F"
                                
                                id="text4522"
                                transform="translate(0,-164.70831)">
                                <path
                                d="M 60.386885,267.78214 H 44.979168 v -73.85601 h 42.333334 v 12.83134 H 60.386885 v 19.04495 h 25.056484 v 12.78083 H 60.386885 Z"
                                id="path4524" />
                            </g>
                            <circle
                                id="path822"
                                cx="66.145836"
                                cy="66.145836"
                                r="64.443245" />
                        </svg>
                    </div>
                 )}
               </Spring>
             )}
         </VisibilitySensor>
    )
}

export default Intro
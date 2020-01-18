/**
 * ----------
 * TESTIMONIAL
 * ----------
 * 
 * Comment block, describe your component here
 */

import React from "react"
import PropTypes from "prop-types"

const Testimonial = ({
  additionalClasses
}) => {
  const classes = ["testimonial", ...additionalClasses]
  return (
    <div className={`${classes.join(" ")}`}>

    </div>
  )
}

Testimonial.propTypes = {
  additionalClasses: PropTypes.array
}

Testimonial.defaultProps = {
  additionalClasses: []
}

export default Testimonial

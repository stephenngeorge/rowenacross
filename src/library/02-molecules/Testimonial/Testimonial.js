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
  additionalClasses,
  testimonialAttribution,
  testimonialText
}) => {
  const classes = ["testimonial", ...additionalClasses]
  return (
    <section className={`${classes.join(" ")}`}>
      <div className="testimonial__text-content">
        <p className="testimonial__text-content--text">
          { testimonialText }
        </p>
        {
          !!testimonialAttribution &&
          <p className="testimonial__text-content--attribution">
            { testimonialAttribution }
          </p>
        }
      </div>
    </section>
  )
}

Testimonial.propTypes = {
  additionalClasses: PropTypes.array,
  testimonialAttribution: PropTypes.string,
  testimonialText: PropTypes.string.isRequired
}

Testimonial.defaultProps = {
  additionalClasses: [],
  imageAlt: "Testimonial background image"
}

export default Testimonial

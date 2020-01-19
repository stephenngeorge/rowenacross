/**
 * ----------
 * TESTIMONIAL
 * ----------
 * 
 * Testimonial components are very similar to Quote 
 * Block components but they don't have a background 
 * image, and the text is left aligned.
 * 
 * The attribution is optional.
 * 
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
  additionalClasses: []
}

export default Testimonial

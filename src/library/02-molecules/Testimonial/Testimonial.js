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

import React, { useEffect } from "react"
import PropTypes from "prop-types"

const Testimonial = ({
  additionalClasses,
  testimonialAttribution,
  testimonialText
}) => {
  useEffect(() => {
    const animateText = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          let text = document.querySelector(".testimonial__text-content--text")
          let attribution = document.querySelector(".testimonial__text-content--attribution")

          text.classList.add('slide-right-fade-in--medium')
          attribution.style.animationDelay = "200ms"
          attribution.classList.add('slide-up-fade-in--medium')
        }
      })
    }

    let target = document.querySelector('.testimonial')
    let options = { threshold: .7 }
    let observer = new IntersectionObserver(animateText, options)
    if (target !== null) observer.observe(target)

    return () => observer.unobserve(target)
  }, [])

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

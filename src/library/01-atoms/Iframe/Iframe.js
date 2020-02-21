/**
 * ----------
 * IFRAME
 * ----------
 * 
 * Comment block, describe your component here
 */

import React from "react"
import PropTypes from "prop-types"

const Iframe = ({
  additionalClasses,
  height,
  options,
  src,
  title,
  width
}) => {
  const classes = [
    "iframe",
    "text-container--narrow",
    ...additionalClasses
  ]
  return (
    <section className={`${classes.join(" ")}`}>
      <iframe
        title={ title }
        width={ width }
        height={ height }
        { ...options }
        src={ src }
      >
      </iframe>
    </section>
  )
}

Iframe.propTypes = {
  additionalClasses: PropTypes.array,
  height: PropTypes.string,
  options: PropTypes.object,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  width: PropTypes.string
}

Iframe.defaultProps = {
  additionalClasses: [],
  options: {},
  width: "100%"
}

export default Iframe

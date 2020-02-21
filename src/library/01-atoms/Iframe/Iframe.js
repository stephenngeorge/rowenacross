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
  additionalClasses
}) => {
  const classes = ["iframe", ...additionalClasses]
  return (
    <div className={`${classes.join(" ")}`}>

    </div>
  )
}

Iframe.propTypes = {
  additionalClasses: PropTypes.array
}

Iframe.defaultProps = {
  additionalClasses: []
}

export default Iframe

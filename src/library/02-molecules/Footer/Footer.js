/**
 * ----------
 * FOOTER
 * ----------
 * 
 * Comment block, describe your component here
 */

import React from "react"
import PropTypes from "prop-types"

const Footer = ({
  additionalClasses
}) => {
  const classes = ["footer", ...additionalClasses]
  return (
    <div className={`${classes.join(" ")}`}>

    </div>
  )
}

Footer.propTypes = {
  additionalClasses: PropTypes.array
}

Footer.defaultProps = {
  additionalClasses: []
}

export default Footer

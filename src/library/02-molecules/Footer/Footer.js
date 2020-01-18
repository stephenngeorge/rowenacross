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
  additionalClasses,
  children
}) => {
  const classes = ["footer", ...additionalClasses]
  return (
    <footer className={`${classes.join(" ")}`}>
      { children }
    </footer>
  )
}

Footer.propTypes = {
  additionalClasses: PropTypes.array
}

Footer.defaultProps = {
  additionalClasses: []
}

export default Footer

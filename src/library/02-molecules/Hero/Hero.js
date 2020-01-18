/**
 * ----------
 * HERO
 * ----------
 * 
 * Comment block, describe your component here
 */

import React from "react"
import PropTypes from "prop-types"

const Hero = ({
  additionalClasses
}) => {
  const classes = ["hero", ...additionalClasses]
  return (
    <div className={`${classes.join(" ")}`}>

    </div>
  )
}

Hero.propTypes = {
  additionalClasses: PropTypes.array
}

Hero.defaultProps = {
  additionalClasses: []
}

export default Hero

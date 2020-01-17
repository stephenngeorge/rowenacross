/**
 * ----------
 * ICONSBLOCK
 * ----------
 * 
 * Comment block, describe your component here
 */

import React from "react"
import PropTypes from "prop-types"

const IconsBlock = ({
  additionalClasses
}) => {
  const classes = ["icons-block", ...additionalClasses]
  return (
    <div className={`${classes.join(" ")}`}>

    </div>
  )
}

IconsBlock.propTypes = {
  additionalClasses: PropTypes.array
}

IconsBlock.defaultProps = {
  additionalClasses: []
}

export default IconsBlock

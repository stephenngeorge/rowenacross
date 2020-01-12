/**
 * ----------
 * IMAGEBLOCK
 * ----------
 * 
 * Comment block, describe your component here
 */

import React from "react"
import PropTypes from "prop-types"

const ImageBlock = ({
  additionalClasses
}) => {
  const classes = ["image-block", ...additionalClasses]
  return (
    <div className={`${classes.join(" ")}`}>

    </div>
  )
}

ImageBlock.propTypes = {
  additionalClasses: PropTypes.array
}

ImageBlock.defaultProps = {
  additionalClasses: []
}

export default ImageBlock

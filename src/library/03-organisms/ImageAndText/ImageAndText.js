/**
 * ----------
 * IMAGEANDTEXT
 * ----------
 * 
 * Comment block, describe your component here
 */

import React from "react"
import PropTypes from "prop-types"

const ImageAndText = ({
  additionalClasses
}) => {
  const classes = ["image-and-text", ...additionalClasses]
  return (
    <div className={`${classes.join(" ")}`}>

    </div>
  )
}

ImageAndText.propTypes = {
  additionalClasses: PropTypes.array
}

ImageAndText.defaultProps = {
  additionalClasses: []
}

export default ImageAndText

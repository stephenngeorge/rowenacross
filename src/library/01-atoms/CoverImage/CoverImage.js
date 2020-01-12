/**
 * ----------
 * COVERIMAGE
 * ----------
 * 
 * Comment block, describe your component here
 */

import React from "react"
import PropTypes from "prop-types"

const CoverImage = ({
  additionalClasses,
  imageAlt,
  imageSrc
}) => {
  const classes = ["cover-image", ...additionalClasses]
  return (
    <div className={`${classes.join(" ")}`}>
      <img
        data-object-fit="cover"
        alt={ imageAlt }
        src={ imageSrc }
      />
    </div>
  )
}

CoverImage.propTypes = {
  additionalClasses: PropTypes.array,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string.isRequired
}

CoverImage.defaultProps = {
  additionalClasses: [],
  imageAlt: "image"
}

export default CoverImage

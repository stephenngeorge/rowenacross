/**
 * ----------
 * IMAGEBLOCK
 * ----------
 * 
 * Image Block components show three images in a row,
 * which collapses to a slider on smaller breakpoints.
 * Image Blocks take an images props, an array of objects
 * in which each image should be of shape:
 * 
 * {
 * ..alt: string,
 * ..src: string (filepath)
 * }
 * 
 * @see 01-atoms/CoverImage
 * 
 */

import React from "react"
import PropTypes from "prop-types"

import { CoverImage } from '../../01-atoms'

const ImageBlock = ({
  additionalClasses,
  images
}) => {
  const classes = ["image-block", ...additionalClasses]
  return (
    <div className={`${classes.join(" ")}`}>
      <div className="image-block__images">
        {
          (images.length > 0 && images.length <= 3) &&
          images.map(image => {
            return (
              <div key={ image.alt } className="images__panel">
                <CoverImage imageAlt={ image.alt } imageSrc={ image.src } />
              </div>
            ) 
          })
        }
      </div>
    </div>
  )
}

ImageBlock.propTypes = {
  additionalClasses: PropTypes.array,
  images: PropTypes.array.isRequired
}

ImageBlock.defaultProps = {
  additionalClasses: []
}

export default ImageBlock

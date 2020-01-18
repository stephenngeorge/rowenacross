/**
 * ----------
 * COVERIMAGE
 * ----------
 * 
 * Cover Image components are a div containing
 * an image with object-fit: cover. Cover Images
 * are consumed by the ImageBlock component.
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"

import * as errorTypes from '../../../utils/errorTypes'

const CoverImage = ({
  additionalClasses,
  imageAlt,
  imageSrc,
  objectPos
}) => {
  useEffect(() => {
    const image = document.querySelector(".cover-image img")

    if (image !== null && image !== undefined) {
      image.style.objectPosition = `${objectPos.x} ${objectPos.y}`
    }
  }, [objectPos])

  const validateCoverImage = (objectPos) => {
    let errors = []
    let keys = Object.keys(objectPos)
    if (keys.indexOf("x") < 0 || keys.indexOf("y") < 0) {
      errors.push({
        type: errorTypes.OBJECT_MALFORMED,
        source: "CoverImage > props.objectPos",
        message: "the objectPos prop should be an object containing properties 'x' and 'y'"
      })
    }

    for (let error of errors) {
      console.warn(`${error.type}\n${error.source}: ${error.message}`)
    }

    return errors
  }

  const classes = ["cover-image", ...additionalClasses]
  return validateCoverImage(objectPos).length > 0 ? null : (
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
  imageSrc: PropTypes.string.isRequired,
  objectPos: PropTypes.object
}

CoverImage.defaultProps = {
  additionalClasses: [],
  imageAlt: "image",
  objectPos: {
    x: '50%',
    y: '50%'
  }
}

export default CoverImage

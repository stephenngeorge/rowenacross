/**
 * ----------
 * ICON
 * ----------
 * 
 * Icon components render an svg at a specified size,
 * 
 */

import React from "react"
import PropTypes from "prop-types"

import * as errorTypes from '../../../utils/errorTypes'

const Icon = ({
  additionalClasses,
  altText,
  icon,
  linkUrl,
  size
}) => {
  const validateIcon = (icon, size) => {
    let errors = []

    if (["xs", "sm", "md", "lg", "xl"].indexOf(size) < 0) {
      errors.push({
        type: errorTypes.VALUE_OUT_OF_RANGE,
        source: "Icon > props.size",
        message: "size prop must be one of 'xs', 'sm', 'md', 'lg' or 'xl'"
      })
    }

    if (icon.split(".").pop() !== "svg") {
      errors.push({
        type: errorTypes.UNALLOWED_FILE_TYPE,
        source: "Icon > props.icon",
        message: "icon prop must be the file path to an .svg file"
      })
    }

    for (let error of errors) {
      console.warn(`${error.type}\n${error.source}: ${error.message}`)
    }

    return errors
  }

  const classes = [
    "icon",
    `icon--${size}`,
    ...additionalClasses
  ]
  return validateIcon(icon, size).length > 0 ? null : !!linkUrl ? (
    <a className={`${classes.join(" ")}`} href={ linkUrl }>
      <img src={ icon } alt={ altText } />
    </a>
  ) : (
    <div className={`${classes.join(" ")}`}>
      <img src={ icon } alt={ altText } />
    </div>
  )
}

Icon.propTypes = {
  additionalClasses: PropTypes.array,
  altText: PropTypes.string,
  icon: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired
}

Icon.defaultProps = {
  additionalClasses: [],
  altText: "icon",
  size: "sm"
}

export default Icon

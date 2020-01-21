/**
 * ----------
 * TITLEGRADIENT
 * ----------
 * 
 * TitleGradient components are designed to display a
 * title on a colourful, gradient background, with some
 * optional shadows surrounding the title.
 * This is intended to be used for the Site Title in a
 * hero section as it would likely upset the heirachy if
 * used further down a page.
 */

import React from "react"
import PropTypes from "prop-types"

import * as errorTypes from '../../../utils/errorTypes'

const TitleGradient = ({
  additionalClasses,
  shadows,
  titleTag,
  titleText
}) => {
  const validateTitle = (titleTag, titleText) => {
    let errors = []

    if (titleTag <= 0 || titleTag > 6) {
      errors.push({
        type: errorTypes.VALUE_OUT_OF_RANGE,
        source: "TitleGradient > props.titleTag",
        message: "titleTag prop must be a number between 1 and 6 (inclusive)"
      })
    }

    if (titleText.length <= 0) {
      errors.push({
        type: errorTypes.VALUE_INVALID,
        source: "TitleGradient > props.titleText",
        message: "titleText prop cannot be an empty string"
      })
    }

    for (let error of errors) {
      console.warn(`${error.type}\n${error.source}: ${error.message}`)
    }

    return errors
  }

  const Markup = `h${titleTag}`

  const classes = [
    "title-gradient",
    shadows ? "shadows" : "",
    'fade-in--fast',
    ...additionalClasses
  ]
  return validateTitle(titleTag, titleText).length > 0 ? null : (
    <div className={`${classes.join(" ")}`}>
      <Markup>{ titleText }</Markup>
    </div>
  )
}

TitleGradient.propTypes = {
  additionalClasses: PropTypes.array,
  shadows: PropTypes.bool,
  titleTag: PropTypes.number,
  titleText: PropTypes.string.isRequired
}

TitleGradient.defaultProps = {
  additionalClasses: [],
  shadows: true,
  titleTag: 1
}

export default TitleGradient

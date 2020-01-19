/**
 * ----------
 * TITLE
 * ----------
 * 
 * Title components render an <h> tag at a 
 * specified level.
 * 
 */

import React from "react"
import PropTypes from "prop-types"

const Title = ({
  additionalClasses,
  titleLevel,
  titleText
}) => {
  const Markup = `h${titleLevel}`

  const classes = ["title", ...additionalClasses]
  return (
    <Markup className={`${classes.join(" ")}`}>
      { titleText }
    </Markup>
  )
}

Title.propTypes = {
  additionalClasses: PropTypes.array,
  titleLevel: PropTypes.number, // <-- between 1 - 6
  titleText: PropTypes.string.isRequired
}

Title.defaultProps = {
  additionalClasses: [],
  titleLevel: 2
}

export default Title

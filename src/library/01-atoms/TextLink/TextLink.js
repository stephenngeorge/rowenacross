/**
 * ----------
 * TEXTLINK
 * ----------
 * 
 * TextLink components show a link to either an internal
 * or external resource. Displayed as a colourful button-like
 * element.
 * If variation is internal (this is the default) a react-router
 * <Link> component is used, otherwise a regular <a> tag is rendered.
 */

import React from "react"
import { Link } from 'react-router-dom'
import PropTypes from "prop-types"

const TextLink = ({
  additionalClasses,
  linkText,
  linkUrl,
  linkVariation,
  newPage
}) => {
  const handleClick = () => {
    if (!!newPage) window.scrollTo(0, 0)
  }
  
  const classes = ["text-link", ...additionalClasses]
  return linkVariation === "internal" ? (
    <Link onClick={ handleClick } to={ linkUrl } className={`${classes.join(" ")}`}>
      { linkText }
    </Link>
  ) : (
    <a onClick={ handleClick } href={ linkUrl } className={`${classes.join(" ")}`}>
      { linkText }
    </a>
  )
}

TextLink.propTypes = {
  additionalClasses: PropTypes.array,
  linkText: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  linkVariation: PropTypes.string, // <-- one of 'internal' or 'external'
  newPage: PropTypes.bool
}

TextLink.defaultProps = {
  additionalClasses: [],
  linkVariation: "internal",
  newPage: true
}

export default TextLink

/**
 * ----------
 * ICONSBLOCK
 * ----------
 * 
 * Icons Block components render a block of 
 * Icon atoms in a row. Icons Block accepts an 
 * Icons prop which is an array of objects, in which 
 * each object should be of shape:
 * {
 * ..altText: string,
 * ..icon: string <filepath>,
 * ..linkUrl: string,
 * ..size: string ["xs", "sm", "md", "lg", "xl"]
 * }
 */

import React from "react"
import PropTypes from "prop-types"

import { Icon } from '../../01-atoms'

const IconsBlock = ({
  additionalClasses,
  icons
}) => {
  const classes = ["icons-block", ...additionalClasses]
  return (
    <div className={`${classes.join(" ")}`}>
      { icons.map(icon => <Icon key={ icon.icon } {...icon} />) }
    </div>
  )
}

IconsBlock.propTypes = {
  additionalClasses: PropTypes.array,
  icons: PropTypes.array.isRequired
}

IconsBlock.defaultProps = {
  additionalClasses: []
}

export default IconsBlock

/**
 * ----------
 * PAGEBANNER
 * ----------
 * 
 * Page banner components comprise a title
 * and a paragraph of text to be used at the
 * top of a site page
 * 
 */

import React from "react"
import PropTypes from "prop-types"

import { TitleGradient } from '../../01-atoms'

const PageBanner = ({
  additionalClasses,
  children,
  titleTag,
  titleText
}) => {
  const classes = [
    "page-banner",
    "text-container--narrow",
    ...additionalClasses
  ]
  return (
    <section className={`${classes.join(" ")}`}>
      <TitleGradient shadows={ false } titleTag={ titleTag } titleText={ titleText } />
      <div className="page-banner__text">
        { children }
      </div>
    </section>
  )
}

PageBanner.propTypes = {
  additionalClasses: PropTypes.array,
  titleTag: PropTypes.number,
  titleText: PropTypes.string.isRequired
}

PageBanner.defaultProps = {
  additionalClasses: [],
  titleTag: 1
}

export default PageBanner

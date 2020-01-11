/**
 * ----------
 * CARD
 * ----------
 * 
 * Card components display text with an optional
 * title and an optional button at the bottom.
 * These components are comsumed in the 03-organisms/card-block
 * component.
 * 
 * @todo create CardBlock organism
 */

import React from "react"
import PropTypes from "prop-types"

import { Title, TextLink } from '../../01-atoms'

const Card = ({
  additionalClasses,
  bodyText,
  linkText,
  linkUrl,
  linkVariation,
  titleLevel,
  titleText
}) => {
  const classes = ["card", ...additionalClasses]
  return (
    <div className={`${classes.join(" ")}`}>
      <div className="card__text-content">
        {
          (!!titleText && titleText.length > 0) &&
          <Title titleLevel={ titleLevel } titleText={ titleText } />
        }
        <p>{ bodyText }</p>
      </div>
      {
        (!!linkText && !!linkUrl) &&
        <TextLink linkText={ linkText } linkUrl={ linkUrl } linkVariation={ linkVariation } />
      }
    </div>
  )
}

Card.propTypes = {
  additionalClasses: PropTypes.array,
  bodyText: PropTypes.string.isRequired,
  linkText: PropTypes.string,
  linkUrl: PropTypes.string, // <-- url/uri
  linkVariation: PropTypes.string, // <-- one of "internal, external"
  titleLevel: PropTypes.number, // <-- between 1 - 6
  titleText: PropTypes.string
}

Card.defaultProps = {
  additionalClasses: [],
  titleLevel: 3
}

export default Card

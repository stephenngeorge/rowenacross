/**
 * ----------
 * CARDBLOCK
 * ----------
 * 
 * Comment block, describe your component here
 */

import React from "react"
import PropTypes from "prop-types"

const CardBlock = ({
  additionalClasses,
  children
}) => {
  const validateChildren = children => {
    let errors = []

    if (Array.isArray(children)) {
      const invalidElements = children.filter(element => element.type.name !== "Card")
      if (invalidElements.length > 0) {
        errors.push({
          type: "INVALID CHILD",
          source: "CardBlock > props.children",
          message: "CardBlock components only accept Card components as children"
        })
      }
    }
    else if (!!children && children.type.name !== "Card") {
      errors.push({
        type: "INVALID CHILD",
        source: "CardBlock > props.children",
        message: "CardBlock components only accept Card components as children"
      })
    }

    for (let error of errors) {
      console.warn(`${error.type}\n${error.source}: ${error.message}`)
    }

    return errors
  }

  const classes = ["card-block", ...additionalClasses]
  return validateChildren(children).length > 0 ? null : (
    <div className={`${classes.join(" ")}`}>
      <div className="card-block__cards-container">
        { children }
      </div>
    </div>
  )
}

CardBlock.propTypes = {
  additionalClasses: PropTypes.array
}

CardBlock.defaultProps = {
  additionalClasses: []
}

export default CardBlock

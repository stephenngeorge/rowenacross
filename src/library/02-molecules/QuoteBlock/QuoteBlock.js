/**
 * ----------
 * QUOTEBLOCK
 * ----------
 * 
 * Comment block, describe your component here
 */

import React from "react"
import PropTypes from "prop-types"

const QuoteBlock = ({
  additionalClasses
}) => {
  const classes = ["quote-block", ...additionalClasses]
  return (
    <div className={`${classes.join(" ")}`}>

    </div>
  )
}

QuoteBlock.propTypes = {
  additionalClasses: PropTypes.array
}

QuoteBlock.defaultProps = {
  additionalClasses: []
}

export default QuoteBlock

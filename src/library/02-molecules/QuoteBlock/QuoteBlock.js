/**
 * ----------
 * QUOTEBLOCK
 * ----------
 * 
 * Comment block, describe your component here
 */

import React from "react"
import PropTypes from "prop-types"

import { CoverImage } from '../../01-atoms'

const QuoteBlock = ({
  additionalClasses,
  imageAlt,
  imageSrc,
  quotation,
  quoteSource
}) => {
  const classes = ["quote-block", ...additionalClasses]
  return (
    <section className={`${classes.join(" ")}`}>
      <CoverImage imageAlt={ imageAlt } imageSrc={ imageSrc } />
      <div className="quote-block__text-content">
        <p className="quote-block__text-content--quotation">
          { quotation }
        </p>
        {
          !!quoteSource &&
          <p className="quote-block__text-content--source">{ quoteSource }</p>
        }
      </div>
    </section>
  )
}

QuoteBlock.propTypes = {
  additionalClasses: PropTypes.array,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
  quotation: PropTypes.string.isRequired,
  quoteSource: PropTypes.string
}

QuoteBlock.defaultProps = {
  additionalClasses: [],
  imageAlt: "Background image for quotation"
}

export default QuoteBlock

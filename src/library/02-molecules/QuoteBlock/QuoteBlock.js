/**
 * ----------
 * QUOTEBLOCK
 * ----------
 * 
 * Quote Block components render a quotation in a 
 * cursive font overlaying a full-width background 
 * image.
 * 
 * Quote Blocks also optionally display a quoteSource, 
 * i.e. the person/book etc from which the quote has 
 * been taken.
 * 
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

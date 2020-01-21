/**
 * ----------
 * SEARCHFORM
 * ----------
 * 
 * Comment block, describe your component here
 */

import React from "react"
import PropTypes from "prop-types"

const SearchForm = ({
  additionalClasses
}) => {
  const classes = ["search-form", ...additionalClasses]
  return (
    <div className={`${classes.join(" ")}`}>

    </div>
  )
}

SearchForm.propTypes = {
  additionalClasses: PropTypes.array
}

SearchForm.defaultProps = {
  additionalClasses: []
}

export default SearchForm

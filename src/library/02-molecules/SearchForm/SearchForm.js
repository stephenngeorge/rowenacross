/**
 * ----------
 * SEARCHFORM
 * ----------
 * 
 * Search Form components have a single input, and a
 * submit button. The state of the form should be controlled
 * by it's parent, as this input should normally be used to
 * filter an array of content/data.
 */

import React from "react"
import PropTypes from "prop-types"

const SearchForm = ({
  additionalClasses
}) => {
  const classes = ["search-form", ...additionalClasses]
  return (
    <div className={`${classes.join(" ")}`}>
      <form className="search-form__form text-container--narrow" onSubmit={e => {
        e.preventDefault()
      }}>
        <div className="search-form__form-field">
          <input type="text" name="search" id="search" />
          <label htmlFor="search">Search for devotionals</label>
        </div>
        <button className="search-form__submit-button" type="submit">
          search
        </button>
      </form>
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

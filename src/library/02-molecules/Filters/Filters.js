/**
 * ----------
 * FILTERS
 * ----------
 * 
 * Filters blocks are for being applied to a search form,
 * on clicking a filter, the list of items is question is
 * filtered by that term.
 * 
 */

import React from "react"
import PropTypes from "prop-types"

const Filters = ({
  additionalClasses,
  filters,
  handleClick
}) => {
  const classes = [
    "filters",
    "text-container--narrow",
    ...additionalClasses
  ]
  return (
    <section className={`${classes.join(" ")}`}>
      <p className="filters-title">Filters:</p>
      <ul className="filters__filters-list">
        {
          filters.map(filter => {
            return (
              <li
                key={ filter }
                onClick={ () => handleClick(filter) }
                className="filters-list__filter"
              >
                  #{ filter }
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}

Filters.propTypes = {
  additionalClasses: PropTypes.array,
  filters: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired
}

Filters.defaultProps = {
  additionalClasses: []
}

export default Filters

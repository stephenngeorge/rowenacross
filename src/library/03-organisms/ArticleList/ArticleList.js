/**
 * ----------
 * ARTICLELIST
 * ----------
 * 
 * Comment block, describe your component here
 */

import React from "react"
import PropTypes from "prop-types"

const ArticleList = ({
  additionalClasses
}) => {
  const classes = ["article-list", ...additionalClasses]
  return (
    <div className={`${classes.join(" ")}`}>

    </div>
  )
}

ArticleList.propTypes = {
  additionalClasses: PropTypes.array
}

ArticleList.defaultProps = {
  additionalClasses: []
}

export default ArticleList

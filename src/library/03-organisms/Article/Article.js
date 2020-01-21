/**
 * ----------
 * ARTICLE
 * ----------
 * 
 * Comment block, describe your component here
 */

import React from "react"
import PropTypes from "prop-types"

import { Title } from '../../01-atoms'

const Article = ({
  additionalClasses,
  articleSummary,
  children,
  displayMode,
  publishedDate,
  titleText
}) => {
  const classes = [
    "article",
    displayMode === "summary" ? "article--summary" : "article--full",
    "text-container--narrow",
    ...additionalClasses
  ]
  return (
    <section className={`${classes.join(" ")}`}>
      <div className="article__header">
        <Title additionalClasses={['article__header--title']} titleText={ titleText } titleLevel={ 2 } />
        {
          !!publishedDate &&
          <p className="article__header--published-date">{ publishedDate }</p>
        }
      </div>
      <div className="article__body">
        {
          displayMode === "summary" &&
          <p className="article__body--summary">{ articleSummary }</p>
        }
        {
          displayMode === "full" &&
          children
        }
      </div>
    </section>
  )
}

Article.propTypes = {
  additionalClasses: PropTypes.array,
  articleSummary: PropTypes.string.isRequired,
  displayMode: PropTypes.string, // <-- one of "full", "summary"
  publishedDate: PropTypes.string,
  titleText: PropTypes.string.isRequired
}

Article.defaultProps = {
  additionalClasses: [],
  displayMode: "summary"
}

export default Article

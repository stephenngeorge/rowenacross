/**
 * ----------
 * ARTICLE
 * ----------
 * 
 * Comment block, describe your component here
 */

import React from "react"
import PropTypes from "prop-types"

import { TextLink, Title } from '../../01-atoms'

const Article = ({
  additionalClasses,
  articleSummary,
  children,
  displayMode,
  linkText,
  linkUrl,
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
      <div className="article__text-content">
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
      </div>
      <div className="article__button-container">
        <TextLink additionalClasses={['article__read-more-link']} linkText={ linkText } linkUrl={ linkUrl } linkVariation="internal" />
      </div>
    </section>
  )
}

Article.propTypes = {
  additionalClasses: PropTypes.array,
  articleSummary: PropTypes.string.isRequired,
  displayMode: PropTypes.string, // <-- one of "full", "summary"
  linkText: PropTypes.string,
  linkUrl: PropTypes.string.isRequired,
  publishedDate: PropTypes.string,
  titleText: PropTypes.string.isRequired
}

Article.defaultProps = {
  additionalClasses: [],
  displayMode: "summary",
  linkText: "Read more"
}

export default Article

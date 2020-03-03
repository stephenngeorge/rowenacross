/**
 * ----------
 * ARTICLELIST
 * ----------
 * 
 * Comment block, describe your component here
 */

import React from "react"
import PropTypes from "prop-types"

import Article from '../Article/Article'

const ArticleList = ({
  additionalClasses,
  articles
}) => {
  const classes = [
    "article-list",
    articles.length <= 0 ? "no-results" : "",
    ...additionalClasses
  ]
  return (
    <div className={`${classes.join(" ")}`}>
      <section className="article-list__articles">
        {
          articles.length > 0 &&
          articles.map(article => <Article key={ article.id } { ...article } />)
        }
        {
          articles.length === 0 &&
          <p className="article-list__no-results text-container--very-narrow color--light font-family--serif">
            Sorry, we couldn't find anything for that search. Try entering something 
            else or using one of the filters above.
          </p>
        }
      </section>
    </div>
  )
}

ArticleList.propTypes = {
  additionalClasses: PropTypes.array,
  articles: PropTypes.array.isRequired
}

ArticleList.defaultProps = {
  additionalClasses: []
}

export default ArticleList

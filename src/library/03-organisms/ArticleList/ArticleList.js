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
  const classes = ["article-list", ...additionalClasses]
  return (
    <div className={`${classes.join(" ")}`}>
      <section className="article-list__articles">
        {
          articles.map(article => <Article key={ article.id } { ...article } />)
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

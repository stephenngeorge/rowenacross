/**
 * ----------
 * ARTICLE
 * ----------
 * 
 * Article components render a story with a title,
 * published date and a body. The "summary" mode also
 * provides a link to read more.
 */

import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import PropTypes from "prop-types"

import { TextLink, Title } from '../../01-atoms'
import { BACK_ARROW } from '../../../assets'

const Article = ({
  additionalClasses,
  articleSummary,
  bodyText,
  displayMode,
  linkText,
  linkUrl,
  publishedDate,
  titleText
}) => {
  const params = useParams()

  const [display, setDisplay] = useState(displayMode)
  // bind URL query string to the display mode of the article
  useEffect(() => {
    if (params.title !== undefined) {
      // prepare text for comparison
      let localTitle = titleText.toLowerCase().replace(/\s/g, "-").replace(/:/g, "")
      if (localTitle === params.title) setDisplay("full")
      else setDisplay("summary")
    }
    else {
      setDisplay("summary")
    }
  }, [params, titleText])

  const classes = [
    "article",
    display === "summary" ? "article--summary" : "article--full",
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
          <button className="article-back-button slide-left-fade-in--button">
            <Link to="/devotionals">
              <img src={ BACK_ARROW } alt="back arrow" />
            </Link>
          </button>
        </div>
        <div className="article__body">
          {
            display === "summary" &&
            <p className="article__body--summary">{ articleSummary }</p>
          }
          {
            display === "full" &&
            bodyText.split('\n').map((sentence, i) => <p key={ i }>{ sentence }</p>)
          }
        </div>
      </div>
      <div className="article__button-container">
        <TextLink additionalClasses={['article__read-more-link']}
                  linkText={ linkText }
                  linkUrl={ linkUrl }
                  linkVariation="internal"
                  newPage={ false }
                />
      </div>
    </section>
  )
}

Article.propTypes = {
  additionalClasses: PropTypes.array,
  articleSummary: PropTypes.string.isRequired,
  bodyText: PropTypes.string.isRequired,
  displayMode: PropTypes.string, // <-- one of "full", "summary"
  id: PropTypes.number.isRequired,
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

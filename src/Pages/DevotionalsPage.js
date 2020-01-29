import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { ArticleList, SearchForm, QuoteBlock } from '../library'
import { ArticleListData, QuoteBlockData } from '../library/data'

const DevotionalsPage = () => {
  const history = useHistory()
  const location = useLocation()
  const [formValue, setFormValue] = useState("")
  
  // get initial state
  const getInitialArticles = () => {
    let initialArticles = ArticleListData.articles
    if (location.search.match(/search/)) {
      let searchQuery = location.search.split("?search=")[1]
      initialArticles = ArticleListData.articles.filter(a => a.titleText.toLowerCase().match(searchQuery))
    }
    
    return initialArticles
  }
  const getInitialSearchText = () => location.search.match(/search/) ? location.search.split("?search=")[1] : ""

  const [articles, setArticles] = useState(getInitialArticles())
  const [searchText, setSearchText] = useState(getInitialSearchText())

  const handleChange = e => {
    // get DOM nodes
    const form = document.querySelector(".search-form__form")
    
    // handle input validation (must be more than a single character)
    if (form !== null && form !== undefined) {
      if (e.target.value.length > 1) {
        form.classList.remove('form--error')
        form.classList.add('form--valid')
      }
      else if (e.target.value === "") {
        form.classList.remove('form--valid', 'form--error')
      }
      else {
        form.classList.remove('form--valid')
        form.classList.add('form--error')
      }
    }

    // set form value
    setFormValue(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const searchTerm = formValue.toLowerCase()
    const filteredArticles = articles.filter(article => article.titleText.toLowerCase().match(searchTerm))
    setArticles(filteredArticles)
    setFormValue("")
    setSearchText(searchTerm)
    history.push(`/devotionals?search=${searchTerm}`)
  }

  const showAll = () => {
    setArticles(ArticleListData.articles)
    setFormValue("")
    setSearchText("")
    history.push('/devotionals')
  }

  return (
    <div className="slide-left-fade-in--medium">
      <QuoteBlock { ...QuoteBlockData.devotionalsPage } />
      <SearchForm
        searchText={ searchText }
        value={ formValue }
        handleChange={ handleChange }
        handleSubmit={ e => handleSubmit(e) }
        showAll={ showAll }
      />
      <ArticleList articles={ articles } />
    </div>
  )
}

export default DevotionalsPage
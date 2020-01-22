import React, { useState } from 'react'

import { ArticleList, SearchForm } from '../library'
import { ArticleListData } from '../library/data'

const DevotionalsPage = () => {
  const [formValue, setFormValue] = useState("")
  const [articles, setArticles] = useState(ArticleListData.articles)

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
    console.log("test")
    const searchTerm = formValue.toLowerCase()
    const filteredArticles = articles.filter(article => article.titleText.toLowerCase().match(searchTerm))
    console.log(filteredArticles)
    setArticles(filteredArticles)
  }

  return (
    <div className="slide-left-fade-in--medium">
      <SearchForm value={ formValue } handleChange={ handleChange } handleSubmit={ e => handleSubmit(e) } />
      <ArticleList articles={ articles } />
    </div>
  )
}

export default DevotionalsPage
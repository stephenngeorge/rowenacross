import React, { useState } from 'react'

import { ArticleList, SearchForm } from '../library'
import { ArticleListData } from '../library/data'

const DevotionalsPage = () => {
  const [formValue, setFormValue] = useState("")
  console.log(formValue)

  const handleChange = e => {
    // get DOM nodes
    const form = document.querySelector(".search-form__form")
    const submitBtn = document.querySelector(".search-form__submit-button")
    
    // handle input validation (must be more than a single character)
    if (form !== null && form !== undefined) {
      if (e.target.value.length > 1) {
        form.classList.remove('form--error')
        form.classList.add('form--valid')
        submitBtn.setAttribute("disabled", false)
      }
      else if (e.target.value === "") {
        form.classList.remove('form--valid', 'form--error')
        submitBtn.setAttribute("disabled", true)
      }
      else {
        form.classList.remove('form--valid')
        form.classList.add('form--error')
        submitBtn.setAttribute("disabled", true)
      }
    }
    
    // set form value
    setFormValue(e.target.value)
  }

  return (
    <div className="slide-left-fade-in--medium">
      <SearchForm value={ formValue } handleChange={ handleChange } />
      <ArticleList { ...ArticleListData } />
    </div>
  )
}

export default DevotionalsPage
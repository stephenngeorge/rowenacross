import React from 'react'

import { ArticleList, SearchForm } from '../library'
import { ArticleListData } from '../library/data'

const DevotionalsPage = () => (
  <div className="slide-left-fade-in--medium">
    <SearchForm />
    <ArticleList { ...ArticleListData } />
  </div>
)

export default DevotionalsPage
import React from 'react'

import { ArticleList } from '../library'
import { ArticleListData } from '../library/data'

const DevotionalsPage = () => (
  <div className="slide-left-fade-in--medium">
    <ArticleList { ...ArticleListData } />
  </div>
)

export default DevotionalsPage
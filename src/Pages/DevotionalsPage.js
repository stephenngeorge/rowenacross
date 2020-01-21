import React from 'react'

import { ArticleList } from '../library'
import { ArticleListData } from '../library/data'

const DevotionalsPage = () => (
  <>
    <ArticleList { ...ArticleListData } />
  </>
)

export default DevotionalsPage
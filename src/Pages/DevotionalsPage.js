import React from 'react'

import { Article } from '../library'
import { ArticleData } from '../library/data'

const DevotionalsPage = () => (
  <>
    <Article { ...ArticleData }>
      <p>Some text</p>
    </Article>
  </>
)

export default DevotionalsPage
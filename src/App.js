import React from 'react'
import './App.scss'

import { CoverImage } from './library'
import { CoverImageData } from './library/data'

const App = () => (
  <div className="App">
    <CoverImage { ...CoverImageData } />
  </div>
)

export default App

import React from 'react'
import './App.scss'

import { QuoteBlock } from './library'
import { QuoteBlockData } from './library/data'

const App = () => (
  <div className="App">
    <QuoteBlock { ...QuoteBlockData } />
  </div>
)

export default App

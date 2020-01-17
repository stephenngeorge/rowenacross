import React from 'react'
import './App.scss'

import { IconsBlock } from './library'
import { IconsBlockData } from './library/data'

const App = () => (
  <div className="App">
    <IconsBlock { ...IconsBlockData } />
  </div>
)

export default App

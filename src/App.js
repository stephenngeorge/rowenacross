import React from 'react'
import './App.scss'

import { ImageBlock } from './library'
import { ImageBlockData } from './library/data'

const App = () => (
  <div className="App">
    <ImageBlock { ...ImageBlockData } />
  </div>
)

export default App

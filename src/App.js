import React from 'react'
import './App.scss'

import { Icon } from './library'
import { IconData } from './library/data'

const App = () => (
  <div className="App">
    <Icon { ...IconData } />
  </div>
)

export default App

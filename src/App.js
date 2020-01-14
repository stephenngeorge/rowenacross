import React from 'react'
import './App.scss'

import { MainMenu } from './library'
import { MainMenuData } from './library/data'

const App = () => (
  <div className="App">
    <MainMenu { ...MainMenuData } />
  </div>
)

export default App

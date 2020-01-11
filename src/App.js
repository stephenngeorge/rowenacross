import React from 'react'
import './App.scss'

import { Card, CardBlock } from './library'
import { CardData } from './library/data'

const App = () => (
  <div className="App">
    <CardBlock>
      <Card { ...CardData.cardBlockOne } />
      <Card { ...CardData.cardBlockTwo } />
      <Card { ...CardData.cardBlockThree } />
    </CardBlock>
  </div>
)

export default App

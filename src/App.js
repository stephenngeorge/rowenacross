import React from 'react'
import './App.scss'

import { Card, CardBlock, IconsBlock, ImageAndText } from './library'
import { CardData, IconsBlockData, ImageAndTextData } from './library/data'

const App = () => (
  <div className="App">
    <CardBlock>
      <Card {...CardData.cardBlockOne} />
      <Card {...CardData.cardBlockTwo} />
      <Card {...CardData.cardBlockThree} />
    </CardBlock>
    <ImageAndText { ...ImageAndTextData }>
      <p className="text--lead">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Fusce mollis sollicitudin commodo. Fusce tincidunt leo dictum, 
        tempor mauris vel, eleifend metus. Praesent quam odio, fringilla 
        vitae ligula in, euismod fringilla tortor. Donec mollis quam quis 
        nunc tempus, sit amet pharetra purus tempus. Aenean ut magna eros. 
        Aenean non nunc nunc. Vivamus aliquam imperdiet lacus nec placerat. 
        Sed non convallis lacus, eget porttitor lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis 
        sollicitudin commodo. Fusce tincidunt leo dictum, tempor mauris vel, 
        eleifend metus. Praesent quam odio, fringilla vitae ligula in, euismod 
        fringilla tortor. Donec mollis quam quis nunc tempus, sit amet pharetra 
        purus tempus. Aenean ut magna eros. Aenean non nunc nunc. Vivamus 
        aliquam imperdiet lacus nec placerat. Sed non convallis lacus, eget 
        porttitor lacus.
      </p>
      <IconsBlock { ...IconsBlockData } />
    </ImageAndText>
  </div>
)

export default App

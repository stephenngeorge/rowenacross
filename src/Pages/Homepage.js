import React from 'react'

import {
  Card,
  CardBlock,
  Hero,
  IconsBlock,
  ImageAndText,
  ImageBlock,
  QuoteBlock,
  Testimonial
} from '../library'

import {
  CardData,
  HeroData,
  IconsBlockData,
  ImageAndTextData,
  ImageBlockData,
  QuoteBlockData,
  TestimonialData
} from '../library/data'

const Homepage = () => (
  <div className="slide-left-fade-in--slow">
    <Hero { ...HeroData } />
    <CardBlock>
      <Card { ...CardData.cardBlockOne } />
      <Card { ...CardData.cardBlockTwo } />
      <Card { ...CardData.cardBlockThree } />
    </CardBlock>
    <ImageAndText { ...ImageAndTextData }>
      <p className="text--lead">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis 
        sollicitudin commodo. Fusce tincidunt leo dictum, tempor mauris vel, 
        eleifend metus. Praesent quam odio, fringilla vitae ligula in, euismod 
        fringilla tortor. Donec mollis quam quis nunc tempus, sit amet pharetra 
        purus tempus. Aenean ut magna eros. Aenean non nunc nunc. Vivamus 
        aliquam imperdiet lacus nec placerat. Sed non convallis lacus, eget 
        porttitor lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis 
        sollicitudin commodo. Fusce tincidunt leo dictum, tempor mauris vel, eleifend 
        metus. Praesent quam odio, fringilla vitae ligula in, euismod fringilla tortor. 
        Donec mollis quam quis nunc tempus, sit amet pharetra purus tempus. Aenean ut 
        magna eros. Aenean non nunc nunc. Vivamus aliquam imperdiet lacus nec placerat. 
        Sed non convallis lacus, eget porttitor lacus.
      </p>
      <IconsBlock { ...IconsBlockData.homepage } />
    </ImageAndText>
    <ImageBlock { ...ImageBlockData.homepage } />
    <Testimonial { ...TestimonialData.homepage } />
    <QuoteBlock { ...QuoteBlockData.homepage } />
  </div>
)

export default Homepage
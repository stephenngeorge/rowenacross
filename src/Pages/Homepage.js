import React from 'react'

import {
  Card,
  CardBlock,
  Hero,
  IconsBlock,
  ImageAndText,
  ImageBlock,
  QuoteBlock,
  Testimonial,
  TextLink
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
        My life before Christ was small yet looked full. Now my life in Christ is full 
        but the world may describe it as small as it is focused solely on Him. Read Ro's 
        full story on the devotionals page.
      </p>
      <p>
        Growing up, I knew that something in me lacked, and I searched for it in all the 
        wrong places. I desperately searched for my identity in how loved I was by men, 
        and people in general! I was a people pleaser and took all my self esteem from 
        other people’s opinions of me - a very dangerous thing to do as it gives people a 
        kind of power over you that no-one should have. A hedonistic party lifestyle seemed 
        the answer, but things started to change when I met Ron. He always been the friend 
        who had loved to party.

        Even though neither of us had never really been to church, we knew we wanted to 
        get married in church and I’ve never forgotten how the kind the vicar was to us! 
        We decided to have a baby, but there were major complications, I almost didn’t 
        survive and ended up in a coma. My parents had recently started attending church 
        and asked everyone to pray. Ron prayed too, and the moment he did, I opened my eyes! 
        The doctors told me it was a miracle. The short version is that we moved to Devon 
        and met some wonderful Christian people that told us about Jesus. We came to understand 
        that Jesus loves us, and now I want to tell everyone else He loves them too!
      </p>
      <IconsBlock { ...IconsBlockData.homepage } />
      <TextLink linkText="Read the full story" linkUrl="/devotionals?search=story" linkVariation="internal" />
    </ImageAndText>
    <ImageBlock { ...ImageBlockData.homepage } />
    <Testimonial { ...TestimonialData.homepage } />
    <QuoteBlock { ...QuoteBlockData.homepage } />
  </div>
)

export default Homepage
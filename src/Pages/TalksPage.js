import React from 'react'

import { Iframe, PageBanner, QuoteBlock } from '../library'
import { IframeData, PageBannerData, QuoteBlockData } from '../library/data'

const TalksPage = () => {
  return (
    <div className="slide-right-fade-in--medium">
      <PageBanner { ...PageBannerData.talks }>
        <p>
          Listen to some of Ro's talks below. Ro has spoken frequently 
          in church, on the radio and at Christian Events all over the 
          UK.
        </p>
      </PageBanner>
      <QuoteBlock { ...QuoteBlockData.talksPage } />
      <Iframe { ...IframeData } />
    </div>
  )
}

export default TalksPage
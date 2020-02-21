import React from 'react'

import { PageBanner } from '../library'
import { PageBannerData } from '../library/data'

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
    </div>
  )
}

export default TalksPage
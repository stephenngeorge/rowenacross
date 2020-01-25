import React from 'react'

import { IconsBlock, ImageBlock, TitleGradient, Testimonial } from '../library'
import { IconsBlockData, ImageBlockData, TitleGradientData, TestimonialData } from '../library/data'

const ContactPage = () => (
  <div className="slide-left-fade-in--medium contact-page">
    <div className="text-container--very-narrow">
      <TitleGradient { ...TitleGradientData.contactPage } />
      <p className="color--dark text--lead">
        If you've got any questions for Rowena, or would like to chat more 
        about the possibility of her speaking or teaching at your event, 
        then she would love to hear from you. Please follow the links below, get in 
        touch and Rowena will get back to you as soon as possible.
      </p>
      <IconsBlock { ...IconsBlockData.contactPage } />
    </div>
    <ImageBlock { ...ImageBlockData.contactPage } />
    <Testimonial { ...TestimonialData.contactPage } />
  </div>
)

export default ContactPage
import React from 'react'
import './App.scss'

import { Testimonial } from './library'
import { TestimonialData } from './library/data'

const App = () => (
  <div className="App">
    <Testimonial { ...TestimonialData } />
  </div>
)

export default App

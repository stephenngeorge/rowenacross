import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.scss'

import { Page } from './library'
import {
  ContactPage,
  DevotionalsPage,
  Homepage,
  TalksPage
} from './Pages'

const App = () => (
  <div className="App">
    <Page>
      <Switch>
        <Route path="/" component={ Homepage } exact />
        <Route path="/devotionals/:title?" component={ DevotionalsPage } />
        <Route path="/contact" component={ ContactPage } />
        <Route path="/talks" component={ TalksPage } />
      </Switch>
    </Page>
  </div>
)

export default App

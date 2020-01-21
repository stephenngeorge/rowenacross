import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.scss'

import { Page } from './library'
import { DevotionalsPage, Homepage } from './Pages'

const App = () => (
  <div className="App">
    <Page>
      <Switch>
        <Route path="/" component={ Homepage } exact />
        <Route path="/devotionals/:title?" component={ DevotionalsPage } />
      </Switch>
    </Page>
  </div>
)

export default App

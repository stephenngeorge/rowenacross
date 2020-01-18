import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.scss'

import { Page } from './library'
import { Homepage } from './Pages'

const App = () => (
  <div className="App">
    <Page>
      <Switch>
        <Route path="/" component={ Homepage } exact />
      </Switch>
    </Page>
  </div>
)

export default App

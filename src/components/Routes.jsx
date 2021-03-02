import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch } from 'react-router-dom'

import Menu from './Menu.jsx'
import LightBulb from './LightBulb.jsx'
import Palette from './Palette.jsx'
import Counter from './Counter.jsx'
import NotFound from './NotFound.jsx'

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Menu} />
        <Route path='/light' component={LightBulb} />
        <Route path='/palette' component={Palette} />
        <Route exact path='/counter' component={Counter} />
        <Route path='/counter/:count' component={Counter} />
        <Route path='*' component={NotFound}/>
      </Switch>
    </Router>
  )
}

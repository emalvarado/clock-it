import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Homepage from './components/Homepage/Homepage'
import NewPunch from './components/NewPunch/NewPunch'


export default (
  <Switch>
    <Route exact path='/' component={Homepage} />
    <Route path='/newpunch' component={NewPunch} />
  </Switch>
)
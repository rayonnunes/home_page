import React from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom'
import Home from '../Views/Home'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  )
}

export default Routes
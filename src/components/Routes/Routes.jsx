import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import MainApp from '../MainApp/MainApp'
import NotFound from '../NotFound/NotFound'

const Routes = () => (
  <main className='main-container'>
    <Switch>
      <Route exact path='/' component={MainApp} />
      <Route path='/404' component={NotFound} />
      <Redirect from='*' to='/404' />
    </Switch>
  </main>
)

export default Routes

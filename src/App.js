import './App.css'
import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import About from './components/pages/About'
import User from './components/users/User'
import GithubState from './context/github/githubState'

const App = () => {
  const [alert, setAlert] = useState('')

  const onAlert = msg => {
    setAlert(msg)
  }

  return (
    <GithubState>
      <div className="App">
        <BrowserRouter>
          <Navbar title="Github Finder"/>
          <div className="container">
            <Switch>
              <Route exact path="/" render={() =>
                (
                  <>
                    {alert && <Alert alert={alert}/>}
                    <Search setAlert={onAlert}/>
                    <Users/>
                  </>
                )
              }/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/user/:login" render={props =>
                <User {...props}/>
              }/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    </GithubState>
  )
}

export default App

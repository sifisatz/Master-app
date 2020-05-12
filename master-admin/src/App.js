import React, { Component } from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom'

import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component';

import { auth } from './firebase/firebase.utils'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null
    }
  }
  unsubscrubeFromAuth = null
  componentDidMount() {
    this.unsubscrubeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log(user)

    })
  }
  componentWillUnmount() {
    this.unsubscrubeFromAuth()
  }
  render() {
    return (
      <div >
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

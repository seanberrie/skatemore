import React, { Component } from 'react'
import './App.css'
import Home from './components/Home'
import Layout from './components/Layout'
import { Switch, Route } from 'react-router-dom'
import httpClient from './utilities/httpClient'
import Login from './components/Login'
import Signup from './components/Signup'
import Logout from './components/Logout'
import Edit from './components/Edit'
import Profile from './components/Home/Map/Profile/index.js'
import axios from 'axios'
class App extends Component {

  state = {
    currentUser: httpClient.getCurrentUser(),
    user: null
  }

  onAuthSuccess = () => {
    this.setState({currentUser:httpClient.getCurrentUser()})
  }

  logOut = () => {
    httpClient.logout()
    this.setState({ currentUser: null })
  }
  componentDidMount() {
    if (this.state.currentUser !== null ) {
    axios.get(`/api/users/${this.state.currentUser._id}`)
        .then( res => {
          this.setState({user:res.data.payload})
        });}}

  render() {
    return (
      <Layout currentUser={this.state.currentUser}>
        <Switch>
          <Route exact path="/" render={(props) => {
						return <Home {...props} currentUser={this.state.currentUser} onLoginSuccess={this.onAuthSuccess} />}}/>
          <Route exact path='/logout' render={() => {
            return <Logout logOut={this.logOut} /> }} />
          <Route exact path="/login" render={(props) => {
            return <Login {...props} onLoginSuccess={this.onAuthSuccess} />}}/>
          <Route path='/signup' render={(props) => {
            return <Signup {...props} onSignupSuccess={this.onAuthSuccess} />}}/>
          <Route exact path='/edit' render={(props) => {
						return <Edit {...props} currentUser={this.state.currentUser} onLoginSuccess={this.onAuthSuccess} logOut={this.logOut} />}}/>
          <Route exact path='/profile' render={(props) => {
            return <Profile {...props} currentUser={this.state.currentUser} onLoginSuccess={this.onAuthSuccess} user={this.state.user} logOut={this.logOut} />
					}}/>   
        </Switch>
      </Layout>
    );
  }
}

export default App;

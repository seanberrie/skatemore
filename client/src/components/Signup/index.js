import React, { Component } from 'react'
import httpClient from '../../utilities/httpClient'

export default class SignUp extends Component {
    state = {
        username: "",
        email: "",
        password: ""
    }

    handleChange = (e) => {
        let { name, value } = e.target
        this.setState({ [name]: value })
        
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        let user = await httpClient.authenticate(this.state, "/api/users")
        if (user) {
            this.props.onSignupSuccess()
            this.props.history.push('/')
        }


    }

  render () {
      let { username, email, password } = this.state
    return (
      <div className="hero">
      <div className="login">
        <h1 className="title">Skate More</h1>
        <h3>Sign Up</h3>
        <div className='row'>
          <div>
            <form onSubmit={this.handleSubmit}>
              <label>Username: </label>
              <input
              className='input'
                type='text'
                name='username'
                placeholder='Whats your name?'
                onChange={this.handleChange}
                value={username}
              />
              <label>Email: </label>
              <input
              className='input'
                type='text'
                name='email'
                placeholder='Whats Your Email?'
                onChange={this.handleChange}
                value={email}
              />
              <label>Password: </label>
              <input
              className='input'
                type='password'
                name='password'
                placeholder='Secret Password...'
                onChange={this.handleChange}
                value={password}
              />
              <input className="btn" type='submit' />
            </form>
          </div>
        </div>
      </div>
      </div>

    )
  }
}

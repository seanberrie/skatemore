import React, { Component } from 'react'
import httpClient from '../../utilities/httpClient';


export default class Edit extends Component {
    
    state= {
        username: this.props.currentUser.username,
        email: this.props.currentUser.email,
        password: ""
    }
    handleChange = (e) => {
        let { name, value } = e.target
        this.setState({[name]: value })
       console.log(this.state.name)
    }
    handleSubmit = async (e) => {
        e.preventDefault()
        let user = await httpClient.updateUser(this.state, `/api/users/${this.props.currentUser._id}`);
        if (user) {
            this.props.onLoginSuccess()
            this.props.history.push('/')
        }
    }

    handleDelete = async (e) => {
        e.preventDefault()
        let user = await httpClient.deleteUser(this.state,`/api/users/${this.props.currentUser._id}`)
        if (user) {
          this.props.history.push('/')
          this.props.logOut()
    
        }
    }
  render () {

    let { username, email, password } = this.state
    return (
      <div className="hero">
      <div className="login">
        <h1>Skate More</h1>
        <h3>Edit Profile</h3>
        <div className='row'>
          <div className='column'>
            <form onSubmit={this.handleSubmit}>
              <label>Username: </label>
              <input
                className="input"
                type='text'
                name='username'
                onChange={this.handleChange}
                value={username}
              />
              <label>Email: </label>
              <input
                className="input"
                type='text'
                name='email'
                onChange={this.handleChange}
                value={email}
              />
              <label>New Password: </label>
              <input
                className="input"
                type='password'
                name='password'
                placeholder='Secret Password...'
                onChange={this.handleChange}
                value={password}
              />
              
              <input type='submit' className="btn" />
            </form>
           
            <form onSubmit={this.handleDelete}>
              <input type="submit" value="Delete Profile" className="btn" />
            </form>
          </div>
        </div>
        </div>
      </div>

    )
  }
}

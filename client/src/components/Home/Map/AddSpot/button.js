import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Button extends Component {
    state = {
        addSpot: [],
        userspots: []
    }
    send = () => {

      console.log('fzf');

}   
    handleSubmit = async (e) => {
      
        e.preventDefault();
        debugger
        let { place, user } = this.props;
        debugger
        this.setState({ addSpot: place.id, userspots: user._id })

        debugger
        let res = await axios.get(`/api/spots/${place.id}`)
        // Check the returned spot array from our api
        if (res.data.spot.length === 0) {
            // Make a new spot
            let newSpot = await axios.post(`/api/spots`, {spotId: `${place.id}`, userspots: `${user.id}`})
        }else {
          console.log(place.id)
        }
      }
  render () {
    let { user } = this.props
    return (
      <div>
        { user === null
          ? (<Link to="/login">
          <Button renderAs="button">
            <span>Login</span>
          </Button>
        </Link>)
          :          
      (<button type="button" onClick={this.handleSubmit}>Click Me</button>
        )
          }
      </div>
    )
  }
}

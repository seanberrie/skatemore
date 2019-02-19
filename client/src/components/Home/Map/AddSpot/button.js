import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Button extends Component {
    state = {
        addSpot: '',
        userspots: ''
    }
    handleSubmit = async (e) => {
      
      let {user, place} = this.props
        e.preventDefault();
        let res = await axios.get(`/api/spots/${place.id}`)
        // Check the returned spot array from our api
        if (res.data.spot.length === 0 || res.data.spot[0].userspots.length === 0) {
            // Make a new spot
            let newSpot = await axios.post(`/api/spots`, {spotId: `${place.id}`, userspots: `${user._id}`, spotname: `${place.name}`, lat: `${place.location.lat}`, lng: `${place.location.lng}`})
        }else {
          console.log(place.id)
        }
      }
  render () {
    let { user } = this.props
    
    return (
      <div>
        { user === null || undefined
          ? (<Link to="/login">
          <Button renderAs="button">
            <span>Login</span>
          </Button>
        </Link>)
          :          
      (<button type="button" onClick={this.handleSubmit}>Add Spot</button>
        )
          }
      </div>
    )
  }
}

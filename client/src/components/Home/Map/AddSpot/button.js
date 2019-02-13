import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Button extends Component {
    state = {
        addSpot: false
    }

    handleSubmit = async (e) => {
      
        e.preventDefault();
        debugger
        let { place } = this.props;

        this.setState({ addSpot: !this.state.addSpot})


        let res = await axios.get(`/api/spots/${place.id}`)
        // Check the returned brewery array from our api
        if (res.data.spot.length === 0) {
            // Make a new brewery
            let newSpot = await axios.post(`/api/spots`, {spotId: `${place.id}`})
        }else {
          console.log(place.id)
        }
      }
  render () {
    let { place, user } = this.props
    return (
      <div>
        { user !== null
          ? (<form onSubmit={this.handleSubmit} className='button-small-black'>
          <input
            type='submit'
            name='id'
            value="Add Spot" readOnly
            />
            </form>)
          :          
      (<Link to="/login">
      <Button renderAs="button">
        <span>Login</span>
      </Button>
    </Link>
        )
          }
      </div>
    )
  }
}

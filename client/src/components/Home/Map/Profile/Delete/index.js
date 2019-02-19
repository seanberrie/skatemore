import React, { Component } from 'react'
import axios from 'axios'

export default class Delete extends Component {
    handleDelete = (e) => {
        debugger
        let { spotId } = this.props
        debugger
        e.preventDefault()
        axios.delete(`/api/spots/${spotId}`)
        .then( res => {
            debugger
            this.setState({ results:res.data.deletedSpot })
          }
          )
          }
  render () {
    return (
      <div>
        <button className='deletebutton' type='button' onClick={this.handleDelete}>X</button>
      </div>
    )
  }
}

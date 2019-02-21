import React, { Component } from 'react'
import axios from 'axios'

export default class Delete extends Component {
    state = {
        deleted: false
    }
    handleDelete = (e) => {
        let { spotId } = this.props
        e.preventDefault()
        axios.delete(`/api/spots/${spotId}`)
        .then( res => {
            this.setState({ deleted: true })
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

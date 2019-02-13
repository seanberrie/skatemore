import React, { Component } from 'react'
import Button from './AddSpot/button.js'

export default class Skateshoppop extends Component {
  render () {
    let { selectedShop, user } = this.props
    return (
      <div className='popup'
        onClick={e => {
    	e.stopPropagation()
          e.preventDefault()
        }}
      >
        <div>{selectedShop.name}</div>
        <div>{selectedShop.location.formattedAddress[0]}</div>
        <div>{selectedShop.location.formattedAddress[1]}</div>
        <Button place={selectedShop} user={user} />
      </div>
    )
  }
}

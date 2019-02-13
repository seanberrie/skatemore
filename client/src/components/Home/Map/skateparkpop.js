import React, { Component } from 'react'
import Button from './AddSpot/button.js'

export default class Skateparkpop extends Component {
  render () {
    let { selectedPark, user } = this.props
    return (
      <div className='popup'
        onClick={e => {
    	  e.stopPropagation()
          e.preventDefault()
        }}
      >
        <div>{selectedPark.name}</div>
        <div>{selectedPark.location.formattedAddress[0]}</div>
        <div>{selectedPark.location.formattedAddress[1]}</div>
        <Button place={selectedPark} user={user} />

      </div>
    )
  }
}

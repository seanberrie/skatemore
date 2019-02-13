import React, { Component } from 'react'

export default class Skateshoppop extends Component {
  render () {
    let { selectedShop } = this.props
    debugger
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
        <button type="submit">Add Place</button>
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class Popup extends Component {
  render () {
    return (
      <div className='popup'
        onClick={e => {
    	e.stopPropagation()
          e.preventDefault()
        }}
      >
    <div>You Are Here!</div>
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class Popup extends Component {
  render () {
    return (
      <div className='popup'
        onClick={ev => {
    	ev.stopPropagation()
          ev.preventDefault()
        }}
      >
        <a href='http://www.google.com' target='_blank'>facebook</a>
    Popup
      </div>
    )
  }
}

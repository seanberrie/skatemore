import React, { Component } from 'react'

export default class Yourposition extends Component {
  render () {
    return (
      <div>
        <div className='marker-icon' onClick={this.props.handleClick} />
      </div>
    )
  }
}

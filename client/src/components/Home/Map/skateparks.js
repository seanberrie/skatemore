import React, { Component } from 'react'

import { skateparkStyle } from './skateparkStyle.js'

export default class Skateparks extends Component {
  render () {
    return (
      <div style={skateparkStyle} onClick={this.props.handleClick}>
      
      </div>
    )
  }
}

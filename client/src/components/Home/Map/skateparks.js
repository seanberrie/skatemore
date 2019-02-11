import React, { Component } from 'react'

import { skateparkStyle } from './skateparkStyle.js'

export default class Skateparks extends Component {
  render () {
    return (
      <div style={skateparkStyle}>
        {this.props.text}
      </div>
    )
  }
}

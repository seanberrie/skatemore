import React, { Component } from 'react'
import { skateshopStyle } from './skateshopStyle.js'

export default class Skateshops extends Component {
  render () {
    return (
      <div style={skateshopStyle}>
        {this.props.text}
      </div>
    )
  }
}

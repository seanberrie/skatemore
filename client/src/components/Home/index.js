import React, { Component } from 'react'
import Map from './Map'


export default class Home extends Component {
   state = {
      user:null
   }


   render () {
    return (
        <div>
        <h1>hi</h1>
        <Map />
        </div>
    )
  }
}

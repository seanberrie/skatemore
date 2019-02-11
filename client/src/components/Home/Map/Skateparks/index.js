import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

const CustomMarker = ({ text }) => <p>{text}</p>

export default class Skateparks extends Component {
  render () {
    let { skateparks } = this.props
    return (
      <GoogleMapReact>

        { skateparks.map((skatepark, i) => (
          <CustomMarker
            key={`marker_${i}`}
            lat={skatepark.location.lat}
            lng={skatepark.location.lng}
            text={skatepark.name}
          />))}
      </GoogleMapReact>
    )
  }
}

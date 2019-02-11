import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import Skateparks from './skateparks.js'
import Skateshops from './skateshops.js'
import Popup from './popup.js'
require('dotenv').config()

const AnyReactComponent = ({ text }) => <div>{text}</div>


const Marker = ({ onClick, showPopup }) => (
	<div>
    <div className="marker-icon" onClick={onClick}></div>
	  {showPopup && <Popup />}
	</div>
)
 
class Map extends Component {
    state = {
    	showPopup: false,
    }
    static defaultProps = {
        center: {lat: 59.95, lng: 30.33},
        zoom: 11
      }
closePopup = () => this.setState({ showPopup: false });
  
togglePopup = () => this.setState(prevState => 
  	({ showPopup: !prevState.showPopup })
  )
    
  render () {
      let { center2, skateparks, skateshops} = this.props
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
          defaultCenter={this.props.center}
          center={center2}
          defaultZoom={11}
          onClick={this.closePopup}
        >
        <Marker lat={center2.lat} lng={center2.lng}
            onClick={this.togglePopup}
            showPopup={this.state.showPopup}
          />
         { skateparks.map((skatepark, i) => (
          <Skateparks
            key={`marker_${i}`}
            lat={skatepark.location.lat}
            lng={skatepark.location.lng}
            onClick={this.togglePopup}
            showPopup={this.state.showPopup}
          />))}
          { skateshops.map((skateshop, i) => (
          <Skateshops
            key={`marker_${i}`}
            lat={skateshop.location.lat}
            lng={skateshop.location.lng}
          />))}
          {/* <AnyReactComponent
            lat={center2.lat}
            lng={center2.lng}
            text={'You are Here'}
          /> */}
        </GoogleMapReact>
      </div>
    )
  }
}

export default Map

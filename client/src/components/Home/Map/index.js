import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
require('dotenv').config()
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={70.955413}
            lng={30.337844}
            text={'Sean Berrie'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;
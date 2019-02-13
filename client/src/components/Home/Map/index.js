import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import Skateparks from './skateparks.js'
import Skateshops from './skateshops.js'
import Popup from './popup.js'
import Yourposition from './yourpostion.js';
import Skateparkpop from './skateparkpop.js';
import Skateshoppop from './skateshoppop.js';
require('dotenv').config()
 
class Map extends Component {
    state = {
        showPopup: false,
        parkPopup: false,
        shopPopup: false,
        selectedPark: null,
        selectedShop: null,
    }
    static defaultProps = {
        center: {lat: 59.95, lng: 30.33},
        zoom: 11
      }
    closePopup = () => this.setState({ showPopup: false, parkPopup: false, shopPopup: false, selectedPark: null, selectedShop: null });
  
    togglePopup = () => this.setState({ showPopup: true, shopPopup: false, parkPopup: false, selectedPark: null, selectedShop: null})
    toggleparkPopup = (skatepark, e) => this.setState({ showPopup: false, shopPopup: false, parkPopup: true, selectedPark: skatepark, selectedShop: null })
    toggleshopPopup = (skateshop, e) => this.setState({ showPopup: false, shopPopup: true, parkPopup: false, selectedShop: skateshop, selectedPark: null })
    
  render () {
      let { center2, skateparks, skateshops, user} = this.props
      let { showPopup, parkPopup, selectedShop, selectedPark, shopPopup} = this.state
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


            { skateparks.map((skatepark, i) => (
             <Skateparks
             key={`marker_${i}`}
             lat={skatepark.location.lat}
             lng={skatepark.location.lng}
             handleClick={() => this.toggleparkPopup(skatepark)}
             parkPopup={parkPopup}
             title={skatepark.name}
             />))}

             {parkPopup?
             <Skateparkpop
             user={user}
             selectedPark={selectedPark}
             lat={selectedPark.location.lat}
             lng={selectedPark.location.lng}
              />
             :null
             }

            <Yourposition lat={center2.lat} lng={center2.lng}
                    handleClick={this.togglePopup}
                    showPopup={showPopup}
                />
            {showPopup?
                <Popup lat={center2.lat} lng={center2.lng}/>
                :null
                }

            { skateshops.map((skateshop, i) => (
              <Skateshops
              key={`marker_${i}`}
              lat={skateshop.location.lat}
              lng={skateshop.location.lng}
              handleClick={() => this.toggleshopPopup(skateshop)}
             shopPopup={shopPopup}
              />))}

              {shopPopup?
              <Skateshoppop
              user={user}
              selectedShop={selectedShop}
              lat={selectedShop.location.lat}
              lng={selectedShop.location.lng}/>
             :null
             }


        </GoogleMapReact>
      </div>
    )
  }
}

export default Map

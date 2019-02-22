import React, { Component } from 'react';
import axios from 'axios';
import Delete from './Delete/index.js'
import GoogleMapReact from 'google-map-react'
import Spots from './Spots/index.js'
require('dotenv').config()


class Profile extends Component {
    state = {
        results: [],
        loading: true,
        center2: {
            lat:"",
            lng:""
        },
    }

    async componentWillMount() {
        let { user } = this.props
        let coordinates = await axios.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.REACT_APP_API_KEY}`);
    
        try {
            let places = await axios.get(`api/spots`);
            let { data: { payload } } = await axios.get(`/api/users/${user._id}`)

            let results = places.data.spots.filter(spot => {
                let found = payload.spots.find(id => id === spot.spotId);
                if (found) return spot;
            })
            this.setState({ loading: false, results, center2: {lat:coordinates.data.location.lat, lng:coordinates.data.location.lng},})
        } catch(err) {
            console.log(err);
        }
    }
    static defaultProps = {
        center: {lat: 59.95, lng: 30.33},
        zoom: 7
      }
    

    render() {
        let { loading, results, center2 } = this.state
        
    
         
        if (loading) return <div className="loader fade-out">
        <h1>Skate More</h1>
        <h4>Loading...</h4>
    </div>
        return (
            <div className="hero">
                <h1 className="title">{ this.props.user.username }'s Spots</h1>
                <div className="row">
                    <div style={{ height: '60vh', width: '40%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
                        defaultCenter={this.props.center}
                         defaultZoom={7}
                         center={center2}
                     >

                     { results.map((spot, i) => (
                     <Spots
                        key={`marker_${i}`}
                        lat={spot.lat}
                        lng={spot.lng}
                        />))}

                     </GoogleMapReact>
                    </div>
                    <div className="border">
                        {results.map(( spot, i ) => {
                            return<div className="imgcon" key={i}>
                            <h5>{spot.spotname}</h5>
                            <p>{spot.lat}</p>
                            <p>{spot.lng}</p>
                            <Delete spotId={spot._id}/>
                            </div>
                        })} 
                    </div>
                </div>
            </div>
            )
        }
    
}

export default Profile;
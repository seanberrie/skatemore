import React, { Component } from 'react';
import axios from 'axios';
import Delete from './Delete/index.js'
import GoogleMapReact from 'google-map-react'
require('dotenv').config()


class Profile extends Component {
    state = {
        results: [],
        loading: true,
    }

    async componentWillMount() {
        let { user } = this.props
    debugger
        try {
            let places = await axios.get(`api/spots`);
            let { data: { payload } } = await axios.get(`/api/users/${user._id}`)

            let results = places.data.spots.filter(spot => {
                let found = payload.spots.find(id => id === spot.spotId);
                if (found) return spot;
            })
            this.setState({ loading: false, results })
        } catch(err) {
            console.log(err);
        }
    }
    

    render() {
        let { loading, results } = this.state
        
    debugger
         
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
                        defaultCenter={{lat: 59.95, lng: 30.33}}
                         defaultZoom={11}
                     >
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
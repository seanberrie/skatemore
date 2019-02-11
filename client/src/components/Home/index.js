import React, { Component } from 'react'
import Map from './Map'
import axios from 'axios'


export default class Home extends Component {
   state = {
        user:null,
        center2: {
                lat:"",
                lng:""
            },
        loading: false,
        skateparks: [],
        skateshops: []
   }

async componentDidMount() {
    let coordinates = await axios.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.REACT_APP_API_KEY}`);
    try {   
        debugger
        let results = await axios.get(`/skateparks?lat=${coordinates.data.location.lat}&lng=${coordinates.data.location.lng}`);
        debugger
        let results2 = await axios.get(`/skateshops?lat=${coordinates.data.location.lat}&lng=${coordinates.data.location.lng}`);
        this.setState({center2: {lat:coordinates.data.location.lat, lng:coordinates.data.location.lng}, loading: true, skateparks: results.data.data.response.venues, skateshops: results2.data.data.response.venues})
        debugger
    } catch(err) {
        console.error(err);
    } 
}
   render () {
       let { center2, loading, skateparks, skateshops } = this.state;
    return (
        <div>
        {loading
            ? <Map center2={center2} skateparks={skateparks} skateshops={skateshops} />
            : <div>Loading...</div>
        }
        </div>
    )
  }
}

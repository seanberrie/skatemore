import React, { Component } from 'react';
import axios from 'axios';


class Profile extends Component {
    state = {
        results: [],
        loading: true,
    }

    async componentDidMount() {
        let { user } = this.props
    
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
    
         // Iterate through the filteredBrewery array and display info from each
        if (loading) return <div>hi</div>
        return (
            <div>
                <h1> { this.props.user.username } Profile </h1>
                <div className="row">
                    <ul>
                        {results.map(( spot, i ) => {
                            return<div key={i}>
                            <h5>{spot.spotname}</h5>
                            <p>{spot.lat}</p>
                            <p>{spot.lng}</p>
                            </div>
                        })} 
                    </ul>
                </div>
            </div>
            )
        }
    
}

export default Profile;
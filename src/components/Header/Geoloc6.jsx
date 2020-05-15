import React from 'react';
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import PropTypes from "prop-types";

class Geoloc6 extends React.Component {
    
    componentDidMount(){
        if(this.props.centerAroundCurrentLocation){
            if(navigator && navigator.geolocation){
                navigator.geolocation = pos.coords;
                this.setState({
                    currentLocation: {
                        lat: coords.latitude,
                        lng: coords.longitude
                    }
                })
            }
        }
        this.loadMap();
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.google !== this.props.google){
            this.loadMap();
        }
        if(prevState.currentLocation !== this.state.currentLocation){
            this.recenterMap();
        }
    }
    recenterMap(){
        const map = this.map;
        const curr = this.state.currentLocation;

        const google = this.props.google;
        const maps = google.maps;

        if(map){
            let center = new maps.LatLng(curr.lat, curr.lng)
            map.panTo(center)
        }
    }

    render() {
        return(
            <div>
                <Map google={this.props.google}/>
            </div>
        )
    }
}

Map.propTypes = {
    google: PropTypes.object,
    zoom: PropTypes.number,
    initialCenter: PropTypes.object,
    centerAroundCurrentLocation: PropTypes.bool
}

Map.defaultProps = {
    zoom: 13,
    initialCenter: {
        lat: 37.7,
        lng: -122.41
    },
    centerAroundCurrentLocation: false
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBvK1uIdcwdE6m94Wn-yEy8-5HQZcSn9O8",
})(Geoloc6);

import React from 'react';
import { geolocated } from "react-geolocated";
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import Geoloc from './Geoloc';

const mapStyles = {
    width: '100%',
    height: '100%'
};


class Geoloc5 extends React.Component {
    render() {
        // <h4>lat: {this.state.latpo}, lng: {this.state.longpo}</h4>

        return !this.props.isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation</div>
        ) : !this.props.isGeolocationEnabled ? (
            <div>Geolocation is not enabled</div>
        ) : this.props.coords ? (
                    <div>
                        {/* {this.state.geol ? ( */}
                            <Geoloc>
                            <Map
                                google={this.props.google}
                                zoom={6}
                                style={mapStyles}
                                // onDragend={this.centerMoved}
                                Center={{
                                    lat: this.props.coords.latitude,
                                    lng: this.props.coords.longitude
                                }}
                            >
                                <Marker
                                    onMouseover={this.onMouseoverMarker}
                                    Center={{
                                        lat: [this.props.coords.latitude],
                                        lng: [this.props.coords.longitude]
                                    }}
                                />
                                {/* <h2>{this.props.coords.latitude}</h2> */}
                                <h4>Using geolocation javascript Api in React..</h4>

                            </Map>
                            </Geoloc>
                        {/* ) : 'Geolocation is not enabled'} */}

                    </div>
        ) : (
                        <div>Getting the Location data&hellip; </div>
                    );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBvK1uIdcwdE6m94Wn-yEy8-5HQZcSn9O8",
})(Geoloc5);

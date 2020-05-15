import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class Geoloc7 extends Component {
    render() {
        return (
            <div>
                <Map google={this.props.google} zoom={14}>

                    <Marker onClick={this.onMarkerClick}
                        name={'Current Loc'}/>

                    <InfoWindow onClose={this.InfoWindowClose}>
                        <div>
                            <h1>{this.state.selectedPlace.name}:</h1>
                        </div>
                        </InfoWindow>    
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBvK1uIdcwdE6m94Wn-yEy8-5HQZcSn9O8",
})(Geoloc7);

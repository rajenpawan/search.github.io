import React, {Component} from 'react';
import {Map, Marker, InfoWindow, GoogleApiWrapper} from 'google-maps-react';
// import { geolocated } from "react-geolocated";


const mapStyles = {
    width: '95%',
    height: '95%',
    border: '2px solid grey',
    margin: 'auto'
};

class Geoloc2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latpos: [],
      longpos: [],
      // geol: [],
      // geolperm:[],
      error: [],
      selectedPlace:{},
      showingInfoWindow: false,
      activeMarker:{}
    };
  }

   componentDidMount() {
   navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(`Latitude is: ${position.coords.latitude}`);
        // console.log(`Longitude is: ${position.coords.longitude}`);
        // console.log(position);
        this.setState({
          geol: navigator.geolocation,
          // geolperm: navigator.permissions,
          // geolask: navigator.registerProtocolHandler,
          latpos: [position.coords.latitude],
          longpos: [position.coords.longitude],
        })
  
      },
      (error) => {
        // console.error(`Error code: ${error.code} - ${error.message}`);
        this.setState({
          error: (`Error: ${error.message}`)
        })
      }
    );

    // navigator.geolocation.watchPosition((position) => {
    //   console.log(`Longitude is ${position.coords.longitude}`);
    //   console.log(position);
      
    // });
  }


  onMarkerClick = (props, marker) => {
    this.setState({
      selectedPlace: props,
      showingInfoWindow: true,
      activeMarker: marker
    })
  }

  onMapClicked = (props) => {
    if(this.state.showingInfoWindow){
      this.setState({
        showingInfoWindow: true,
        activeMarker: null
      })
    }
  }


  render() {
    return (
      <div>
        <h4>lat: {this.state.latpos}, lng: {this.state.longpos}</h4>

            {this.state.geol ? (
          <Map
            google={this.props.google}
            style={mapStyles}
            // onDragend={this.centerMoved}
            initialCenter ={{
              lat: this.state.latpos,
              lng: this.state.longpos,
            }}
            onClick={this.onMapClicked}
            zoom={20}
          >
            <Marker
              onClick={this.onMarkerClick}
              name={'Current location'}
              position={{
                lat: this.state.latpos,
                lng: this.state.longpos
              }}
            />

            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
            </InfoWindow>
            {/* <h2>{this.props.coords.latitude}</h2> */}

          </Map>
            ) : <div>{this.state.error}</div>}

      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBvK1uIdcwdE6m94Wn-yEy8-5HQZcSn9O8",

})(Geoloc2);
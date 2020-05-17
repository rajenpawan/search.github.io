import React from 'react';
import { geolocated } from "react-geolocated";
import Geoloc2 from './Geoloc2';

class Geoloc8 extends React.Component {
    render() {
        return !this.props.isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation</div>
        ) : !this.props.isGeolocationEnabled ? (
            <div>Geolocation is not enabled</div>
        ) : this.props.coords ? (
            <Geoloc2 />
        ) : (
                        <div>Getting the Location data&hellip; </div>
                    );
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: true,
    },
    userDecisionTimeout: 5000,
})(Geoloc8);
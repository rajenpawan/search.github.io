import React, { Component } from 'react';
import classes from '../../Appp.module.css';

class Geoloc3 extends Component {
    constructor(){
        super();
        this.state = {
            lat: []
        }
    }
    
    componentDidMount() {
      
         var startPos;
        //  var className = "nudge";
        var nudge = classes.Nudge;

            
         var showNudgeBanner = function() {
           nudge.display = "block";
         };

         var hideNudgeBanner = function() {
            nudge.display = 'none';
         };

         var nudgeTimeoutId = setTimeout(showNudgeBanner, 5000);

         var geoSuccess = (position) => {
           hideNudgeBanner();
           clearTimeout(nudgeTimeoutId);

           startPos = position;
           console.log(`Geoloc3 says ${startPos.coords.latitude}`);
           this.setState({
             lat: startPos.coords.latitude,
           });
         };
         var geoError = (error) => {
           switch (error.code) {
             case error.TIMEOUT:
               showNudgeBanner();
               break;
           }
         };
         navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
       
  }

    render() {
        return (
            <div>
                <h2>{this.state.lat}</h2>
            </div>
        )
    }
}

export default Geoloc3;
